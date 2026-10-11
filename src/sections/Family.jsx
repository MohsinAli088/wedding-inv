import Card from '../components/Card'
import { Divider } from '../components/Ornaments'
import Reveal from '../components/Reveal'
import { family, mantra } from '../data/content'

export default function Family() {
  return (
    <Card id="family" label="Family Invitation" cornerMantra={mantra.ganesh}>
      <Reveal delay={100} className="mt-1 sm:mt-2 text-center px-2">
        <h2 className="font-heading text-xl sm:text-3xl lg:text-4xl font-bold tracking-[0.08em] sm:tracking-[0.14em] text-rust uppercase leading-normal">
          {family.title}
        </h2>
        <p className="mt-1 font-body text-xs sm:text-base tracking-wider text-teal-deep uppercase italic">
          {family.subtitle}
        </p>
        <Divider className="mt-2.5 sm:mt-3.5 text-gold" />
      </Reveal>

      {/* Side-by-side family cards */}
      <div className="mt-4 sm:mt-5 grid w-full max-w-4xl gap-3 sm:gap-6 sm:grid-cols-2 px-1">
        {/* Bride's Family */}
        <Reveal
          delay={250}
          className="rounded-sm border border-gold/40 bg-paper/90 p-3 sm:p-5 text-center shadow-sm"
        >
          <span className="inline-block border-b border-gold/60 pb-0.5 sm:pb-1 font-heading text-xs font-bold tracking-[0.16em] text-rust uppercase sm:text-sm">
            {family.brideFamily.title}
          </span>
          <div className="mt-2.5 sm:mt-3.5">
            <p className="font-heading text-xs sm:text-base font-semibold tracking-wide text-crimson">
              {family.brideFamily.parents}
            </p>
            <ul className="mt-2 space-y-1 sm:space-y-1.5 font-body text-xs text-ink/90 sm:text-sm">
              {family.brideFamily.members.map((m) => (
                <li key={m.name}>
                  <span className="font-semibold text-teal-deep">{m.role}: </span>
                  <span>{m.name}</span>
                </li>
              ))}
            </ul>
            <p className="mt-2.5 sm:mt-3.5 font-heading text-[10px] sm:text-xs tracking-wider text-rust/90 uppercase font-semibold">
              Residence: {family.brideFamily.residence}
            </p>
          </div>
        </Reveal>

        {/* Groom's Family */}
        <Reveal
          delay={350}
          className="rounded-sm border border-gold/40 bg-paper/90 p-3 sm:p-5 text-center shadow-sm"
        >
          <span className="inline-block border-b border-gold/60 pb-0.5 sm:pb-1 font-heading text-xs font-bold tracking-[0.16em] text-rust uppercase sm:text-sm">
            {family.groomFamily.title}
          </span>
          <div className="mt-2.5 sm:mt-3.5">
            <p className="font-heading text-xs sm:text-base font-semibold tracking-wide text-crimson">
              {family.groomFamily.parents}
            </p>
            <ul className="mt-2 space-y-1 sm:space-y-1.5 font-body text-xs text-ink/90 sm:text-sm">
              {family.groomFamily.members.map((m) => (
                <li key={m.name}>
                  <span className="font-semibold text-teal-deep">{m.role}: </span>
                  <span>{m.name}</span>
                </li>
              ))}
            </ul>
            <p className="mt-2.5 sm:mt-3.5 font-heading text-[10px] sm:text-xs tracking-wider text-rust/90 uppercase font-semibold">
              Residence: {family.groomFamily.residence}
            </p>
          </div>
        </Reveal>
      </div>

      {/* Families await message */}
      <Reveal delay={550} className="mt-4 sm:mt-5 text-center px-2">
        <p className="font-body text-xs sm:text-base font-semibold text-rust italic leading-relaxed">
          {family.awaits}
        </p>
      </Reveal>

      {/* Spiritual Reminder from changes.jpeg */}
      <Reveal
        delay={750}
        className="mx-auto mt-4 sm:mt-5 max-w-xl rounded-sm border border-gold/40 bg-gold/10 px-4 py-3 sm:px-5 sm:py-4 text-center shadow-sm"
      >
        <p className="font-heading text-xs font-bold tracking-[0.16em] text-rust uppercase sm:text-sm">
          {family.spiritualReminder.title}
        </p>
        <div lang="sa" className="mt-1.5 font-devanagari text-xs sm:text-base font-bold leading-relaxed text-crimson">
          {family.spiritualReminder.shloka.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <p className="mt-1.5 font-body text-[11px] sm:text-sm italic leading-relaxed text-teal-deep/90">
          "{family.spiritualReminder.translation}"
        </p>
      </Reveal>

      {/* Note */}
      <Reveal delay={950} className="mt-4 sm:mt-5 px-2">
        <p className="border-y border-gold/50 px-4 sm:px-6 py-1.5 sm:py-2 font-heading text-[11px] sm:text-sm tracking-[0.14em] text-rust uppercase font-semibold text-center">
          {family.note}
        </p>
      </Reveal>
    </Card>
  )
}
