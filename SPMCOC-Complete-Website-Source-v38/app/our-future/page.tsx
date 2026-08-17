import type { Metadata } from "next";
import { Reveal } from "../components/reveal";
import { PageHero, PageShell } from "../components/site-shell";

export const metadata: Metadata = {
  title: "Our Future",
  description: "Discover the future church campus of St. Philopateer Mercurius Coptic Orthodox Church.",
};

export default function OurFuturePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Vision & growth"
        title="Our Future"
        description="A vision taking shape for the next chapter of our growing church family."
        image="/images/future-church-sunset.png"
      />

      <section className="future-intro-section">
        <div className="container future-intro-grid">
          <Reveal>
            <div className="future-intro-copy">
              <p className="eyebrow gold">A home for generations</p>
              <h2>Our Future Church Campus</h2>
              <div className="future-milestone">
                <span>Anticipated groundbreaking</span>
                <strong>End of 2026</strong>
              </div>
              <div className="future-intro-text">
                <p>
                  We are grateful to announce the next chapter in the life of Saint Philopateer Mercurius Coptic Orthodox Church. After years of prayer, planning, and growth, we are preparing to begin construction on a permanent church campus that will serve our parish and the surrounding community for generations to come.
                </p>
                <p>
                  More than a construction project, this campus represents a long-term investment in worship, education, fellowship, and service. Every part of the design has been thoughtfully planned to meet the spiritual, educational, and social needs of our growing parish while preserving the rich heritage of the Coptic Orthodox faith.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="future-video-stage" data-tilt>
              <div className="future-video-halo" aria-hidden="true" />
              <video controls preload="metadata" poster="/images/future-church-sunset.png">
                <source src="/videos/future-church-tour.mp4" type="video/mp4" />
                Your browser does not support embedded video.
              </video>
              <div className="future-video-label">
                <span>Architectural vision</span>
                <strong>Explore the future campus</strong>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal>
        <section className="section future-gallery-section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">The vision</p>
              <h2>Designed for worship, fellowship, and generations to come.</h2>
            </div>
            <div className="future-render-grid">
              <figure className="future-render future-render-wide" data-tilt>
                <img src="/images/future-church-sunset.png" alt="Sunset architectural rendering of the future St. Philopateer Mercurius church campus" />
                <figcaption><span>01</span> Evening perspective</figcaption>
              </figure>
              <figure className="future-render future-render-tall" data-tilt>
                <img src="/images/future-church-daylight.png" alt="Daylight architectural rendering of the future St. Philopateer Mercurius church campus" />
                <figcaption><span>02</span> Front campus perspective</figcaption>
              </figure>
            </div>
          </div>
        </section>
      </Reveal>

      <section className="section future-phases-section">
        <div className="container future-phases-heading">
          <Reveal>
            <p className="eyebrow">A two-phase vision</p>
            <h2>One campus, thoughtfully built for the life of the Church.</h2>
          </Reveal>
        </div>
        <div className="container future-phases-grid">
          <Reveal>
            <article className="future-phase-card future-phase-one" data-tilt>
              <div className="future-phase-number" aria-hidden="true">01</div>
              <p className="eyebrow gold">Phase One</p>
              <h3>The Community &amp; Ministry Center</h3>
              <p>
                The first phase of the project will feature a beautiful three-story multipurpose building that will quickly become the heart of parish life. A chapel inspired by the timeless architecture of ancient Coptic churches and monasteries will serve as a sacred space for liturgies and sacraments. It will reflect the beauty of our tradition through authentic iconography, handcrafted mosaics, traditional carved details, marble work, and ceiling designs reminiscent of the churches of Old Cairo and the Egyptian desert.
              </p>
              <p>
                The first floor will also include a fully equipped event hall accommodating up to 300 guests, complete with an adjoining theater and a full commercial kitchen to support retreats, banquets, and community gatherings. A dedicated Korban bakery will provide a reverent space for preparing the holy oblation bread.
              </p>
              <p>
                Recognizing the importance of our young people, the building will feature a welcoming youth lounge for fellowship and community building, as well as a church library offering spiritual books, theological resources, and research materials for both students and Sunday School servants.
              </p>
              <p>
                The second floor will be home to 18 modern Sunday School classrooms equipped with state-of-the-art educational technology to serve children, youth, and adult education. The third floor will provide additional fellowship areas, including an indoor social lounge and an outdoor terrace where families can gather. It will also include guest accommodations for visiting bishops and clergy.
              </p>
              <p>
                Adjacent to the building, a full-size NBA-regulation basketball gymnasium will serve as a flexible recreation space for basketball, volleyball, pickleball, and parish gatherings, reflecting our commitment to nurturing both spiritual growth and healthy community life.
              </p>
            </article>
          </Reveal>

          <Reveal>
            <article className="future-phase-card future-phase-two" data-tilt>
              <div className="future-phase-number" aria-hidden="true">02</div>
              <p className="eyebrow gold">Phase Two</p>
              <h3>The Main Sanctuary</h3>
              <p>
                The second phase of the project will bring to life the permanent church sanctuary, a sacred space designed to welcome around 500 worshipers. Inspired by the beauty and reverence of historic Coptic churches, the sanctuary will be adorned with traditional iconography, intricate mosaics, marble work, and sacred architectural elements that lift the heart toward heaven.
              </p>
              <p>
                Two bell towers will stand as visible symbols of our witness in the community. At the center will be the main altar dedicated to St. Philopateer Mercurius. A mezzanine level will provide additional seating while preserving the openness and beauty of the space, with two additional side chapels for weekday liturgies and special services.
              </p>
              <div className="future-phase-stat-grid" aria-label="Main sanctuary highlights">
                <div><strong>500</strong><span>Worshipers</span></div>
                <div><strong>2</strong><span>Bell towers</span></div>
                <div><strong>2</strong><span>Side chapels</span></div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="future-closing-band">
        <div className="future-closing-orbit" aria-hidden="true" />
        <Reveal>
          <div className="future-closing-copy">
            <p className="eyebrow gold">Building for future generations</p>
            <h2>A lasting legacy of faith, hope, and service.</h2>
            <p>
              This project is about far more than buildings. It is about creating a permanent spiritual home where sacraments are celebrated, faith is formed, families are supported, and the love of Christ is shared. We invite every member of our parish family and all friends of the community to walk with us on this journey through your prayers, participation, and generosity. Together, by God&apos;s grace, we are building not only a church campus, but a lasting legacy of faith, hope, and service for future generations.
            </p>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
