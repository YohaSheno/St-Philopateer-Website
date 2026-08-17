Saint Philopateer Mercurius Coptic Orthodox Church Website



The official website source code for Saint Philopateer Mercurius Coptic Orthodox Church.

This project is a full-stack React and TypeScript website built with the Next.js App Router and Vinext for Cloudflare. It includes public church information, live schedule and YouTube integrations, ministry registration links, prayer and newsletter support, online giving, a future-campus presentation, authentication helpers, database routes, and an administrative dashboard.

Live website: church-website.youhannamorad2006.chatgpt.site

Table of Contents

Main Features

Technology

Getting Started

Project Structure

Quick Editing Guide

Website Pages

Shared Components

Colors, Styling, and Animations

Images and Video

External Services

Forms, Database, and Admin

Available Commands

Common Editing Instructions

Testing on a Phone

Publishing Checklist

Important Maintenance Rules

Troubleshooting

Main Features

Responsive desktop, tablet, and mobile layouts

Church history, beliefs, clergy, and patron saint pages

Live church schedule loaded from Google Calendar

Live-stream detection and latest uploads from YouTube

Sunday School, Hymns School, and Pre-Servants registration links

Volunteer and pastoral appointment links

Prayer request, question, and suggestion form

Zeffy online-donation integration

Future church campus presentation with renderings and video

Scroll-reveal effects, ambient motion, and interactive 3D card tilting

Reduced-motion accessibility support

Cloudflare D1 and Drizzle ORM database support

Sign in with ChatGPT helpers and a protected administrative route

Technology

Technology

Purpose

React 19

User-interface components

TypeScript 5

Type-safe application code

Next.js 16

App Router, pages, metadata, and server routes

Vinext

Runs the Next.js application through Vite and Cloudflare

Vite 8

Local development and production bundling

Cloudflare Workers

Production runtime

Cloudflare D1

Prayer-request and newsletter database

Drizzle ORM

Database schema and queries

CSS

Complete responsive design and animation system

Requirements

Node.js 22.13.0 or newer

npm

Visual Studio Code is recommended

Getting Started

1. Download or clone the project

git clone YOUR_GITHUB_REPOSITORY_URL
cd YOUR_REPOSITORY_FOLDER

If you downloaded the project as a ZIP, extract it and open the extracted root folder in Visual Studio Code.

2. Install the dependencies

npm install

3. Start the local website

npm run dev

Open the local address printed in the terminal. It is normally:

http://localhost:5173

This is not a traditional Live Server project. Do not look for or open an index.html file. The website must be started with npm run dev.

Project Structure

church-website/
├── app/                    Website pages, components, CSS, integrations, and API routes
│   ├── components/         Reusable interface components
│   ├── lib/                Google Calendar and YouTube integrations
│   ├── api/                Prayer and newsletter server endpoints
│   ├── page.tsx            Home page
│   ├── layout.tsx          Global metadata, fonts, and document layout
│   ├── content.ts          Navigation and shared sample content
│   └── globals.css         Complete design and responsive system
├── public/
│   ├── images/             Church photographs, icons, cards, and renderings
│   └── videos/             Future-campus walkthrough video
├── db/                     D1 database connection and Drizzle schema
├── drizzle/                SQL migrations and migration metadata
├── worker/                 Cloudflare Worker entry point
├── build/                  Hosting build integration
├── scripts/                Installation, build, and validation helpers
├── tests/                  Production HTML tests
├── examples/               Optional D1 example; not used by the public website
├── .openai/hosting.json    Hosted-site identity and Cloudflare bindings
├── package.json            Commands and dependency versions
├── vite.config.ts          Vite, Vinext, Cloudflare, and local-server settings
└── tsconfig.json           TypeScript configuration and path aliases

How website routes work

Each folder inside app/ that contains a page.tsx file becomes a website URL.

File

Website URL

app/page.tsx

/

app/about/page.tsx

/about

app/our-saint/page.tsx

/our-saint

app/our-future/page.tsx

/our-future

app/watch/page.tsx

/watch

Server endpoints use route.ts instead of page.tsx. For example, app/api/prayer/route.ts becomes /api/prayer.

Quick Editing Guide

Use this table when you need to find the correct file quickly.

What you want to change

File to open

Navigation names, order, or destinations

app/content.ts

Header, footer, church logo, or social links

app/components/site-shell.tsx

Browser title, description, favicon, or fonts

