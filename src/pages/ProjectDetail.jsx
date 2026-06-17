import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { PROJECTS_BY_SLUG, getAdjacentProjects } from '../data/projects'
import { PDF_URL } from '../data/site'

function NotFound() {
  return (
    <main className="mx-auto max-w-narrow px-[clamp(20px,6vw,96px)] py-[clamp(80px,12vw,160px)]">
      <p className="font-archivo text-[12.5px] font-bold uppercase tracking-[0.22em] text-red-accent">
        404
      </p>
      <h1 className="m-0 mb-6 mt-2 font-display text-[clamp(40px,8vw,80px)] uppercase leading-[0.95] text-ink">
        Project Not Found
      </h1>
      <Link to="/#projects" className="font-archivo font-bold text-ink underline">
        Back to Projects
      </Link>
    </main>
  )
}

function MetaRow({ label, value }) {
  return (
    <div>
      <div className="mb-[6px] font-archivo text-[11px] font-bold uppercase tracking-[0.16em] text-warm-400">
        {label}
      </div>
      <div className="text-[15px] font-semibold leading-[1.4] text-cream">{value}</div>
    </div>
  )
}

function Block({ no, title, children }) {
  return (
    <Reveal className="border-t border-warm-200 pt-10">
      <div className="flex flex-wrap gap-[clamp(20px,5vw,64px)]">
        <div className="flex min-w-[180px] basis-[200px] items-start gap-3">
          <span className="font-display text-[20px] leading-none text-[#D8D2C6]">{no}</span>
          <h2 className="m-0 font-archivo text-[clamp(20px,2.6vw,30px)] font-black leading-[1.05] tracking-[-0.01em] text-ink">
            {title}
          </h2>
        </div>
        <div className="min-w-[280px] flex-1 basis-[460px]">{children}</div>
      </div>
    </Reveal>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = PROJECTS_BY_SLUG[slug]
  const { prev, next } = getAdjacentProjects(slug)

  // Scroll to top whenever the project changes.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) return <NotFound />
  const p = project

  return (
    <main>
      {/* HERO (dark) */}
      <header className="bg-ink px-[clamp(20px,6vw,96px)] pb-[clamp(48px,7vw,80px)] pt-[clamp(36px,5vw,64px)] text-cream">
        <div className="mx-auto max-w-content">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 font-archivo text-[12.5px] font-bold uppercase tracking-[0.14em] text-warm-400 no-underline transition-colors hover:text-cream"
          >
            Back to Projects
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-red-accent px-[13px] py-[6px] font-archivo text-[11px] font-bold uppercase tracking-[0.12em] text-white">
              {p.category}
            </span>
            <span className="font-archivo text-[12.5px] font-semibold uppercase tracking-[0.1em] text-warm-400">
              Project {p.no} / 05
            </span>
          </div>

          <h1 className="m-0 mb-4 mt-5 font-display text-[clamp(44px,9vw,104px)] font-normal uppercase leading-[0.92] tracking-[-0.01em]">
            {p.title}
          </h1>
          <p className="m-0 mb-9 max-w-[640px] text-[clamp(17px,1.8vw,22px)] leading-[1.55] text-[#D8D3CA]">
            {p.hook}
          </p>

          {p.recognition && (
            <div className="mb-9 inline-flex items-center gap-2 rounded-[8px] border border-[#34332F] bg-[#161616] px-4 py-[10px]">
              <span className="text-[15px] text-red-accent">*</span>
              <span className="font-archivo text-[13px] font-bold uppercase tracking-[0.1em] text-cream">
                {p.recognition}
              </span>
            </div>
          )}

          <div className="grid grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-6 border-t border-[#2A2A2A] pt-8">
            <MetaRow label="Type" value={p.type} />
            <MetaRow label="Role" value={p.role} />
            <MetaRow label="Tools / Tech" value={p.tools.join(' / ')} />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[7px] bg-red-accent px-6 py-[13px] font-archivo text-[14px] font-bold text-white no-underline transition-colors hover:bg-red-accentdark"
              >
                {p.linkLabel || 'View Case Study'} <span>-&gt;</span>
              </a>
            )}
            <a
              href={PDF_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-[7px] border-[1.5px] border-[#44423E] px-6 py-[13px] font-archivo text-[14px] font-bold text-cream no-underline transition-colors hover:border-cream"
            >
              Download Portfolio PDF
            </a>
          </div>
        </div>
      </header>

      {/* BODY */}
      <div className="bg-cream px-[clamp(20px,6vw,96px)] py-[clamp(56px,8vw,120px)]">
        <div className="mx-auto flex max-w-content flex-col gap-12">
          <Block no="01" title="The Story">
            <p className="m-0 text-[clamp(16px,1.5vw,19px)] leading-[1.75] text-warm-800">{p.story}</p>
          </Block>

          <Block no="02" title="What It Does / What I Built">
            <p className="m-0 text-[clamp(16px,1.5vw,19px)] leading-[1.75] text-warm-800">{p.built}</p>
          </Block>

          <Block no="03" title="My Role">
            <p className="m-0 text-[clamp(16px,1.5vw,19px)] leading-[1.75] text-warm-800">{p.roleDetail}</p>
          </Block>

          <Block no="04" title="Evidence / Impact">
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              {p.evidence.map((e) => (
                <li key={e} className="flex items-start gap-3">
                  <span className="mt-[2px] flex-none font-extrabold text-red-accent">-&gt;</span>
                  <span className="text-[clamp(15px,1.4vw,17px)] leading-[1.6] text-warm-800">{e}</span>
                </li>
              ))}
            </ul>
            {p.metrics && (
              <div className="mt-7 grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-3">
                {p.metrics.map((m) => (
                  <div key={m.label} className="rounded-[10px] border border-warm-200 bg-white px-4 py-5">
                    <div className="font-display text-[clamp(22px,3vw,30px)] leading-none text-ink">{m.value}</div>
                    <div className="mt-2 font-archivo text-[11px] font-bold uppercase tracking-[0.12em] text-warm-400">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Block>

          <Block no="05" title="What I Learned">
            <p className="m-0 border-l-[3px] border-red-accent pl-5 text-[clamp(16px,1.6vw,20px)] font-medium leading-[1.65] text-ink">
              {p.learned}
            </p>
          </Block>

          {p.gallery?.length > 0 && (
            <Block no="06" title="Gallery / Visual Proof">
              <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
                {p.gallery.map((g) => {
                  const phone = g.shape === 'phone'
                  return (
                    <a
                      key={g.src}
                      href={g.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group/gal block overflow-hidden rounded-[12px] border border-warm-200 ${
                        phone ? 'bg-warm-50' : 'bg-white'
                      } ${g.span ? 'sm:col-span-2' : ''}`}
                    >
                      {/* Phone screenshots are letterboxed with object-contain so they
                          stay sharp and un-stretched; wide shots fill with object-cover. */}
                      <div
                        className={`flex items-center justify-center overflow-hidden ${
                          phone ? 'p-3' : ''
                        }`}
                      >
                        <img
                          src={g.src}
                          alt={g.alt}
                          loading="lazy"
                          className={`block transition-transform duration-500 group-hover/gal:scale-[1.03] ${
                            phone
                              ? 'max-h-[460px] w-auto max-w-full object-contain'
                              : 'w-full object-cover'
                          }`}
                        />
                      </div>
                    </a>
                  )
                })}
              </div>
            </Block>
          )}
        </div>
      </div>

      {/* PREV / NEXT */}
      <nav className="border-t border-warm-300 bg-white px-[clamp(20px,6vw,96px)] py-[clamp(36px,5vw,64px)]">
        <div className="mx-auto grid max-w-content grid-cols-1 gap-4 sm:grid-cols-2">
          {prev ? (
            <Link
              to={`/projects/${prev.slug}`}
              className="group flex flex-col rounded-[12px] border border-warm-200 bg-cream px-6 py-5 no-underline transition-colors hover:border-ink"
            >
              <span className="font-archivo text-[11px] font-bold uppercase tracking-[0.16em] text-warm-400">
                Previous Case Study
              </span>
              <span className="mt-1 font-archivo text-[20px] font-black text-ink">{prev.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to={`/projects/${next.slug}`}
              className="group flex flex-col rounded-[12px] border border-warm-200 bg-cream px-6 py-5 text-right no-underline transition-colors hover:border-ink"
            >
              <span className="font-archivo text-[11px] font-bold uppercase tracking-[0.16em] text-warm-400">
                Next Case Study
              </span>
              <span className="mt-1 font-archivo text-[20px] font-black text-ink">{next.title}</span>
            </Link>
          ) : (
            <span />
          )}
        </div>
      </nav>
    </main>
  )
}
