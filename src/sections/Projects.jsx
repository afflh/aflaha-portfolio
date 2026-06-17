import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'
import ProjectCard from '../components/ProjectCard'
import { PROJECTS } from '../data/projects'

// Centerpiece. All five cards in one uniform grid with equal weight.
export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-warm-300 bg-white px-[clamp(20px,6vw,96px)] py-[clamp(72px,9vw,150px)]"
    >
      <div className="mx-auto max-w-content">
        <Reveal>
          <Eyebrow className="mb-[18px]">03 / PROJECTS</Eyebrow>
        </Reveal>
        <Reveal as="h2" className="m-0 mb-[14px] font-archivo text-[clamp(30px,4.4vw,56px)] font-black leading-none tracking-[-0.02em] text-ink">
          Five projects, one growth arc.
        </Reveal>
        <Reveal as="p" className="m-0 mb-12 max-w-[620px] text-[clamp(16px,1.5vw,19px)] leading-[1.7] text-warm-800">
          UI/UX exploration, software and product development, responsible AI research,
          entrepreneurship and market validation, and real-world AI-assisted systems.{' '}
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
