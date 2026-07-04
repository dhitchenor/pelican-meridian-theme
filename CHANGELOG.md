# Changelog

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
