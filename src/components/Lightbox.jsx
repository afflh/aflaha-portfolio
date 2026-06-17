import { useEffect } from 'react'

// Centered modal/lightbox for viewing an image (e.g. certificates).
// Closes on Escape, on backdrop click, and via the close button.
// `image` is { src, title, sub } or null (closed).
export default function Lightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    // Prevent background scroll while open.
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [image, onClose])

  if (!image) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={image.title || 'Certificate preview'}
      onClick={onClose}
      className="fixed inset-0 z-[1100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[90vh] w-full max-w-[920px] flex-col overflow-hidden rounded-[14px] bg-white shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-4 border-b border-warm-200 px-5 py-4">
          <div className="min-w-0">
            {image.title && (
              <div className="truncate font-archivo text-[16px] font-extrabold text-ink">
                {image.title}
              </div>
            )}
            {image.sub && <div className="truncate text-[13px] text-warm-700">{image.sub}</div>}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-warm-300 text-[18px] leading-none text-warm-700 transition-colors hover:border-ink hover:bg-ink hover:text-white"
          >
            x
          </button>
        </div>

        {/* Image */}
        <div className="flex flex-1 items-center justify-center overflow-auto bg-warm-50 p-4">
          <img
            src={image.src}
            alt={image.title || 'Certificate'}
            className="max-h-[68vh] w-auto max-w-full object-contain"
          />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 border-t border-warm-200 px-5 py-4">
          <a
            href={image.src}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[7px] bg-red-accent px-5 py-[10px] font-archivo text-[13px] font-bold uppercase tracking-[0.04em] text-white no-underline transition-colors hover:bg-red-accentdark"
          >
            Open Full Image <span>-&gt;</span>
          </a>
        </div>
      </div>
    </div>
  )
}
