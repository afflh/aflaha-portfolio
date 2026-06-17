import { useEffect, useRef, useState } from 'react'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'
import { JOURNEY } from '../data/journey'

// Highlights the named project inside a body string with a bold span.
function Body({ text, highlight }) {
  if (!highlight || !text.includes(highlight)) return <>{text}</>
  const [before, after] = text.split(highlight)
  return (
    <>
      {before}
      <strong>{highlight}</strong>
      {after}
    </>
  )
}

export default function Journey() {
  const lineRef = useRef(null)
  const [drawn, setDrawn] = useState(false)

  // Draw the red timeline once it enters view.
  useEffect(() => {
    const el = lineRef.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setDrawn(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setDrawn(true)),
      { threshold: 0.2 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="journey" className="bg-cream px-[clamp(20px,6vw,96px)] py-[clamp(72px,9vw,150px)]">
      <div className="mx-auto max-w-narrow">
        <Reveal>
          <Eyebrow className="mb-[18px]">Journey Into Tech</Eyebrow>
        </Reveal>
        <Reveal as="h2" className="m-0 mb-[14px] font-archivo text-[clamp(30px,4.4vw,56px)] font-black leading-none tracking-[-0.02em] text-ink">
          From curiosity to responsible product building.
        </Reveal>
        <Reveal as="p" className="m-0 mb-14 max-w-[640px] text-[clamp(16px,1.5vw,19px)] leading-[1.7] text-warm-800">
          I started Computer Science with curiosity, not a fixed direction. Each project helped me
          see technology from a new angle and understand that building well means making systems
          useful, meaningful, and responsible for real people.
        </Reveal>

        <div ref={lineRef} className="relative pl-[38px]">
          <div
            className="absolute bottom-[6px] left-2 top-[6px] w-[3px] origin-top bg-red-accent transition-transform duration-1000 ease-out"
            style={{ transform: `scaleY(${drawn ? 1 : 0})` }}
          />

          {JOURNEY.map((item) => (
            <Reveal key={item.phase} className={`relative ${item.last ? '' : 'mb-[38px]'}`}>
              <span
                className={`absolute -left-[38px] top-[2px] h-[19px] w-[19px] rounded-full border-[3px] border-red-accent ${
                  item.last ? 'bg-red-accent' : 'bg-cream'
                }`}
              />
              <div className="mb-[6px] font-archivo text-[12px] font-bold uppercase tracking-[0.14em] text-warm-400">
                {item.phase}
              </div>
              <h3 className="m-0 mb-[6px] font-archivo text-[clamp(20px,2.4vw,26px)] font-extrabold text-ink">
                {item.title}
              </h3>
              <p className="m-0 text-[16px] leading-[1.6] text-warm-700">
                <Body text={item.body} highlight={item.highlight} />
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
