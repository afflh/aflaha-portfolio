import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'
import ProjectCard from '../components/ProjectCard'
import { PROJECTS } from '../data/projects'

// Centerpiece. All five cards in one uniform grid — equal weight, no highlighting.
export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-warm-300 bg-white px-[clamp(20px,6vw,96px)] py-[clamp(72px,9vw,150px)]"
    >
      <div className="mx-auto max-w-content">
        <Reveal>
          <Eyebrow className="mb-[18px]">03 / Projects</Eyebrow>
        </Reveal>
        <Reveal as="h2" className="m-0 mb-[14px] font-archivo text-[clamp(30px,4.4vw,56px)] font-black leading-none tracking-[-0.02em] text-ink">
          A growth journey, not a list.
        </Reveal>
        <Reveal as="p" className="m-0 mb-12 max-w-[620px] text-[clamp(16px,1.5vw,19px)] leading-[1.7] text-warm-800">
          Five projects, one through-line — from UI/UX exploration and product development, to AI
          research, market validation, and real-world AI-assisted systems.{' '}
          <span className="text-warm-400">Open any card for the full case study.</span>
        </Reveal>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-[18px]">
          {PROJECTS.map((p) => (
            <Reveal key={p.slug} className="flex h-full">
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