app/layout.tsx

Colors, spacing, page layouts, or mobile styling

app/globals.css

Home-page content, address, and map links

app/page.tsx

Church history, clergy, and mission

app/about/page.tsx

Saint Philopateer Mercurius biography and prayer

app/our-saint/page.tsx

Schedule-page layout

app/schedule/page.tsx

Connected Google Calendar

app/lib/google-calendar.ts

First-visit information

app/visit/page.tsx

Pastoral appointment information and link

app/meet-us/page.tsx

Watch-page content and resource cards

app/watch/page.tsx

Connected YouTube channel

app/lib/youtube.ts

Volunteer information and form link

app/volunteer/page.tsx

Ministry descriptions and registration forms

app/registration/page.tsx

Future-campus description, phases, and statistics

app/our-future/page.tsx

Giving-page wording and fallback donation link

app/give/page.tsx

Embedded Zeffy donation form

app/components/zeffy-donation.tsx

Prayer, question, and suggestion form

app/components/forms.tsx

Photographs, artwork, and renderings

public/images/

Future-campus video

public/videos/future-church-tour.mp4

Website Pages

Home — /

File: app/page.tsx

Contains the main hero, service times, live upcoming events, ministry spotlights, church-tradition section, Worship/Learn/Belong pillars, prayer-care form, address, and map buttons.

About Us — /about

File: app/about/page.tsx

Contains the church history, apostolic background, mission, and leadership biographies for Pope Tawadros II, Metropolitan Youssef, Bishop Basil, and Fr. Fam Nicoula.

Our Saint — /our-saint

File: app/our-saint/page.tsx

Contains the story of Saint Philopateer Mercurius, important facts, biography chapters, the two-swords explanation, iconography, and English and Coptic prayers.

Schedule — /schedule

File: app/schedule/page.tsx

Displays the current week from the connected Google Calendar, groups events by day, shows event types and locations, and provides calendar-subscription options.

Visit — /visit

File: app/visit/page.tsx

Contains first-visit information, the priest’s contact information, liturgy duration, dress guidance, Eucharist information, fellowship details, and the Sights, Sounds, and Smells cards.

Meet Us — /meet-us

File: app/meet-us/page.tsx

Contains pastoral-care information and the link for scheduling an appointment with Fr. Fam.

Watch — /watch

File: app/watch/page.tsx

Detects a live YouTube stream or displays the newest channel upload. It also contains the church’s faith-resource cards and Diocese registration link.

Volunteer — /volunteer

File: app/volunteer/page.tsx

Contains volunteer information, service-area cards, scripture, and the Google volunteer form link.

Register — /registration

File: app/registration/page.tsx

Contains Sunday School, Hymns School, and Pre-Servants descriptions, images, and registration links.

Our Future — /our-future

File: app/our-future/page.tsx

Contains the complete future-campus announcement, anticipated end-of-2026 groundbreaking, architectural video and renderings, Phase One community and ministry center, Phase Two sanctuary, building capacities, and legacy message.

Give — /give

File: app/give/page.tsx

Contains the stewardship message, giving options, embedded Zeffy donation area, direct fallback donation link, and scripture section.

Support and protected routes

Route

File

Purpose

/members

app/members/page.tsx

Redirects older Members links to Meet Us

/login

app/login/page.tsx

Starts Sign in with ChatGPT and returns to Members

/admin

app/admin/page.tsx

Displays recent stored prayer requests and newsletter totals

Unknown URL

app/not-found.tsx

Custom page-not-found screen

Shared Components

File

Component

Purpose

app/components/site-shell.tsx

SiteHeader

Logo, church name, navigation, and mobile menu

app/components/site-shell.tsx

SiteFooter

Church name, social media, and copyright

app/components/site-shell.tsx

PageShell

Adds the shared header, footer, motion, and main layout

app/components/site-shell.tsx

PageHero

Reusable hero for inner pages

app/components/reveal.tsx

Reveal

Animates sections when they enter the screen

app/components/motion-system.tsx

MotionSystem

Pointer glow, scroll progress, header state, and 3D tilt

app/components/forms.tsx

PrayerForm

Prayer Request, Question, and Suggestion choices

app/components/forms.tsx

NewsletterForm

Reusable database-backed email signup form

app/components/calendar-sync.tsx

CalendarSync

Google, Apple, and Outlook calendar subscription options

app/components/zeffy-donation.tsx

