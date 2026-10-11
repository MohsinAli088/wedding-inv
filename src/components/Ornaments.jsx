import { mantra } from '../data/content'
import { img } from '../asset'

// "——— ◆ ———" rule from the Concept page
export function Divider({ className = 'text-gold' }) {
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`} aria-hidden="true">
      <span className="h-px w-10 bg-current sm:w-16" />
      <span className="size-1.5 rotate-45 bg-current" />
      <span className="h-px w-10 bg-current sm:w-16" />
    </div>
  )
}

export function Icon({ name, className = 'size-10' }) {
  return <img src={img(`icon-${name}.png`)} alt="" aria-hidden="true" className={className} />
}

export function MantraHeader({ className = '' }) {
  return (
    <header lang="sa" className={`font-devanagari text-[var(--accent,#8b2333)] ${className}`}>
      <p className="text-2xl font-bold sm:text-3xl">{mantra.ganesh}</p>
      {mantra.shlokaTop && (
        <p className="mt-1 text-base font-semibold sm:text-lg">{mantra.shlokaTop}</p>
      )}
    </header>
  )
}

export function EraTitle({ kicker, children }) {
  return (
    <div>
      {kicker && <p className="font-heading text-xs tracking-[0.2em] text-rust uppercase sm:text-sm">{kicker}</p>}
      <h2 className="mt-1 font-heading text-2xl text-crimson uppercase sm:text-3xl lg:text-4xl leading-normal">{children}</h2>
    </div>
  )
}
