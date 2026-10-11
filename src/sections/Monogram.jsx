import { useContext } from 'react'
import Card from '../components/Card'
import Reveal, { INK_LEAD_MS } from '../components/Reveal'
import SplitText from '../components/SplitText'
import { CardContext, useInViewOnce } from '../components/motion'
import { couple, mantra } from '../data/content'
import { img } from '../asset'

function Logo() {
  const [ref, inView] = useInViewOnce(0.2)
  const cardSince = useContext(CardContext)
  return (
    <div ref={ref} className="animate-float">
      <img
        src={img('logo.webp')}
        alt="Dr. Shiva Shalini and Dr. Sankalp Shashwat Monogram"
        className={`logo-in mx-auto w-56 drop-shadow-xl sm:w-64 lg:w-72 ${
          inView && cardSince > 0 ? 'is-visible' : ''
        }`}
        style={{ transitionDelay: `${INK_LEAD_MS}ms` }}
      />
    </div>
  )
}

export default function Monogram() {
  return (
    <Card id="monogram" label="Dr. Shiva Shalini and Dr. Sankalp Shashwat" cornerMantra={mantra.ganesh}>
      <Logo />
      <div className="mt-5 sm:mt-7 flex w-full max-w-2xl flex-col items-center text-center">
        <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[0.14em] text-rust leading-normal">
          <SplitText
            chars={couple.bride.toUpperCase()}
            label={couple.bride}
            delay={700}
          />
        </h1>

        <Reveal delay={1100} className="my-2.5 sm:my-3.5 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-gold/60 sm:w-16" />
          <img src={img('ring.webp')} alt="&" className="size-7 sm:size-9 drop-shadow-md" />
          <span className="h-px w-10 bg-gold/60 sm:w-16" />
        </Reveal>

        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[0.14em] text-crimson leading-normal">
          <SplitText
            chars={couple.groom.toUpperCase()}
            label={couple.groom}
            delay={1300}
          />
        </h2>

        <Reveal delay={1700} className="mt-4 sm:mt-5 max-w-lg px-4 text-center">
          <p className="font-body text-base italic leading-relaxed text-teal-deep sm:text-lg">
            "{couple.tagline}"
          </p>
        </Reveal>
      </div>
    </Card>
  )
}