ZeffyDonation

Embedded Zeffy donation form

Server and client components

Files without "use client" are server components by default. Client components begin with "use client" because they use browser features such as state, pointer movement, scrolling, iframes, or the clipboard.

Do not remove "use client" from these files:

app/components/site-shell.tsx

app/components/motion-system.tsx

app/components/reveal.tsx

app/components/forms.tsx

app/components/calendar-sync.tsx

app/components/zeffy-donation.tsx

Colors, Styling, and Animations

The complete visual system is in:

app/globals.css

The main brand variables are near the top of that file:

--wine: #7f181b;
--wine-dark: #4a0d10;
--wine-deep: #26090b;
--gold: #d9a12e;
--gold-pale: #f2d695;
--ink: #251815;
--ivory: #faf7ef;
--paper: #fffdf8;

Change these variables first when adjusting the overall brand colors. Individual pages use descriptive CSS prefixes such as .home-, .about-, .saint-, .schedule-, .visit-, .watch-, .registration-, .future-, .donation-, and .volunteer-.

Responsive layouts are mainly controlled by media queries at:

1050px for tablets and smaller desktops

820px for mobile layouts

560px for small phones

3D card effect

Interactive cards use the data-tilt attribute:

<article className="registration-card" data-tilt>
  ...
</article>

app/components/motion-system.tsx reads the pointer position and updates CSS variables. The matching class in app/globals.css applies the perspective and rotation.

Scroll reveal

Wrap content in the shared Reveal component to animate it when it enters the viewport. Keep the prefers-reduced-motion rules in app/globals.css; they protect accessibility for visitors who request less motion.

Images and Video

All public images are stored in:

public/images/

The campus video is stored in:

public/videos/future-church-tour.mp4

When referencing public media in JSX, do not include the word public:

File on disk: public/images/church-logo.jpg
Path in JSX:  /images/church-logo.jpg

Main media files

File

Used for

church-logo.jpg

Header, home hero, and tradition seal

home-sanctuary-hero.webp

Home-page hero background

sunday-school-card.webp

Home, registration, and learning sections

home-hymns-school-card.jpeg

Home Hymns School card

hymns-school-card.webp

Registration Hymns School card

pre-servants-card.png

Home and registration Pre-Servants cards

visit-sanctuary.jpg

Home, Visit, and Volunteer sections

st-anthony.jpg

Home and About pages

about-sanctuary.jpg

About and registration hero areas

pope-tawadros.jpg

Pope Tawadros II profile

metropolitan-youssef.jpg

Metropolitan Youssef profile

bishop-basil.jpg

Bishop Basil profile

fr-fam.jpg

About, Visit, and Meet Us pages

st-philopateer-mercurius-icon.webp

Our Saint page

coptic-cross-prayer.png

Our Saint prayer section

schedule-sanctuary.jpg

Schedule-page hero

sights-coptic-iconography.png

Visit Sights card

coptic-cymbal-triangle.png

Visit Sounds card

coptic-censer-incense.png

Visit Smells card

live-sanctuary.jpg

Watch page and Worship sections

coptic-qa-card.webp

Watch Q&A resource

sunday-sermons-card.webp

Watch Sunday Sermons resource

ecumenical-relations-card.webp

Watch Ecumenical Relations resource

learn-coptic-church-card.png

Watch Learn More resource

future-church-sunset.png

Our Future hero, video poster, gallery, and closing

future-church-daylight.png

Our Future gallery

good-shepherd.jpg

Give-page hero

future-church-tour.mp4

Our Future walkthrough video

Safely replacing an image

Prepare a JPG, PNG, WEBP, or JPEG replacement.

Use a similar orientation: wide images for heroes and cards, portrait images for clergy.

Give the new image the exact same filename and extension.

Replace only that file inside public/images/.

Reload every page that uses the image and check desktop and mobile cropping.

For hero backgrounds, begin with an image approximately 1800–2400 pixels wide and compress it before publishing.

External Services

Service

File to edit

What is controlled there

Google Calendar

app/lib/google-calendar.ts

Calendar ID, public ICS feed, event parsing, time zone, and cache time

Calendar subscription buttons

app/components/calendar-sync.tsx

Google, Apple, Outlook, and copy-link behavior

YouTube live/latest video

app/lib/youtube.ts

Channel URL, channel ID, streams URL, feeds, and cache time

Watch resources

