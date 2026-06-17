import { useNavigate } from 'react-router-dom'

// Homepage project card. Every card is structurally identical so all five
// projects read as equally important.
// The whole card routes to the case study; the external link inside opens the
// real project (GitHub / paper / documentation) in a new tab.
export default function ProjectCard({ project }) {
  const p = project
  const navigate = useNavigate()
  const goToCaseStudy = () => navigate(`/projects/${p.slug}`)

  return (
    <div
      role="link"
      tabIndex={0}
      onClick={goToCaseStudy}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          goToCaseStudy()
        }
      }}
      aria-label={`${p.title} - view case study`}
      className="group flex w-full cursor-pointer flex-col overflow-hidden rounded-[14px] border border-warm-200 bg-white text-inherit no-underline transition-[border-color,transform,box-shadow] duration-[250ms] hover:-translate-y-1 hover:border-ink hover:shadow-[0_16px_32px_rgba(0,0,0,0.09)]"
    >
      <div className="relative aspect-[16/11] overflow-hidden border-b border-warm-200 bg-[#EDEAE3]">
        <img
          src={p.cover}
          alt={p.title}
          loading="lazy"
          className="block h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          style={{ objectPosition: p.coverPosition || 'center' }}
        />
        <span className="absolute left-3 top-3 rounded-full bg-red-accent px-[11px] py-[5px] font-archivo text-[10.5px] font-bold uppercase tracking-[0.12em] text-white">
          {p.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-[22px]">
        <div className="mb-[9px] flex items-baseline gap-[10px]">
          <span className="font-display text-[20px] leading-none text-[#D8D2C6]">{p.no}</span>
          <h3 className="m-0 font-archivo text-[22px] font-black leading-[1.06] text-ink">{p.title}</h3>
        </div>
        <p className="m-0 mb-4 text-[15px] leading-[1.55] text-warm-700">{p.cardHook}</p>

        <div className="mb-4 flex flex-col gap-2">
          <Meta label="Role" value={p.roleShort} />
          <Meta label="Tech" value={p.tools.join(' / ')} />
        </div>

        <div className="mt-auto">
          <div className="mb-4 flex items-start gap-[9px] border-t border-warm-200 pt-[14px]">
            <span className="font-extrabold leading-[1.4] text-red-accent">-&gt;</span>
            <span className="text-[13.5px] leading-[1.5] text-warm-800">
              <strong className="text-ink">{p.evidenceLabel}:</strong> {p.evidenceShort}
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 font-archivo text-[13.5px] font-bold tracking-[0.02em] text-ink">
              View Case Study <span className="text-red-accent transition-transform group-hover:translate-x-1">-&gt;</span>
            </span>
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 rounded-[6px] border border-warm-300 px-3 py-[7px] font-archivo text-[12px] font-bold uppercase tracking-[0.04em] text-warm-700 no-underline transition-colors hover:border-ink hover:text-ink"
              >
                {p.linkLabel} <span className="text-red-accent">-&gt;</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function Meta({ label, value }) {
  return (
    <div className="text-[13.5px] leading-[1.45] text-warm-700">
      <span className="mr-[7px] inline-block font-archivo text-[10px] font-bold uppercase tracking-[0.12em] text-warm-400">
        {label}
      </span>
      {value}
    </div>
  )
}
