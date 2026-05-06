# Blog Section — Design Spec

**Date:** 2026-05-06  
**Project:** tonic-tech.com (static HTML/CSS/JS, no framework)  
**Goal:** Add a blog section to improve SEO discoverability for App Launcher, with the intent of publishing weekly posts.

---

## Overview

Add a full blog section to tonic-tech.com: an index listing page and individual post pages. The first post targets "quick launch bar Windows 11" search queries using a comparison-style article format.

---

## File Structure

```
tonic-tech-site/
├── blog/
│   ├── index.html                               # Blog listing page
│   └── best-quick-launch-bar-windows-11.html    # First post
├── index.html                                   # Add Blog nav link
├── app-launcher.html                            # Add Blog nav link
└── styles.css                                   # Add blog styles
```

---

## Navigation

Add a "Blog" link to the nav on all existing pages (index.html, app-launcher.html) between "Apps" and "Feedback". Blog post pages also include the full nav.

```html
<a href="/blog/">Blog</a>
```

---

## Blog Index (`/blog/index.html`)

**Layout:** Clean list — each post is a row with tag, title, excerpt, and date. No cards, no sidebar.

**Header:**
- Section label: "Blog"
- H1: "Tips, builds & Windows tricks"
- Subtitle: "Weekly posts on Windows productivity and desktop tooling."

**Post row anatomy:**
- Category tag (e.g. "Windows · Productivity") in orange, small caps
- Post title — white, bold, links to post page
- Excerpt — one sentence, `#c0c0c0`
- Date — right-aligned, muted

**SEO:**
- `<title>` Blog — Tonic Tech
- `<meta description>` Weekly posts on Windows productivity, desktop tools, and app development from Tonic Tech.

---

## Blog Post Page

**URL pattern:** `/blog/<slug>.html`  
**First post slug:** `best-quick-launch-bar-windows-11.html`

**Page anatomy (top to bottom):**
1. `← Blog` back link
2. Category tag ("Windows · Productivity")
3. H1 title
4. Meta line: date · read time
5. Prose body — `#c0c0c0`, 16px, line-height 1.7, max-width ~680px centered
6. Section H2s in white
7. Comparison table (for this post)
8. CTA box at the bottom

**CTA box:** Bordered in orange, App Launcher emoji + name + one-liner description + "Download Free" button linking to the GitHub release MSI.

**SEO:**
- `<title>` The Best Quick Launch Bar for Windows 11 — Tonic Tech
- `<meta description>` We compared the top Windows 11 quick launch bar options — taskbar, PowerToys Run, RocketDock, and App Launcher. Here's what actually works.

---

## First Post: "The best quick launch bar for Windows 11"

**Angle:** Honest comparison — covers Windows Taskbar, PowerToys Run, RocketDock, and App Launcher. App Launcher wins on persistent visibility + custom groups + URL/file support.

**Comparison table columns:** Option · Always visible · Custom groups · URLs & files · Free

**Tone:** Direct, no fluff. Written as a real recommendation, not a sales pitch.

**CTA at bottom:** Download App Launcher free.

---

## Styles

Blog styles added to the existing `styles.css` — no new files, no build step. Classes:

- `.blog-list` — flex column container
- `.blog-row` — individual post row, border-bottom separator
- `.blog-row-tag` — orange category label
- `.blog-row-title` — white, bold, hover turns orange
- `.blog-row-excerpt` — `#c0c0c0`
- `.blog-row-date` — muted, right-aligned
- `.post-header` — post page header block
- `.post-body` — max-width 680px centered prose container
- `.post-meta` — date + read time, muted
- `.post-h2` — section headings
- `.post-p` — body paragraphs, `#c0c0c0`
- `.post-comparison` — comparison table wrapper
- `.post-cta` — bottom CTA box, orange border

Responsive: single-column on mobile, date hidden or tucked below title on narrow screens.

---

## Adding Future Posts

1. Create `/blog/<slug>.html` using the first post as a template
2. Add a new `.blog-row` to `/blog/index.html`
3. Push — Netlify auto-deploys
