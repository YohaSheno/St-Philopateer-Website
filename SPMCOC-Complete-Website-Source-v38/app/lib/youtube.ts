export const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@Spmcoc";

const YOUTUBE_CHANNEL_ID = "UCdQzDlT7JiFZgJEzrsmN4ZA";
const YOUTUBE_FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`;
const YOUTUBE_STREAMS_URL = "https://www.youtube.com/@Spmcoc/streams";

export type YouTubeFeature = { videoId: string; title: string; isLive: boolean; embedUrl: string; watchUrl: string };

function decodeXml(value: string) {
  return value.replace(/&amp;/g, "&").replace(/&quot;/g, "\"").replace(/&#39;|&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
}

async function findLiveVideoId() {
  try {
    const response = await fetch(YOUTUBE_STREAMS_URL, { next: { revalidate: 300 } });
    if (!response.ok) return null;
    const page = await response.text();
    const liveBadge = page.indexOf("BADGE_STYLE_TYPE_LIVE_NOW");
    if (liveBadge < 0) return null;
    const nearby = page.slice(Math.max(0, liveBadge - 8000), liveBadge);
    const videoIds = [...nearby.matchAll(/\"videoId\":\"([^\"]+)\"/g)];
    return videoIds.at(-1)?.[1] ?? null;
  } catch { return null; }
}

async function getNewestUpload() {
  const response = await fetch(YOUTUBE_FEED_URL, { next: { revalidate: 300 } });
  if (!response.ok) throw new Error(`YouTube feed returned ${response.status}`);
  const feed = await response.text();
  const entry = feed.match(/<entry>([\s\S]*?)<\/entry>/)?.[1];
  const videoId = entry?.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1];
  const title = entry?.match(/<title>([\s\S]*?)<\/title>/)?.[1];
  if (!videoId) throw new Error("YouTube feed did not include a video");
  return { videoId, title: title ? decodeXml(title) : "Latest church video" };
}

export async function getYouTubeFeature(): Promise<YouTubeFeature | null> {
  try {
    const [liveVideoId, newest] = await Promise.all([findLiveVideoId(), getNewestUpload()]);
    const videoId = liveVideoId ?? newest.videoId;
    return { videoId, title: liveVideoId ? "Live now from St. Philopateer" : newest.title, isLive: Boolean(liveVideoId), embedUrl: `https://www.youtube-nocookie.com/embed/${videoId}?rel=0`, watchUrl: `https://www.youtube.com/watch?v=${videoId}` };
  } catch (error) {
    console.error("Unable to load the church YouTube feed", error);
    return null;
  }
}
