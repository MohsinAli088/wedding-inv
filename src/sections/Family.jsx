import Card from '../components/Card'
import { Divider } from '../components/Ornaments'
import Reveal from '../components/Reveal'
import { family, mantra } from '../data/content'

export default function Family() {
  return (
    <Card id="family" label="Family Invitation" cornerMantra={mantra.ganesh}>
      <Reveal delay={100} className="mt-2 text-center">
        <h2 className="font-heading text-2xl font-bold tracking-[0.14em] text-rust uppercase sm:text-3xl lg:text-4xl leading-normal">
          {family.title}
        </h2>
        <p className="mt-1.5 font-body text-sm tracking-wider text-teal-deep uppercase sm:text-base italic">
          {family.subtitle}
        </p>
        <Divider className="mt-3.5 text-gold" />
      </Reveal>

      {/* Side-by-side family cards */}
      <div className="mt-5 grid w-full max-w-4xl gap-4 sm:grid-cols-2 sm:gap-6">
        {/* Bride's Family */}
        <Reveal
          delay={250}
          className="rounded-sm border border-gold/40 bg-paper/85 p-4 text-center shadow-sm sm:p-5"
        >
          <span className="inline-block border-b border-gold/60 pb-1 font-heading text-xs font-bold tracking-[0.18em] text-rust uppercase sm:text-sm">
            {family.brideFamily.title}
          </span>
          <div className="mt-3.5">
            <p className="font-heading text-sm font-semibold tracking-wide text-crimson sm:text-base">
              {family.brideFamily.parents}
            </p>
            <ul className="mt-2.5 space-y-1.5 font-body text-xs text-ink/90 sm:text-sm">
              {family.brideFamily.members.map((m) => (
                <li key={m.name}>
                  <span className="font-semibold text-teal-deep">{m.role}: </span>
                  <span>{m.name}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3.5 font-heading text-[11px] tracking-wider text-rust/90 uppercase font-semibold sm:text-xs">
              Residence: {family.brideFamily.residence}
            </p>
          </div>
        </Reveal>

        {/* Groom's Family */}
        <Reveal
          delay={350}
          className="rounded-sm border border-gold/40 bg-paper/85 p-4 text-center shadow-sm sm:p-5"
        >
          <span className="inline-block border-b border-gold/60 pb-1 font-heading text-xs font-bold tracking-[0.18em] text-rust uppercase sm:text-sm">
            {family.groomFamily.title}
          </span>
          <div className="mt-3.5">
            <p className="font-heading text-sm font-semibold tracking-wide text-crimson sm:text-base">
              {family.groomFamily.parents}
            </p>
            <ul className="mt-2.5 space-y-1.5 font-body text-xs text-ink/90 sm:text-sm">
              {family.groomFamily.members.map((m) => (
                <li key={m.name}>
                  <span className="font-semibold text-teal-deep">{m.role}: </span>
                  <span>{m.name}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3.5 font-heading text-[11px] tracking-wider text-rust/90 uppercase font-semibold sm:text-xs">
              Residence: {family.groomFamily.residence}
            </p>
          </div>
        </Reveal>
      </div>

      {/* Families await message */}
      <Reveal delay={550} className="mt-5 sm:mt-6 text-center">
        <p className="font-body text-base font-semibold text-rust italic sm:text-lg leading-relaxed">
          {family.awaits}
        </p>
      </Reveal>

      {/* Spiritual Reminder from changes.jpeg */}
      <Reveal
        delay={750}
        className="mx-auto mt-5 max-w-xl rounded-sm border border-gold/40 bg-gold/10 px-5 py-4 text-center shadow-sm"
      >
        <p className="font-heading text-xs font-bold tracking-[0.2em] text-rust uppercase sm:text-sm">
          {family.spiritualReminder.title}
        </p>
        <div lang="sa" className="mt-2 font-devanagari text-sm font-bold leading-relaxed text-crimson sm:text-base">
          {family.spiritualReminder.shloka.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <p className="mt-2 font-body text-xs italic leading-relaxed text-teal-deep/90 sm:text-sm">
          "{family.spiritualReminder.translation}"
        </p>
      </Reveal>

      {/* Note */}
      <Reveal delay={950} className="mt-5">
        <p className="border-y border-gold/50 px-6 py-2 font-heading text-xs tracking-[0.16em] text-rust uppercase sm:text-sm font-semibold">
          {family.note}
        </p>
      </Reveal>
    </Card>
  )
}
