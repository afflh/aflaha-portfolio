import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'
import { WORK, ORGANIZATIONS } from '../data/experience'

// Dark section: work experience card + organizational experience grid.
export default function Experience() {
  return (
    <section id="experience" className="bg-ink px-[clamp(20px,6vw,96px)] py-[clamp(72px,9vw,150px)] text-cream">
      <div className="mx-auto max-w-narrow">
        <Reveal>
          <Eyebrow dark className="mb-[30px]">
            04 / EXPERIENCE
          </Eyebrow>
        </Reveal>

        <Reveal className="rounded-[14px] border border-[#2A2A2A] bg-[#161616] p-[clamp(28px,4vw,48px)]">
          <div className="mb-2 flex flex-wrap items-start justify-between gap-[14px]">
            <h3 className="m-0 font-archivo text-[clamp(26px,3.6vw,42px)] font-black leading-[1.04]">
              {WORK.title}
            </h3>
            <span className="whitespace-nowrap rounded-full bg-red-accent px-[15px] py-2 font-archivo text-[13px] font-bold uppercase tracking-[0.06em] text-white">
              {WORK.period}
            </span>
          </div>
          <div className="mb-7 font-archivo text-[17px] font-semibold text-red-accent">{WORK.company}</div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[26px]">
            {WORK.columns.map((c) => (
              <div key={c.label}>
                <div className="mb-[10px] font-archivo text-[11.5px] font-bold uppercase tracking-[0.16em] text-warm-500">
                  {c.label}
                </div>
                <p className="m-0 text-[15.5px] leading-[1.65] text-[#C8C3BA]">{c.body}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-10">
          <div className="mb-5 font-archivo text-[12px] font-bold uppercase tracking-[0.18em] text-warm-500">
            Organizational Experience
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
            {ORGANIZATIONS.map((o) => (
              <div key={o.name} className="rounded-[10px] border border-[#2A2A2A] bg-[#141414] p-[22px]">
                <div className="mb-1 font-archivo text-[17px] font-extrabold">{o.name}</div>
                <div className="mb-1 text-[13px] text-[#9B968C]">{o.org}</div>
                <div className="mb-[14px] text-[13.5px] text-warm-500">{o.period}</div>
                <ul className="m-0 flex list-none flex-col gap-[7px] p-0 text-[14.5px] text-[#C8C3BA]">
                  {o.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