app/watch/page.tsx

Q&A, sermons, church, evangelism, and related links

Zeffy embedded form

app/components/zeffy-donation.tsx

Embedded campaign URL

Zeffy fallback button

app/give/page.tsx

Direct campaign URL

Registration forms

app/registration/page.tsx

Three registrationUrl values

Volunteer form

app/volunteer/page.tsx

volunteerFormUrl

Pastoral appointment

app/meet-us/page.tsx

FATHER_FAM_SCHEDULE_URL

Google and Apple Maps

app/page.tsx

Address and map URL constants

Social media

app/components/site-shell.tsx

Footer Facebook, YouTube, and Instagram links

Diocese registration

app/watch/page.tsx

Membership link

Changing the church calendar

Normal schedule changes should be made directly in the connected Google Calendar. The website reads its public ICS feed automatically. Only change CALENDAR_ID in app/lib/google-calendar.ts if the church moves to a different calendar.

The calendar must remain publicly readable. If it becomes private or unavailable, the website will display its fallback state.

Changing the YouTube channel

Update all three channel-related constants in app/lib/youtube.ts:

YOUTUBE_CHANNEL_URL

YOUTUBE_CHANNEL_ID

YOUTUBE_STREAMS_URL

The channel ID is different from the visible @handle. The Watch page checks for a live stream first and otherwise displays the newest upload.

weeklyEvents and sermons inside app/content.ts are sample arrays that are not currently rendered by the live Home, Schedule, or Watch pages.

Forms, Database, and Admin

Current prayer form

The visible Home-page PrayerForm in app/components/forms.tsx opens the visitor’s email application with a message addressed to requests@spmcoc.org. The visitor must still press Send inside the email application.

The Prayer Request, Question, and Suggestion selections all use this email flow.

The database-backed /api/prayer route exists, but the current visible PrayerForm does not call it. Home-page submissions are therefore not automatically saved in D1 or displayed in /admin unless the form is connected to that endpoint later.

Database files

File

Purpose

db/schema.ts

Defines prayer-request and newsletter-subscriber tables

db/index.ts

Reads the Cloudflare D1 binding and creates the Drizzle client

drizzle/0000_married_living_lightning.sql

Creates the two database tables and newsletter email index

drizzle.config.ts

Configures Drizzle migration generation

.openai/hosting.json

Declares the D1 binding and hosted-site identity

API routes

Endpoint

File

Purpose

POST /api/prayer

app/api/prayer/route.ts

Validates and stores a prayer request in D1

POST /api/newsletter

app/api/newsletter/route.ts

Validates and stores a unique newsletter email

NewsletterForm exists in app/components/forms.tsx, but it is not currently displayed on a public page.

Authentication and admin

app/chatgpt-auth.ts reads the identity headers supplied by the hosting platform.

app/admin/page.tsx requires sign-in and displays the 12 most recent stored prayer requests, newsletter count, and website status.

app/login/page.tsx starts the sign-in flow.

Authentication identifies the signed-in person, but the source does not currently define a church-staff email allowlist.

Before treating /admin as staff-only, configure the hosting access policy or add a server-side allowlist of approved email addresses.

Available Commands

Command

Purpose

npm install

Installs project dependencies

npm run dev

Starts the local development server with live refresh

npm run lint

Checks the source with ESLint

npm run build

Runs the Linux/Sites production build and artifact validation

npm run start

Starts an already-built production bundle

npm test

Builds the site and tests its rendered metadata

npm run validate:artifact

Rechecks the built Worker and hosting manifest

npm run db:generate

Generates a new Drizzle migration after schema changes

The supplied npm run build and npm run install:ci helper scripts target Linux and use GNU tools such as timeout and flock. On a Mac, use npm install and npm run dev for normal editing. The hosting workflow performs the verified production build when publishing.

Common Editing Instructions

Change text on a page

Find the page in the Quick Editing Guide.

Open its page.tsx file.

Search for the exact visible sentence.

Replace only the text and keep the surrounding JSX tags.

Save the file and refresh that page locally.

Example:

<h2>Original title</h2>
<p>Original paragraph.</p>

Change only the visible wording:

<h2>New title</h2>
<p>Your revised paragraph.</p>

Change the navigation order

Open app/content.ts and move complete entries inside navItems:

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  // Other pages...
] as const;

Change label to rename a navigation tab.

Change href only when the matching route folder exists.

