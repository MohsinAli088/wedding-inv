import Card from '../components/Card'
import { Divider } from '../components/Ornaments'
import Reveal from '../components/Reveal'
import { closing, couple, mantra } from '../data/content'

// PAGE 8 — closing note + RSVP
export default function Closing() {
  return (
    <Card id="rsvp" label="RSVP and contact" cornerMantra={mantra.ganesh}>
      <Reveal delay={200} className="max-w-xl">
        <Divider className="text-rust" />
        <p className="mt-4 text-xl font-semibold text-crimson italic sm:text-3xl">{closing.awaits}</p>
        <p className="mt-2 text-sm text-teal-deep italic sm:text-base">{closing.thanks}</p>
      </Reveal>

      {closing.family && (
        <Reveal delay={450} className="mt-6 w-full max-w-xl">
          <p className="text-xs font-semibold tracking-[0.25em] text-rust uppercase sm:text-sm">
            {closing.family.title}
          </p>
          <div className="mt-3 grid grid-cols-1 gap-3 text-left sm:grid-cols-2 sm:gap-4">
            <div className="rounded border border-rust/30 bg-paper/80 p-3.5 sm:p-4 shadow-2xs">
              <p className="text-xs font-bold tracking-[0.2em] text-teal-deep uppercase">
                {closing.family.groomSide.title}
              </p>
              <ul className="mt-2 space-y-1 text-sm text-teal-deep sm:text-base">
                {closing.family.groomSide.members.map((m, i) => (
                  <li key={i}>
                    <span className="font-semibold text-rust">{m.relation}:</span> {m.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded border border-rust/30 bg-paper/80 p-3.5 sm:p-4 shadow-2xs">
              <p className="text-xs font-bold tracking-[0.2em] text-teal-deep uppercase">
                {closing.family.brideSide.title}
              </p>
              <ul className="mt-2 space-y-1 text-sm text-teal-deep sm:text-base">
                {closing.family.brideSide.members.map((m, i) => (
                  <li key={i}>
                    <span className="font-semibold text-rust">{m.relation}:</span> {m.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      )}

      <Reveal delay={700} className="mt-6">
        <h3 className="text-xs font-bold tracking-[0.25em] text-teal-deep uppercase sm:text-sm">{closing.rsvpTitle}</h3>
        <Divider className="mt-1.5 text-teal-deep" />
      </Reveal>
      <ul className="mt-3 flex flex-wrap justify-center gap-6 sm:gap-10">
        {closing.contacts.map((c, i) => (
          <Reveal as="li" key={i} delay={850 + i * 150} className="text-center">
            <p className="text-sm font-semibold text-teal-deep sm:text-base">{c.name}</p>
            <a
              href={`tel:${c.phone.replace(/\s/g, '')}`}
              className="text-sm tracking-wider text-rust transition hover:underline sm:text-base"
            >
              {c.phone}
            </a>
          </Reveal>
        ))}
      </ul>

      {closing.venue && (
        <Reveal delay={1100} className="mt-5">
          <p className="text-[11px] font-bold tracking-[0.25em] text-teal-deep uppercase">{closing.venue.title}</p>
          <p className="text-base font-semibold text-rust sm:text-lg">{closing.venue.name}</p>
          <p className="text-xs tracking-wider text-teal-deep sm:text-sm">{closing.venue.location}</p>
        </Reveal>
      )}

      {closing.hashtag && (
        <Reveal delay={1250} className="mt-5">
          <span className="inline-block rounded-full border border-rust/40 bg-rust/10 px-5 py-1.5 text-sm font-bold tracking-widest text-rust sm:text-base">
            {closing.hashtag}
          </span>
        </Reveal>
      )}

      <Reveal delay={1400} className="mt-5">
        <p className="text-sm tracking-[0.3em] text-teal-deep uppercase">
          {couple.groom} &amp; {couple.bride}
        </p>
      </Reveal>
    </Card>
  )
}
