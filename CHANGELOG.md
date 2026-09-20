# Changelog

## 1.0.1 - Featured posts, preface projects, and copyright year
- FEATURED_PROJECTS renamed to FEATURED_POSTS (it features blog posts, not arbitrary projects — PREFACE_PROJECTS below is the new home for actual past projects). If FEATURED_POSTS is left empty, the theme auto-features the most recent posts instead (DEFAULT_FEATURED_POSTS for how many, DEFAULT_FEATURED_POSTS_ORDER for newest-first vs. oldest-first display of that same selection). The preface homepage's "Selected projects" heading is now "Featured posts" to match.
- Fixed a bug where the sidebar's "Pinned" section only ever showed an explicitly-set FEATURED_PROJECTS/FEATURED_POSTS list and never benefited from the auto-fallback above, even though the preface homepage's cards already did — both now stay consistent regardless of which list is empty.
- Preface homepage's "Stack" heading renamed to "Skills".
- PREFACE_LATER setting — an optional "Later" note shown directly under "Now" on the preface homepage, for what's planned next rather than in progress. Same layout as "Now" with a dashed accent border to mark it as upcoming. Omitted entirely if unset.
- PREFACE_PROJECTS setting (named to match the other PREFACE_* settings) — a row of linkable pills shown directly under the "Now" note on the preface homepage, for past projects distinct from what's currently being worked on. Uses its own accent color (--accent2, blue in dark mode / amber in light mode) so it reads as related to but distinct from "Now" and from category badges, which both use the theme's main --accent. PREFACE_PROJECTS_LINES (default 2) caps how many rows of pills show before the rest are clipped, measured against actual rendered pill positions (not a hardcoded height) so it stays correct at any window width. Omitted entirely if PREFACE_PROJECTS is unset.
- PREFACE_NOW_LABEL, PREFACE_LATER_LABEL and PREFACE_PROJECTS_LABEL override the "Now" and "Preface projects" heading text, for sites that want different wording (e.g. "Currently", "Past work") without touching the theme.
- COPYRIGHT_YEAR accepts a plain year, a range ("2026 - 2027"), or a list of years ("2026, 2027") — shown in the footer exactly as given.


## 1.0.0 — initial fork

`meridian` is forked from [redVi/storm](https://github.com/redVi/storm)
and substantially rewritten:
- Dropped the Ruby/Sass/Compass build; CSS is now a single plain
  `static/css/style.css` file with CSS custom properties for theming.
- Dark-mode-first theme with a light/dark toggle (persisted, no
  flash-of-wrong-theme on load).
- Replaced the top nav with a collapsible sidebar (nav, pinned projects,
  social links), off-canvas on narrow screens. Social links live only
  in the sidebar — not duplicated in the top header bar.
- New preface-style homepage (tagline, blurb, "now" note, skill list,
  featured-project cards), driven entirely by settings — no content
  file required. Blog posts moved to `/posts/`.
- Category and tag pills on post list and article pages.
- Icon-based social links (generic, keyword-matched icons rather than
  brand logos), configurable via the existing `SOCIAL` setting. Covers
  git hosts (including Codeberg), Mastodon/Fediverse/XMPP/Telegram/
  Matrix/Signal, LinkedIn, RSS, email, music platforms (including
  Last.fm), video (YouTube/PeerTube), funding/support links (Ko-fi/
  Patreon/Liberapay/etc.), phone, and PGP/key links, with a generic
  fallback icon for anything else.
- Two silent template extension points, `_includes/extra-head.html`
  and `_includes/extra-body.html` (right before `</head>`/`</body>`
  respectively), picked up automatically via Pelican's
  `THEME_TEMPLATES_OVERRIDES` setting — lets a site inject its own
  `<script>`/`<link>` tags (analytics, a self-hosted JS
  library, etc.) without forking or editing the theme itself. No
  analytics service is hardcoded into the theme.
- `FAVICON` setting — a site declares its own favicon filename
  (`.ico`/`.png`/`.svg`) and the theme renders the correct
  `<link rel="icon">` with the right MIME type, or omits the tag
  entirely if unset, rather than the theme assuming a fixed filename.
- Optional circular profile photo in the top header bar (`AVATAR`
  setting), shown between the sidebar toggle and the site title/
  subtitle. Renders nothing at all if unset; when set, the photo is
  clipped to a circle and cropped to fill it regardless of the source
  image's aspect ratio.
- Pygments syntax highlighting themed for both light and dark.
- Fonts: Inter + JetBrains Mono, loaded from Google Fonts.
- Removed the old icon font, background-image header, and dependency on
  a system `sass`/`compass` toolchain.
