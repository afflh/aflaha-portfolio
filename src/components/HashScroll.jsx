import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// When navigating to a route that carries a hash (e.g. "/#projects" from a
// detail page), scroll to that section once the home page has rendered.
export default function HashScroll() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      // Wait a frame so the target section exists in the DOM.
      requestAnimationFrame(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      })
    }
  }, [pathname, hash])

  return null
}
