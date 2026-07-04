AUTHOR = "Ashley Awesome"
SITENAME = "Ashley Awesome"
SITESUBTITLE = "Just a website for someone called Ashley Awesome"

# GitHub Pages serves project repos at
# https://<username>.github.io/<repo-name>/, not at the domain root, so
# SITEURL has to include the repo name as a path prefix.
SITEURL = "/pelican-meridian-theme"

PATH = "content"
TIMEZONE = "Europe/London"
DEFAULT_LANG = "en"

# Theme root is the repo root, one level up from this file.
THEME = ".."
THEME_TEMPLATES_OVERRIDES = ["theme_overrides"]
PLUGINS = ["pelican.plugins.typst"]

FAVICON = "favicon.png"
AVATAR = "avatar.png"
STATIC_PATHS = ["extra/favicon.png","extra/avatar.png"]
EXTRA_PATH_METADATA = {
    "extra/avatar.png": {"path": "avatar.png"},
    "extra/favicon.png": {"path": "favicon.png"}
}

DIRECT_TEMPLATES = ("index", "preface", "about", "archives", "404")
PREFACE_URL = ""
PREFACE_SAVE_AS = "index.html"
INDEX_URL = "posts/"
INDEX_SAVE_AS = "posts/index.html"
ARCHIVES_URL = "archives/"
ARCHIVES_SAVE_AS = "archives/index.html"

PREFACE_TAGLINE = "An awesome person working across lots of different fields, to create awesome things."
PREFACE_BLURB = "I guess, with the last name 'Awesome' I have to make awesome things.. so that is what I do"
PREFACE_SKILLS = (
    "Flutter / Dart",
    "Kotlin / Android",
    "Python",
    "C / Embedded",
    "Docker",
    "FreeCAD",
    "Linux (Debian, openSUSE)",
    "USB protocols",
)
PREFACE_NOW = "Building a DIY item, that is open source, and easy for everyone to use! How awesome"

DISPLAY_PAGES_ON_MENU = True
MENUITEMS = (("About", "about/"),)

SOCIAL = (
    ("github", "https://github.com/dhitchenor"),
    ("mastodon", "https://fe.disroot.org/@dhitchenor"),
    ("rss", "https://feeds.arstechnica.com/arstechnica/index/"),
    ("email", "mailto:ashleyawesome@thisisnotarealemail.com"),
)

COPYRIGHT_YEAR = 2026

FEATURED_PROJECTS = (
    {
        "name": "Orbital Mechanics",
        "url": "/orbital-mechanics-quick-look.html",
        "desc": "A quick look a orbital mechanics",
        "tags": ("typst", "math", "physics"),
    },
    {
        "name": "Favicon Licensing",
        "url": "/favicon-licensing.html",
        "desc": "Some licnesing information for the favicon used.",
        "tags": ("licensing","favicon"),
    },
)

DEFAULT_PAGINATION = 5
