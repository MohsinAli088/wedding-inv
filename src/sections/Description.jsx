import Card from '../components/Card'
import { Divider, Icon } from '../components/Ornaments'
import Reveal from '../components/Reveal'
import SplitText from '../components/SplitText'
import { description, mantra, sequenceOfElements } from '../data/content'

export default function Description() {
  return (
    <Card id="union" label={description.title} cornerMantra={mantra.ganesh}>
      <h2 className="font-heading text-xl sm:text-3xl lg:text-4xl font-bold tracking-[0.08em] sm:tracking-[0.14em] text-rust uppercase leading-normal">
        <SplitText chars={description.title} step={80} />
      </h2>
      <Reveal delay={500} className="mt-2 text-center px-2">
        <p className="font-body text-sm sm:text-base md:text-lg text-teal-deep italic font-medium">
          {description.subtitle}
        </p>
        <div className="mx-auto mt-2 max-w-md rounded-sm border border-gold/40 bg-gold/10 px-3.5 py-1.5 sm:px-4 sm:py-2">
          <p className="font-body text-xs sm:text-sm font-semibold tracking-wide text-rust italic">
            "{description.quote}"
          </p>
        </div>
        <Divider className="mt-3.5 text-gold" />
      </Reveal>

      <div className="mx-auto mt-3.5 max-w-2xl space-y-2.5 sm:space-y-3 text-center px-2">
        {description.paragraphs.map((p, i) => (
          <Reveal key={i} delay={700 + i * 150}>
            <p className="font-body text-xs sm:text-sm md:text-base leading-relaxed text-ink/90">{p}</p>
          </Reveal>
        ))}
      </div>

      {/* Sacred Elements from the artwork */}
      <div className="mt-5 sm:mt-7 text-center">
        <p className="font-heading text-xs font-bold tracking-[0.16em] text-rust uppercase sm:text-sm">
          Sacred Symbols of Our Union
        </p>
        <ul className="mt-3 flex flex-wrap justify-center gap-2 sm:gap-4 lg:gap-5" aria-label="Sacred elements">
          {sequenceOfElements.map((el, i) => (
            <Reveal as="li" key={el.icon} delay={1100 + i * 80} title={`${el.name}: ${el.meaning}`} className="flex flex-col items-center">
              <span className="grid size-10 place-items-center rounded-full border border-gold/40 bg-paper/85 p-1.5 shadow-sm transition hover:border-rust hover:scale-105 sm:size-12 lg:size-13">
                <Icon name={el.icon} className="size-5 sm:size-6 lg:size-7" />
              </span>
              <span className="mt-1 max-w-[68px] sm:max-w-[76px] text-center font-heading text-[9px] sm:text-[11px] leading-tight font-medium text-teal-deep uppercase">
                {el.name}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </Card>
  )
}
