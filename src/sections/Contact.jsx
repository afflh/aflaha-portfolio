import { useState } from 'react'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'
import { PROFILE, LINKS, PDF_URL } from '../data/site'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard?.writeText(PROFILE.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1700)
    } catch {
      // Clipboard unavailable; fall back to opening the mail client.
      window.location.href = LINKS.email
    }
  }

  return (
    <section id="contact" className="bg-ink px-[clamp(20px,6vw,96px)] py-[clamp(80px,10vw,160px)] text-cream">
      <div className="mx-auto max-w-[1000px]">
        <Reveal>
          <Eyebrow dark className="mb-[26px]">
            06 / CONTACT
          </Eyebrow>
        </Reveal>

        <Reveal as="h2" className="m-0 mb-2 font-display text-[clamp(40px,8vw,96px)] font-normal uppercase leading-[0.95]">
          Let&rsquo;s connect and build
          <br />
          something that
          <br />
          <span className="text-red-accent">matters.</span>
        </Reveal>

        <Reveal as="p" className="m-0 mb-10 mt-[18px] max-w-[560px] text-[clamp(16px,1.6vw,20px)] leading-[1.6] text-[#B8B3AA]">
          Open to software engineering, AI, product, research, internship, and hackathon
          opportunities where technology can be genuinely useful for real people.
        </Reveal>

        {/* Primary contact actions */}
        <Reveal className="mb-11 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center gap-[10px] rounded-[8px] bg-red-accent px-[26px] py-4 font-archivo text-[15px] font-bold text-white transition-colors hover:bg-red-accentdark"
          >
            {copied ? 'Email copied to clipboard' : 'Contact Me'}
          </button>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[9px] rounded-[8px] border-[1.5px] border-[#44423E] bg-transparent px-6 py-4 font-archivo text-[15px] font-bold text-cream no-underline transition-colors hover:border-cream"
          >
            View GitHub <span className="text-warm-400">-&gt;</span>
          </a>
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[9px] rounded-[8px] border-[1.5px] border-[#44423E] bg-transparent px-6 py-4 font-archivo text-[15px] font-bold text-cream no-underline transition-colors hover:border-cream"
          >
            WhatsApp <span className="text-warm-400">-&gt;</span>
          </a>
          <a
            href={PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[9px] rounded-[8px] border-[1.5px] border-[#44423E] bg-transparent px-6 py-4 font-archivo text-[15px] font-bold text-cream no-underline transition-colors hover:border-cream"
          >
            Download Portfolio PDF
          </a>
        </Reveal>

        {/* Secondary links */}
        <Reveal className="border-t border-[#2A2A2A] pt-8">
          <div className="mb-[18px] font-archivo text-[11px] font-bold uppercase tracking-[0.18em] text-[#5E5A52]">
            Secondary Channels
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-4">
            <a href={LINKS.instagram} target="_blank" rel="noopener" className="no-underline transition-opacity hover:opacity-70">
              <div className="mb-[6px] font-archivo text-[11.5px] font-bold uppercase tracking-[0.16em] text-warm-500">
                Instagram
              </div>
              <div className="text-[16px] font-semibold text-cream">@aflaha.f11</div>
            </a>
            <div>
              <div className="mb-[6px] font-archivo text-[11.5px] font-bold uppercase tracking-[0.16em] text-warm-500">
                Discord
              </div>
              <div className="text-[16px] font-semibold text-cream">{LINKS.discord}</div>
            </div>
            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline transition-opacity hover:opacity-70"
            >
              <div className="mb-[6px] font-archivo text-[11.5px] font-bold uppercase tracking-[0.16em] text-warm-500">
                WhatsApp
              </div>
              <div className="text-[16px] font-semibold text-cream">{PROFILE.phone}</div>
            </a>
          </div>
        </Reveal>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-3 border-t border-[#2A2A2A] pt-[26px]">
          <span className="font-display text-[15px] uppercase tracking-[0.5px] text-cream">
            {PROFILE.name}
          </span>
          <span className="text-[13px] text-warm-500">Portfolio 2026 / Apple Developer Academy</span>
        </div>
      </div>
    </section>
  )
}