Move the full { href, label } line to reorder a tab.

Change a registration form

Open app/registration/page.tsx.

Find the correct ministry inside the programs array.

Replace only its registrationUrl value.

Save and test the registration button in a new browser tab.

Change the volunteer form

Open app/volunteer/page.tsx and replace the volunteerFormUrl constant.

Change the pastoral appointment link

Open app/meet-us/page.tsx and replace FATHER_FAM_SCHEDULE_URL.

Change the Zeffy campaign

Update both locations:

Change formUrl in app/components/zeffy-donation.tsx.

Change zeffyUrl in app/give/page.tsx.

Test the embedded form and the fallback button.

Add another Watch resource card

Open app/watch/page.tsx.

Copy one complete resource-card link inside the resource grid.

Change its URL, image path, eyebrow, title, description, and button label.

Add the new image to public/images/.

Test the grid on desktop and mobile.

Update the future-campus page

Open app/our-future/page.tsx.

Edit the introduction, phase sections, statistics, or closing message.

Keep the existing class names so the design and animations remain intact.

Replace the two campus renderings in public/images/ only when needed.

Replace public/videos/future-church-tour.mp4 only with a browser-ready MP4.

Add a new page and navigation tab

Create app/new-page/page.tsx.

Build the page using the shared PageShell and PageHero components.

Add { href: "/new-page", label: "New Page" } to navItems in app/content.ts.

Add page-specific CSS to app/globals.css.

Test the new route, desktop navigation, and mobile menu.

Testing on a Phone

Keep npm run dev running on the Mac.

Connect the Mac and phone to the same non-guest Wi-Fi network.

Find the Network address printed by Vite in the terminal.

Enter the complete http:// address on the phone, including the port.

Example:

http://192.168.1.23:5173

Do not replace http with https. If the page does not load, temporarily disable a VPN or cellular data and allow incoming Node.js connections in the macOS firewall.

Publishing Checklist

Before publishing a change:

Check every edited page on both desktop and mobile.

Test every link you changed.

Confirm new images are clear, correctly cropped, and compressed.

Confirm navigation works and the mobile menu opens and closes.

Confirm Schedule still loads or shows a useful fallback.

Confirm Watch still detects live/latest YouTube content or shows its fallback.

Confirm Zeffy, Google Forms, map links, and appointment links open correctly.

Keep Bible quotations labeled as NKJV when applicable.

Run npm run lint when your local environment supports it.

Never commit private passwords, keys, tokens, or service-account files.

Important Maintenance Rules

Keep page-specific text in the matching page.tsx file.

Keep reusable behavior in app/components/.

Keep Google Calendar and YouTube logic in app/lib/.

Keep public images and videos inside public/.

Reference media with /images/... or /videos/..., not public/images/....

Do not manually edit node_modules, dist, .next, .sites-runtime, or cache folders.

Preserve the responsive media queries and reduced-motion accessibility rules.

Do not remove "use client" from components that require browser behavior.

Make one focused change at a time and test the affected route before continuing.

Troubleshooting

npm reports an EACCES permissions error on Mac

If the error says the npm cache contains root-owned files, use the ownership command displayed by npm. It will look similar to:

sudo chown -R YOUR_USER_ID:YOUR_GROUP_ID "/Users/YOUR_USERNAME/.npm"

Use the exact IDs and path shown in your own terminal, then run npm install again.

The site does not open with Live Server

That is expected. This project has no standalone index.html. Start it with:

npm run dev

A picture does not appear

Confirm the file is inside public/images/.

Confirm capitalization and the extension match exactly.

Use /images/file-name.jpg in JSX.

Do not use public/images/file-name.jpg in JSX.

Schedule events do not appear

Confirm the connected Google Calendar is public.

Confirm CALENDAR_ID in app/lib/google-calendar.ts is correct.

Check whether the calendar feed is temporarily unavailable.

The Watch page does not show the expected channel

Check the three YouTube constants in app/lib/youtube.ts.

Remember that the channel ID and @handle are not the same value.

Allow for the integration’s cache time before expecting a newly uploaded video.

A form button opens the wrong destination

Open the page listed in the External Services table and replace only the relevant URL constant. Test it in a new browser tab before publishing.

License and Use

This repository contains church-specific writing, branding, photographs, artwork, and integrations. Confirm permission before reusing those assets outside Saint Philopateer Mercurius Coptic Orthodox Church.
