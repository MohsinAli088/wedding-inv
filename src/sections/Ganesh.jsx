import { useState } from 'react'
import Card from '../components/Card'
import Reveal from '../components/Reveal'
import SplitText from '../components/SplitText'
import { mantra, opening } from '../data/content'
import { img } from '../asset'

export default function Ganesh() {
  const [hasPhoto, setHasPhoto] = useState(true)

  return (
    <Card id="ganesh" label="Shri Ganeshay Namah" cornerMantra={mantra.ganesh}>
      {/* Auspicious Lord Ganesha Medallion */}
      <Reveal className="flex flex-col items-center">
        <div className="relative grid size-32 place-items-center sm:size-40 lg:size-44">
          <span className="absolute inset-0 rounded-full border border-rust/50 shadow-[0_0_15px_rgba(201,151,56,0.25)]" />
          <span className="animate-spin-slow absolute inset-1.5 rounded-full border border-dashed border-gold/70" />
          {hasPhoto ? (
            <img
              src={img('ganesh.png')}
              alt="Shri Ganesh"
              onError={() => setHasPhoto(false)}
              className="size-[86%] rounded-full object-cover shadow-sm"
            />
          ) : (
            <span lang="sa" className="font-devanagari text-5xl font-bold text-rust sm:text-6xl">
              {mantra.om}
            </span>
          )}
        </div>
      </Reveal>

      {/* Vedic Invocations from changes.jpeg */}
      <Reveal delay={200} lang="sa" className="mt-3.5 text-center">
        <p className="font-devanagari text-base font-bold text-rust sm:text-xl">
          {mantra.ganesh}
        </p>
        <p className="mt-1 font-devanagari text-sm font-semibold text-crimson sm:text-lg leading-relaxed">
          {mantra.shlokaTop}
        </p>
      </Reveal>

      <Reveal delay={350} className="mt-1.5 max-w-lg text-center">
        <p className="font-body text-xs italic tracking-wider text-teal-deep/90 sm:text-sm">
          "{mantra.shlokaTopMeaning}"
        </p>
      </Reveal>

      {/* Invitation Header */}
      <Reveal delay={450} className="mt-4 max-w-xl text-center">
        <p className="font-heading text-[11px] tracking-[0.2em] text-teal-deep uppercase sm:text-xs">
          {opening.blessingIntro}
        </p>
        <p className="mt-1 font-heading text-[11px] tracking-[0.2em] text-teal-deep uppercase sm:text-xs">
          {opening.inviteIntro}
        </p>
        <h2 className="mt-1.5 font-heading text-2xl font-bold tracking-[0.22em] text-rust uppercase sm:text-3xl lg:text-4xl">
          {opening.eventType}
        </h2>
        <p className="mt-1 font-body text-xs tracking-[0.2em] text-teal-deep uppercase sm:text-sm italic">
          {opening.belovedIntro}
        </p>
      </Reveal>

      {/* Couple Announcement with Diamond Ring */}
      <div className="mt-3.5 flex w-full max-w-xl flex-col items-center">
        <SplitText
          chars={opening.bride.name.toUpperCase()}
          label={opening.bride.name}
          delay={600}
          className="font-heading text-xl font-bold tracking-[0.12em] text-crimson sm:text-2xl lg:text-3xl leading-snug"
        />
        <Reveal delay={850} className="mt-1 text-center">
          <p className="font-body text-xs tracking-wider text-teal-deep uppercase sm:text-sm">
            <span className="font-semibold text-rust">{opening.bride.relation}</span> {opening.bride.parents}
          </p>
          <p className="text-[11px] tracking-widest text-teal-deep/80 uppercase sm:text-xs">
            {opening.bride.residence}
          </p>
        </Reveal>

        {/* Golden Diamond Ring Icon */}
        <Reveal delay={1050} className="my-2.5">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-gold/60 sm:w-16" />
            <img
              src={img('ring.webp')}
              alt="Engagement Ring"
              className="size-8 drop-shadow-md sm:size-10"
            />
            <span className="h-px w-10 bg-gold/60 sm:w-16" />
          </div>
        </Reveal>

        <SplitText
          chars={opening.groom.name.toUpperCase()}
          label={opening.groom.name}
          delay={1200}
          className="font-heading text-xl font-bold tracking-[0.12em] text-crimson sm:text-2xl lg:text-3xl leading-snug"
        />
        <Reveal delay={1450} className="mt-1 text-center">
          <p className="font-body text-xs tracking-wider text-teal-deep uppercase sm:text-sm">
            <span className="font-semibold text-rust">{opening.groom.relation}</span> {opening.groom.parents}
          </p>
          <p className="text-[11px] tracking-widest text-teal-deep/80 uppercase sm:text-xs">
            {opening.groom.residence}
          </p>
        </Reveal>
      </div>

      {/* Date & Venue Badge */}
      <Reveal delay={1700} className="mt-5 rounded-sm border border-gold/50 bg-paper/85 px-5 py-2.5 shadow-sm text-center">
        <p className="font-heading text-xs font-semibold tracking-[0.16em] text-rust uppercase sm:text-sm">
          {opening.dateSummary} · {opening.timeSummary}
        </p>
        <p className="mt-0.5 font-body text-[11px] tracking-[0.14em] text-teal-deep uppercase sm:text-xs">
          {opening.venueSummary}
        </p>
      </Reveal>

      {/* Scroll indicator prompt */}
      <Reveal delay={1950} className="mt-5 flex flex-col items-center text-teal-deep/70">
        <span className="font-heading text-[10px] tracking-[0.25em] uppercase sm:text-xs">Scroll to explore</span>
        <svg className="mt-1 size-4 animate-bounce text-rust" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </Reveal>
    </Card>
  )
}
