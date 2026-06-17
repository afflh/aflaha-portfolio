import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { NAV_ITEMS, PROFILE, PDF_URL } from '../data/site'
import { sectionClick } from '../lib/scrollToSection'

// Sticky top nav. On the homepage the items are scroll anchors with an active
// underline driven by the section currently in view. On detail pages they link
// back to the homepage anchor.
export default function Nav() {
  const location = useLocation()
  const navigate = useNavigate()
  const onHome = location.pathname === '/'
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  // Track which section is in view (homepage only).
  useEffect(() => {
    if (!onHome) return
    const ids = NAV_ITEMS.map((i) => i.href.slice(1))
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [onHome])

  const close = () => setOpen(false)
  const handleClick = (id, extra) =>
    sectionClick(id, { onHome, navigate, after: extra })

  return (
    <nav className="sticky top-0 z-[900] border-b border-warm-300 bg-cream/[0.88] backdrop-blur-md">
      <div className="mx-auto flex max-w-shell flex-wrap items-center justify-between gap-x-[18px] gap-y-[10px] px-[clamp(18px,5vw,48px)] py-[14px]">
        <Link to="/" onClick={close} className="flex items-center gap-[11px] text-ink no-underline">
          <span className="flex h-[30px] w-[30px] items-center justify-center rounded-[5px] bg-ink font-display text-[15px] tracking-[0.5px] text-cream">
            {PROFILE.initials}
          </span>
          <span className="font-archivo text-[14px] font-extrabold uppercase tracking-[0.12em]">
            {PROFILE.shortName}
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-[clamp(12px,2vw,28px)] font-archivo text-[13px] font-semibold uppercase tracking-[0.06em] md:flex">
          {NAV_ITEMS.map((item) => {
            const id = item.href.slice(1)
            const isActive = onHome && active === id
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={handleClick(id)}
                className={`relative py-1 no-underline transition-colors after:absolute after:-bottom-px after:left-0 after:h-[2px] after:bg-red-accent after:transition-all ${
                  isActive
                    ? 'text-red-accent after:w-full'
                    : 'text-warm-700 after:w-0 hover:text-red-accent hover:after:w-full'
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={PDF_URL}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-[6px] bg-red-accent px-4 py-[10px] font-archivo text-[12.5px] font-bold uppercase tracking-[0.04em] text-white no-underline transition-colors hover:bg-red-accentdark"
          >
            ↓ PDF
          </a>
          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-[34px] w-[34px] flex-col items-center justify-center gap-[5px] rounded-[6px] border border-warm-300 md:hidden"
          >
            <span className={`h-[2px] w-[18px] bg-ink transition-transform ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`h-[2px] w-[18px] bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`h-[2px] w-[18px] bg-ink transition-transform ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-warm-300 bg-cream md:hidden">
          <div className="mx-auto flex max-w-shell flex-col px-[clamp(18px,5vw,48px)] py-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleClick(item.href.slice(1), close)}
                className="border-b border-warm-200 py-3 font-archivo text-[14px] font-semibold uppercase tracking-[0.06em] text-warm-700 no-underline last:border-0"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
