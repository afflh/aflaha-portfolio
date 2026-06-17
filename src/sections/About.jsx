import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'

const FACTS = [
  ['Based in', 'Jakarta, Indonesia / Bina Nusantara University'],
  ['Currently', 'Software Engineer Intern @ PT Admin Pintar Kita'],
  ['Focus', 'AI / Software Development / Human-Centered Products'],
  ['Cares about', 'Responsible AI and practical product impact'],
]

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-warm-300 bg-white px-[clamp(20px,6vw,96px)] py-[clamp(72px,9vw,150px)]"
    >
      <div className="mx-auto max-w-content">
        <Reveal>
          <Eyebrow className="mb-[30px]">01 / ABOUT</Eyebrow>
        </Reveal>

        <div className="flex flex-wrap gap-[clamp(36px,5vw,80px)]">
          <Reveal className="min-w-[300px] flex-1 basis-[460px]">
            <h2 className="m-0 mb-7 font-archivo text-[clamp(30px,4.4vw,56px)] font-black leading-[1.02] tracking-[-0.02em] text-ink">
              I build technology that is meaningful, reliable, and genuinely useful.
            </h2>
            <p className="m-0 mb-[18px] text-[clamp(16px,1.5vw,19px)] leading-[1.7] text-warm-800">
              I am a Computer Science student at Bina Nusantara University and a Software Engineer
              Intern with a strong interest in artificial intelligence, software development, backend
              systems, and human-centered products.
            </p>
            <p className="m-0 mb-[18px] text-[clamp(16px,1.5vw,19px)] leading-[1.7] text-warm-800">
              My work has grown through UI/UX exploration, software and product development,
              responsible AI research, entrepreneurship and market validation, and real-world
              AI-assisted systems. Across that journey, I am learning to combine technical depth with
              product thinking, collaboration, and responsible AI practice.
            </p>
            <p className="m-0 text-[clamp(16px,1.5vw,19px)] leading-[1.7] text-warm-800">
              My long-term goal is to build technology that people can actually use and rely on: not
              only technically strong, but clear, trustworthy, and helpful in real life.
            </p>
          </Reveal>

          <Reveal className="min-w-[260px] flex-[0_1_320px]">
            <div className="rounded-[10px] border border-warm-200 bg-warm-50 px-[26px] pb-2 pt-[26px]">
              {FACTS.map(([label, value], i) => (
                <div
                  key={label}
                  className={`pb-4 ${i < FACTS.length - 1 ? 'mb-4 border-b border-warm-200' : 'pb-[18px]'}`}
                >
                  <div className="mb-[6px] font-archivo text-[11.5px] font-bold uppercase tracking-[0.16em] text-warm-400">
                    {label}
                  </div>
                  <div className="text-[16px] font-semibold text-warm-900">{value}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
