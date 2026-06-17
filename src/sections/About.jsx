import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'

const FACTS = [
  ['Based in', 'Jakarta, Indonesia · Binus University'],
  ['Currently', 'Software Engineer Intern @ PT Admin Pintar Kita'],
  ['Focus', 'AI · Software Development · Human-Centered Products'],
  ['Cares about', 'Responsible AI & real-world impact'],
]

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-warm-300 bg-white px-[clamp(20px,6vw,96px)] py-[clamp(72px,9vw,150px)]"
    >
      <div className="mx-auto max-w-content">
        <Reveal>
          <Eyebrow className="mb-[30px]">01 / About Me</Eyebrow>
        </Reveal>

        <div className="flex flex-wrap gap-[clamp(36px,5vw,80px)]">
          <Reveal className="min-w-[300px] flex-1 basis-[460px]">
            <h2 className="m-0 mb-7 font-archivo text-[clamp(30px,4.4vw,56px)] font-black leading-[1.02] tracking-[-0.02em] text-ink">
              I build technology that&rsquo;s meaningful, reliable &amp; genuinely useful.
            </h2>
            <p className="m-0 mb-[18px] text-[clamp(16px,1.5vw,19px)] leading-[1.7] text-warm-800">
              I&rsquo;m a Computer Science student at Bina Nusantara University and a Software
              Engineer Intern, with a strong interest in Artificial Intelligence, software
              development, backend development, and human-centered products.
            </p>
            <p className="m-0 mb-[18px] text-[clamp(16px,1.5vw,19px)] leading-[1.7] text-warm-800">
              Through UI/UX projects, software development, AI research, entrepreneurship, and
              real-world AI-assisted systems, I&rsquo;m learning to combine technical depth, product
              thinking, collaboration, and responsible AI to create real impact.
            </p>
            <p className="m-0 text-[clamp(16px,1.5vw,19px)] leading-[1.7] text-warm-800">
              My long-term goal is to build technology people don&rsquo;t just admire, but actually
              use and rely on — something not only technically impressive, but meaningful, reliable,
              and helpful in real life.
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
