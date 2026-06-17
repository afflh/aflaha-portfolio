import { useEffect, useState } from 'react'

// Thin red scroll-progress bar fixed to the top of the viewport.
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const doc = document.scrollingElement || document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      const top = doc.scrollTop || window.scrollY || 0
      setProgress(max > 0 ? Math.min(1, Math.max(0, top / max)) : 0)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update, { passive: true })
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <div className="fixed left-0 top-0 z-[1000] h-[3px] w-full">
      <div
        className="h-full w-full origin-left bg-red-accent"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  )
}
