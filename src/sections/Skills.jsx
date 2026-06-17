import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'
import { TECHNICAL_SKILLS, CREATIVE_STRENGTHS, TOOLS } from '../data/skills'

// Dark section.
export default function Skills() {
  return (
    <section id="skills" className="bg-ink px-[clamp(20px,6vw,96px)] py-[clamp(72px,9vw,150px)] text-cream">
      <div className="mx-auto max-w-content">
        <Reveal>
          <Eyebrow dark className="mb-[30px]">
            02 / SKILLS &amp; TOOLS
          </Eyebrow>
        </Reveal>

        <Reveal as="h2" className="m-0 mb-12 max-w-[760px] font-archivo text-[clamp(30px,4.4vw,56px)] font-black leading-none tracking-[-0.02em]">
          What I work with, and how I think.
        </Reveal>

        {/* Technical skill cards */}
        <Reveal className="mb-12 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[18px]">
          {TECHNICAL_SKILLS.map((s) => (
            <div
              key={s.no}
              className="rounded-[10px] border border-[#2A2A2A] bg-[#161616] p-[26px] transition-colors hover:border-red-accent"
            >
              <div className="mb-3 font-display text-[22px] text-red-accent">{s.no}</div>
              <div className="mb-[10px] font-archivo text-[18px] font-extrabold">{s.title}</div>
              <p className="m-0 text-[15px] leading-[1.6] text-[#B8B3AA]">{s.desc}</p>
            </div>
          ))}
        </Reveal>

        {/* Strengths + Tools */}
        <Reveal className="flex flex-wrap gap-[clamp(32px,5vw,64px)]">
          <div className="min-w-[280px] flex-1 basis-[320px]">
            <div className="mb-[18px] font-archivo text-[12px] font-bold uppercase tracking-[0.18em] text-warm-500">
              Creative &amp; Collaborative Strengths
            </div>
            <ul className="m-0 flex list-none flex-col gap-[14px] p-0">
              {CREATIVE_STRENGTHS.map(([title, desc]) => (
                <li key={title} className="flex items-start gap-3">
                  <span className="flex-none font-extrabold text-red-accent">-</span>
                  <span className="text-[16px] leading-[1.55] text-[#D8D3CA]">
                    <strong className="text-white">{title}</strong> - {desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-[280px] flex-1 basis-[320px]">
            <div className="mb-[18px] font-archivo text-[12px] font-bold uppercase tracking-[0.18em] text-warm-500">
              Tools &amp; Technologies
            </div>
            <div className="flex flex-wrap gap-[9px]">
              {TOOLS.map((t) => (
                <span
                  key={t}
                  className="rounded-[6px] border border-[#34332F] px-[13px] py-2 font-archivo text-[13.5px] font-semibold text-[#E4DFD6]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
