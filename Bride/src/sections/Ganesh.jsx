import { useState } from 'react'
import Card from '../components/Card'
import { Divider } from '../components/Ornaments'
import Reveal from '../components/Reveal'
import { blessings, mantra } from '../data/content'
import { img } from '../asset'

// PAGE 1 — Shree Ganeshay Namah + blessings of the elders
export default function Ganesh() {
  const [hasPhoto, setHasPhoto] = useState(true)

  return (
    <Card id="ganesh" label="Shree Ganeshay Namah">
      <Reveal className="flex flex-col items-center">
        <div className="relative grid size-36 place-items-center sm:size-48 lg:size-52">
          <span className="absolute inset-0 rounded-full border border-rust/60" />
          <span className="animate-spin-slow absolute inset-2 rounded-full border border-dashed border-teal-deep/40" />
          {hasPhoto ? (
            <img
              src={img('ganesh.png')}
              alt="Shri Ganesh"
              onError={() => setHasPhoto(false)}
              className="size-[86%] object-contain"
            />
          ) : (
            <span lang="hi" className="font-devanagari text-7xl font-bold text-rust sm:text-8xl">
              श्री
            </span>
          )}
        </div>
      </Reveal>

      <Reveal delay={200} className="mt-5">
        <p className="text-xl font-bold tracking-[0.12em] text-rust sm:text-3xl">{mantra.ganesh}</p>
      </Reveal>

      <Reveal delay={320} lang="sa" className="mt-3 font-devanagari text-base leading-relaxed font-semibold text-rust sm:text-xl">
        {mantra.shloka.map((l) => (
          <p key={l}>{l}</p>
        ))}
      </Reveal>

      <Reveal delay={450} className="mt-6">
        <Divider className="text-rust/80" />
        <p className="mt-4 text-sm tracking-[0.3em] text-teal-deep uppercase italic sm:text-base">{blessings.title}</p>
      </Reveal>

      <div className="mt-5 flex flex-col items-center gap-5">
        {blessings.couples.map(([a, b], i) => (
          <Reveal key={a} delay={650 + i * 200}>
            <p className="text-base font-semibold text-crimson sm:text-xl lg:text-2xl">{a} &amp;</p>
            <p className="text-base font-semibold text-crimson sm:text-xl lg:text-2xl">{b}</p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={1200} className="mt-8 flex flex-col items-center justify-center text-center text-teal-deep/70">
        <span className="inline-block pl-[0.3em] text-[10px] tracking-[0.3em] uppercase sm:text-xs">Scroll to explore</span>
        <svg className="mt-1.5 size-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </Reveal>
    </Card>
  )
}
