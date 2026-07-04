# Publishing this theme

## 1. Submitting to pelicanthemes.com / getpelican/pelican-themes

The gallery at [pelicanthemes.com](https://pelicanthemes.com) is built
from the [getpelican/pelican-themes](https://github.com/getpelican/pelican-themes)
repo, where most themes are included as git submodules pointing at their
own standalone repo

```bash
# Fork getpelican/pelican-themes on GitHub first, then:
git clone --recursive https://github.com/<your-username>/pelican-themes.git
cd pelican-themes
git submodule add https://github.com/<your-username>/meridian.git meridian
git add .gitmodules meridian
git commit -m "Add meridian theme"
git push origin master
```

Then open a pull request from your fork to `getpelican/pelican-themes`.
Their CI automatically builds a preview of every theme against Pelican's
generic sample content and publishes it to pelicanthemes.com — you don't
need to generate or submit a screenshot yourself.

**One thing worth knowing:** that automated preview build uses generic
sample content and won't have `PREFACE_TAGLINE`, `PREFACE_SKILLS`,
`FEATURED_PROJECTS`, or the `DIRECT_TEMPLATES`/`INDEX_SAVE_AS` overrides
this theme's preface homepage depends on (see `README.md`). Without
those settings, the `preface` direct-template simply never gets
triggered, so the automated preview will fall back to showing the
ordinary post-list homepage — harmless, just not a preview of the
preface layout. Anyone who actually installs the theme with the settings
from `README.md` will get the full preface homepage as intended.

## 2. GitHub Pages (live demo)

The demo is built and deployed automatically by
`.github/workflows/pages.yml` — it builds `example/content` (generic
placeholder posts/settings, not your real blog) with this theme on
every push to `main`, and publishes the result. Nothing to build or
commit by hand, and it never goes stale.

One-time setup after pushing the repo:

1. Go to **Settings → Pages** on your repo.
2. Under "Build and deployment", set **Source** to **GitHub Actions**.
3. Push to `main` (or re-run the workflow manually from the Actions
   tab). Your demo will be live at
   `https://<your-username>.github.io/pelican-meridian-theme/` within a
   minute or two.

If you rename the repo, update `SITEURL` in `example/pelicanconf.py` to
match — GitHub Pages serves project repos at
`https://<username>.github.io/<repo-name>/`, so the path prefix has to
agree with the actual repo name or theme assets will 404.

### Editing the demo content

Everything the demo shows lives in `example/` — `example/pelicanconf.py`
for settings, `example/content/` for the sample posts and about page.
Edit either and push; the workflow rebuilds automatically.

## 3. Updating screenshots

The `screenshots/` folder is plain PNGs referenced from `README.md` —
regenerate them any time the theme's visuals change. The quickest way
is a headless browser against a local build:

```bash
pip install playwright --break-system-packages
playwright install chromium
pelican content -s pelicanconf.py -o output   # SITEURL = '' for a local build
python -m http.server 8000 -d output &
python screenshot.py   # see below, then kill the http.server job
```

A minimal `screenshot.py`:

```python
from playwright.sync_api import sync_playwright

pages = [
    ("http://localhost:8000/index.html", "screenshots/preface-dark.png"),
    ("http://localhost:8000/posts/index.html", "screenshots/posts-dark.png"),
    ("http://localhost:8000/your-post-slug.html", "screenshots/article-dark.png"),
]

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 1280, "height": 900})
    for url, out in pages:
        page.goto(url, wait_until="networkidle")
        page.screenshot(path=out, full_page=True)
    browser.close()
```

For light-mode shots, add
`page.evaluate("document.documentElement.setAttribute('data-theme','light')")`
before the screenshot call. For the mobile drawer shot, use a narrow
`viewport` (e.g. 390×844) and `page.click("#sidebar-toggle")` first.
