#metadata((
  title: "A quick look at orbital mechanics",
  date: "2026-07-13",
  category: "Physics",
  tags: ("typst", "math", "physics"),
  slug: "orbital-mechanics-quick-look",
))

Just a short note demonstrating math rendering and citations, since this
theme is often used alongside the `pelican-typst` plugin.

The vis-viva equation relates a body's orbital speed to its distance from
the thing it's orbiting #cite(<curtis2013>):

$ v = sqrt(mu (2/r - 1/a)) $

where $mu$ is the standard gravitational parameter, $r$ is the current
distance, and $a$ is the semi-major axis of the orbit. For a circular
orbit, $r = a$, so this simplifies nicely to:

$ v = sqrt(mu / r) $

Kepler's third law ties orbital period to that same semi-major axis
#cite(<curtis2013>) #cite(<vallado2013>):

$ T = 2 pi sqrt(a^3 / mu) $

None of this needs a full derivation for a demo page — just enough to
show inline math ($mu$, $r$, $a$), block equations, and a couple of
citations landing in the References section below.

#bibliography((
  curtis2013: "Curtis, H. D. (2013). Orbital Mechanics for Engineering Students (3rd ed.). Butterworth-Heinemann.",
  vallado2013: "Vallado, D. A. (2013). Fundamentals of Astrodynamics and Applications (4th ed.). Microcosm Press.",
))
