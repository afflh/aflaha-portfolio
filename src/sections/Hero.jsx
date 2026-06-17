import Reveal from '../components/Reveal'
import { PDF_URL } from '../data/site'
import { scrollToSection } from '../lib/scrollToSection'

const PILLS = ['Computer Science', 'Software Engineer Intern', 'AI & Product-Minded Builder']

// Hero: editorial intro with the real headshot framed by red panel + corner brackets.
export default function Hero() {
  return (
    <header
      id="top"
      className="relative bg-cream px-[clamp(20px,6vw,96px)] pb-[clamp(56px,7vw,104px)] pt-[clamp(48px,7vw,96px)]"
    >
      <div className="mx-auto flex max-w-shell flex-wrap items-center gap-[clamp(32px,5vw,72px)]">
        <Reveal className="min-w-[300px] flex-1 basis-[460px]">
          <div className="mb-[22px] flex items-center gap-3">
            <span className="inline-block h-[13px] w-[13px] bg-red-accent" />
            <span className="font-archivo text-[12.5px] font-bold uppercase tracking-[0.24em] text-warm-700">
              Portfolio 2026 / Apple Developer Academy
            </span>
          </div>

          <p className="m-0 mb-1 font-script text-[clamp(38px,5vw,58px)] leading-[0.9] text-red-accent">
            Hello, my name is
          </p>
          <h1 className="m-0 mb-[26px] font-display text-[clamp(46px,8.5vw,108px)] font-normal uppercase leading-[0.92] tracking-[-0.01em] text-ink">
            Aflaha Fathinah Fatahillah
          </h1>

          <p className="m-0 mb-[30px] max-w-[560px] text-[clamp(17px,1.7vw,21px)] leading-[1.6] text-warm-800">
            A Computer Science student and Software Engineer Intern building human-centered,
            AI-aware software for people who need technology to be useful, reliable, and clear.
          </p>

          <div className="mb-[34px] flex flex-wrap gap-2">
            {PILLS.map((p) => (
              <span
                key={p}
                className="whitespace-nowrap rounded-full border border-warm-300 bg-white px-[14px] py-2 font-archivo text-[12.5px] font-semibold uppercase tracking-[0.04em] text-warm-700"
              >
                {p}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('projects')
              }}
              className="inline-flex items-center gap-[10px] rounded-[7px] bg-red-accent px-7 py-[15px] font-archivo text-[15px] font-bold text-white no-underline transition-colors hover:bg-red-accentdark"
            >
              View Projects <span>-&gt;</span>
            </a>
            <a
              href={PDF_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-[10px] rounded-[7px] border-[1.5px] border-ink bg-transparent px-7 py-[15px] font-archivo text-[15px] font-bold text-ink no-underline transition-colors hover:bg-ink hover:text-cream"
            >
              Download Portfolio PDF
            </a>
          </div>
        </Reveal>

        <Reveal className="relative mx-auto min-w-[262px] flex-[0_1_400px]">
          {/* The red panel is the precise reference box: everything (grid,
              photo, corner brackets) is aligned to its edges so the framing
              stays symmetrical at every screen size. */}
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[400px]">
            <div className="absolute inset-0 overflow-hidden rounded-[8px] bg-red-accent">
              {/* subtle grid overlay, clipped to the panel */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.16) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.16) 1px,transparent 1px)',
                  backgroundSize: '34px 34px',
                }}
              />
              {/* portrait — contain so the whole figure stays visible and is
                  not cropped; anchored to the bottom of the panel */}
              <img
                src="./assets/headshot.png"
                alt="Aflaha Fathinah Fatahillah"
                className="absolute inset-x-0 bottom-0 top-0 mx-auto h-full w-full object-contain object-bottom"
                style={{ filter: 'drop-shadow(0 12px 22px rgba(0,0,0,0.18))' }}
              />
            </div>

            {/* black corner brackets, locked to the panel corners */}
            <span className="absolute -left-[10px] -top-[10px] z-[3] h-[46px] w-[46px] border-l-[5px] border-t-[5px] border-ink" />
            <span className="absolute -bottom-[10px] -right-[10px] z-[3] h-[46px] w-[46px] border-b-[5px] border-r-[5px] border-ink" />

            {/* vertical caption, sits just outside the left edge */}
            <span className="absolute -left-[40px] top-1/2 z-[3] hidden origin-center -translate-y-1/2 -rotate-90 whitespace-nowrap font-archivo text-[10px] font-bold uppercase tracking-[0.28em] text-warm-500 lg:block">
              Aflaha / 2026
            </span>
          </div>
        </Reveal>
      </div>
    </header>
  )
}
