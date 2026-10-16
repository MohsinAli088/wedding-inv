import { useContext } from 'react'
import Card from '../components/Card'
import { Divider } from '../components/Ornaments'
import Reveal, { INK_LEAD_MS } from '../components/Reveal'
import SplitText from '../components/SplitText'
import { CardContext, useInViewOnce } from '../components/motion'
import { couple, invitation, mantra } from '../data/content'
import { img } from '../asset'

function Logo() {
  const [ref, inView] = useInViewOnce(0.2)
  const cardSince = useContext(CardContext)
  return (
    <div ref={ref} className="animate-float flex justify-center">
      <img
        src={img('logo.webp')}
        alt="Sankalp and Shalini monogram"
        className={`logo-in mx-auto h-36 w-auto sm:h-48 lg:h-56 ${inView && cardSince > 0 ? 'is-visible' : ''}`}
        style={{ transitionDelay: `${INK_LEAD_MS}ms` }}
      />
    </div>
  )
}

function Person({ p, delay, nameDelay }) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="leading-tight">
        <SplitText
          chars={p.name.toUpperCase()}
          label={p.name}
          delay={nameDelay}
          className="tracking-name-sm text-xl font-semibold text-crimson sm:text-3xl lg:text-4xl"
        />
      </h2>
      <Reveal delay={delay} className="mt-2 text-sm text-teal-deep sm:text-lg">
        <p>
          <span className="font-semibold tracking-[0.2em] text-rust">{p.relation}</span> {p.parents[0]}
        </p>
        <p>{p.parents[1]}</p>
        {p.family && p.family.length > 0 && (
          <div className="mt-1.5 flex flex-wrap items-center justify-center gap-x-3 gap-y-0.5 text-xs text-teal-deep sm:text-sm">
            {p.family.map((f, i) => (
              <span key={i} className="inline-block">
                <span className="font-semibold text-rust">{f.relation}:</span> {f.name}
              </span>
            ))}
          </div>
        )}
      </Reveal>
    </div>
  )
}

// PAGE 2 — the invitation proper
export default function Monogram() {
  return (
    <Card id="invitation" label="Wedding invitation" cornerMantra={mantra.ganesh}>
      <Logo />
      <Reveal delay={600} className="mt-4 max-w-xl">
        <p className="text-sm tracking-[0.18em] text-teal-deep uppercase italic sm:text-base">{invitation.lead}</p>
      </Reveal>

      <div className="mt-5 flex flex-col items-center">
        <Person p={invitation.groom} delay={1500} nameDelay={900} />
        <Reveal delay={1700} className="my-3">
          <Divider className="text-rust" />
          <p className="my-1 text-xl font-semibold tracking-[0.3em] text-rust uppercase sm:text-2xl">{invitation.weds}</p>
          <Divider className="text-rust" />
        </Reveal>
        <Person p={invitation.bride} delay={2900} nameDelay={2200} />
      </div>
      <Reveal delay={3300} className="mt-5 max-w-md">
        <p className="text-xs tracking-wider text-teal-deep uppercase italic sm:text-sm">{couple.tagline}</p>
      </Reveal>
    </Card>
  )
}
