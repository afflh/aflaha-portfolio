import { useState } from 'react'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'
import Lightbox from '../components/Lightbox'
import { RESEARCH_RECOGNITION, CERTIFICATIONS } from '../data/experience'

function CertCard({ item, badge, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      aria-label={`View certificate: ${item.title} - ${item.sub}`}
      className="block w-full overflow-hidden rounded-[12px] border border-warm-200 bg-white text-left text-inherit no-underline transition-[border-color,box-shadow] duration-[250ms] hover:border-ink hover:shadow-[0_12px_26px_rgba(0,0,0,0.08)]"
    >
      <div
        className="aspect-[3/2] overflow-hidden border-b border-warm-200"
        style={{ background: item.bg || '#F4F2EE' }}
      >
        <img
          src={item.img}
          alt={`${item.title} - ${item.sub}`}
          loading="lazy"
          className="block h-full w-full object-cover"
          style={{ objectPosition: item.position || 'center' }}
        />
      </div>
      <div className="px-5 py-[18px]">
        {badge && (
          <div className="mb-[6px] flex items-center gap-2">
            <span className="text-[15px] text-red-accent">*</span>
            <span className="font-archivo text-[11px] font-bold uppercase tracking-[0.14em] text-red-accent">
              {item.badge}
            </span>
          </div>
        )}
        <div className="font-archivo text-[18px] font-extrabold leading-[1.2] text-ink">{item.title}</div>
        <div className="mt-1 text-[13.5px] text-warm-700">{item.sub}</div>
      </div>
    </button>
  )
}

export default function Certifications() {
  const [active, setActive] = useState(null)

  return (
    <section id="certifications" className="bg-cream px-[clamp(20px,6vw,96px)] py-[clamp(72px,9vw,150px)]">
      <div className="mx-auto max-w-narrow">
        <Reveal>
          <Eyebrow className="mb-[30px]">05 / CERTIFICATIONS &amp; RECOGNITION</Eyebrow>
        </Reveal>

        <Reveal className="mb-11">
          <h3 className="m-0 mb-5 font-serif text-[clamp(24px,3vw,34px)] font-medium italic text-ink">
            Research Recognition
          </h3>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[18px]">
            {RESEARCH_RECOGNITION.map((item) => (
              <CertCard key={item.title} item={item} badge onOpen={setActive} />
            ))}
          </div>
        </Reveal>

        <Reveal>
          <h3 className="m-0 mb-5 font-serif text-[clamp(24px,3vw,34px)] font-medium italic text-ink">
            AI &amp; Cloud Certifications
          </h3>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[18px]">
            {CERTIFICATIONS.map((item) => (
              <CertCard key={item.title} item={item} onOpen={setActive} />
            ))}
          </div>
        </Reveal>
      </div>

      <Lightbox
        image={active ? { src: active.img, title: active.title, sub: active.sub } : null}
        onClose={() => setActive(null)}
      />
    </section>
  )
}
