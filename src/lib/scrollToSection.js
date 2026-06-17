// Smooth-scroll to an in-page section by id. Works with HashRouter (where the
// URL hash is reserved for routing, so we cannot rely on native anchor jumps).
export function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

// Returns an onClick handler for an in-page nav link.
// `navigate` (from react-router) lets us first return to "/" if we're on a
// detail page, then scroll to the section.
export function sectionClick(id, { onHome, navigate, after } = {}) {
  return (e) => {
    e.preventDefault()
    if (onHome) {
      scrollToSection(id)
    } else if (navigate) {
      // Route home with the hash; HashScroll handles the scroll after render.
      navigate({ pathname: '/', hash: `#${id}` })
    }
    after?.()
  }
}
