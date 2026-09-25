# Guide for Jason — Managing Your Website

This covers the three things you asked about:
1. How to add new blog posts
2. Connecting your contact form (Wix Forms) so submissions reach your email
3. Setting up your booking links as conversion goals in Google Analytics

---

## 1. How to add a new blog post

Each blog post is its own HTML file (for example, `blog-anxiety.html`). The easiest way to add a new one:

**Step 1 — Copy an existing post.**
Duplicate any existing post file, e.g. copy `blog-gratitude.html` and rename it to something short and descriptive, like `blog-managing-stress.html`. Use lowercase words separated by hyphens, no spaces.

**Step 2 — Change the text at the top (the "head").**
Near the top of the file, update:
- `<title>` — the browser-tab title
- `<meta name="description" ...>` — the 1–2 sentence Google summary
- `<link rel="canonical" href="...">` — change the filename to your new file's name
- The `og:title`, `og:description`, `og:url`, and `og:image` lines (same info, for social sharing)
- Inside the `application/ld+json` block: the `headline`, `datePublished` (format `YYYY-MM-DD`), and `image`

**Step 3 — Change the visible article.**
Find the `<main id="main">` section and update:
- The category, date, and read-time in the line with `class="meta"`
- The `<h1>` headline
- The `article-hero-img` image `src` and `alt`
- The body paragraphs (`<p>...</p>`), headings (`<h2>...</h2>`), and lists (`<ul><li>...</li></ul>`)

**Step 4 — Add a photo.**
Put your image in `assets/img/` and reference it as `assets/img/your-image.jpg`. Keep images under ~1400px wide so pages load fast.

**Step 5 — Add it to the Resources page.**
Open `resources.html`, find the `post-grid` section, copy one of the `<article class="post reveal">` blocks, and update its image, title, description, and link (`href="blog-your-new-file.html"`).

**Step 6 — Add it to `sitemap.xml`** (helps Google find it).
Copy one of the `<url>...</url>` blog lines and change the filename.

> **On Wix:** because you're hosting on Wix, you can *also* just use Wix's built-in blog tool, which is even simpler — write in their editor and hit publish. If you go that route, keep the "Resources" page on your new site linking to your Wix blog. Either approach works; the native files above give you full control and the best SEO.

---

## 2. Connecting your contact form (Wix Forms)

The contact form on `contact.html` is built and styled, and shows a friendly confirmation message when someone submits. Right now it does **not** yet send you an email — that final connection happens inside Wix. Two options:

### Option A — Wix Forms (recommended, since you're on Wix)
1. In the Wix Editor, add a **Wix Form** element (or use the existing form app).
2. Set the form fields to match: **Name, Email, Phone, "Tell me a bit about your concerns"**.
3. In the form's **Settings → Submissions**, set the notification email to your private address: **JASTownsley@gmail.com** (this stays private; the public-facing email on the site remains Connect@Arterie.ca).
4. Wix automatically stores every submission in your dashboard **and** emails you — no third-party service needed.

### Option B — Formspree (only if you move off Wix)
If you ever host this as plain HTML somewhere other than Wix, Formspree is a good free option:
1. Create a free account at formspree.io and make a new form; it gives you an endpoint URL.
2. In `contact.html`, change the `<form>` tag to: `<form action="https://formspree.io/f/XXXX" method="POST">` and remove the demo JavaScript handler.

**My recommendation:** stick with **Wix Forms** — it's built in, free, keeps a record, and routes to your Gmail automatically. Formspree only makes sense off Wix.

---

## 3. Booking links as Google Analytics conversions

Your "Book a free meet & greet" and "Join the cancellation list" buttons already carry tracking labels in the code:
- Booking buttons have `data-goal="book_meet_greet"`
- The cancellation-list button has `data-goal="join_cancellation_list"`

They link to your Jane pages:
- Booking: `https://ljtherapy.janeapp.com`
- Cancellation list: `https://ljtherapy.janeapp.com/wait_list/new`

### To count these as conversions in GA4:
1. In **Google Analytics (GA4) → Admin → Data streams**, open your website stream and make sure **Enhanced measurement** is ON (this auto-tracks outbound link clicks).
2. Go to **Admin → Events**. After a few clicks have happened, you'll see a `click` event. Use **"Create event"** to make a new event that fires when someone clicks a link to `ljtherapy.janeapp.com` (condition: `click` where `link_domain` contains `janeapp.com`). Name it `book_appointment`.
3. Go to **Admin → Conversions → New conversion event**, and enter `book_appointment`. GA will now count every click through to Jane as a conversion.
4. (Optional) Make a second event for the cancellation list using the URL containing `/wait_list/`.

> Because booking actually completes on Jane (a separate system), GA can only track the *click-through* to Jane, not the finished booking. That click-through is the standard, reliable conversion signal for local-SEO measurement. If you want true end-to-end booking tracking later, Jane has its own analytics, and we can look at connecting them.

### Does this help SEO / Google reputation?
- **Conversion tracking** itself doesn't change rankings — but it tells you which pages and traffic sources actually produce bookings, so you can invest in what works.
- **Your verified profiles** (Psychology Today, ProvenExpert, OASW, OCSWSSW) *do* help build authority and trust signals, and are now linked from your About page.
- The biggest local-SEO lever remains your **Google Business Profile** (reviews, categories, posts) — keep that active.

---

*Questions? This site was built to be easy to hand off. Every page shares the same header, footer, and stylesheet (`assets/style.css`), so a change there updates the whole site.*
