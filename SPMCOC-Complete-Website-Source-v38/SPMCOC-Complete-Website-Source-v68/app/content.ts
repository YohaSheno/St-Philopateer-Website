export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/visit", label: "Visit & Connect" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/services", label: "Services" },
  { href: "/our-future", label: "Build Our Future" },
] as const;

export const weeklyEvents = [
  { day: "Sunday", date: "Aug 16", time: "7:45 - 11:15 AM", title: "Matins & Divine Liturgy", kind: "Liturgy" },
  { day: "Monday", date: "Aug 17", time: "7:00 - 8:30 PM", title: "The Wilderness Eagle Choir", kind: "Choir" },
  { day: "Tuesday", date: "Aug 18", time: "7:00 - 8:30 PM", title: "St. Basil Book Club", kind: "Study" },
  { day: "Wednesday", date: "Aug 19", time: "5:30 - 8:30 AM", title: "Matins & Divine Liturgy", kind: "Liturgy" },
  { day: "Thursday", date: "Aug 20", time: "7:00 - 8:30 PM", title: "Hymns School", kind: "Ministry" },
  { day: "Friday", date: "Aug 21", time: "7:30 - 9:00 PM", title: "David the Psalmist Arabic Bible Study", kind: "Study" },
  { day: "Saturday", date: "Aug 22", time: "4:00 - 5:30 PM", title: "Sunday School", kind: "Children" },
  { day: "Saturday", date: "Aug 22", time: "6:00 - 7:00 PM", title: "Vespers & Raising of Incense", kind: "Liturgy" },
] as const;

export const sermons = [
  { title: "The Power of Forgiveness", summary: "Discover how mercy transforms the heart and restores our relationships.", date: "Oct 24, 2024", duration: "42 min", image: "/images/sermon-church.jpg" },
  { title: "Understanding the Fast", summary: "A pastoral reflection on the spiritual foundations of Orthodox fasting.", date: "Oct 17, 2024", duration: "35 min", image: "/images/sermon-bread.jpg" },
  { title: "Weekly Coptic Hymns", summary: "Ancient melodies and chants preserved through generations of worship.", date: "Oct 10, 2024", duration: "58 min", image: "/images/sermon-choir.jpg" },
  { title: "Living the Eucharist", summary: "How the mystery of the sacrament continues in our everyday actions.", date: "Oct 3, 2024", duration: "29 min", image: "/images/sermon-bible.jpg" },
] as const;
