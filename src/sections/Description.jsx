import Card from '../components/Card'
import { Divider, Icon } from '../components/Ornaments'
import Reveal from '../components/Reveal'
import SplitText from '../components/SplitText'
import { description, mantra, sequenceOfElements } from '../data/content'

export default function Description() {
  return (
    <Card id="union" label={description.title} cornerMantra={mantra.ganesh}>
      <h2 className="font-heading text-2xl font-bold tracking-[0.14em] text-rust uppercase sm:text-3xl lg:text-4xl leading-normal">
        <SplitText chars={description.title} step={80} />
      </h2>
      <Reveal delay={500} className="mt-2 text-center">
        <p className="font-body text-base text-teal-deep italic sm:text-lg font-medium">
          {description.subtitle}
        </p>
        <div className="mx-auto mt-2.5 max-w-md rounded-sm border border-gold/40 bg-gold/10 px-4 py-2">
          <p className="font-body text-sm sm:text-base font-semibold tracking-wide text-rust italic">
            "{description.quote}"
          </p>
        </div>
        <Divider className="mt-4 text-gold" />
      </Reveal>

      <div className="mx-auto mt-4 max-w-2xl space-y-3 text-center">
        {description.paragraphs.map((p, i) => (
          <Reveal key={i} delay={700 + i * 150}>
            <p className="font-body text-sm leading-relaxed text-ink/90 sm:text-base">{p}</p>
          </Reveal>
        ))}
      </div>

      {/* Sacred Elements from the artwork */}
      <div className="mt-6 sm:mt-8 text-center">
        <p className="font-heading text-xs font-bold tracking-[0.2em] text-rust uppercase sm:text-sm">
          Sacred Symbols of Our Union
        </p>
        <ul className="mt-3.5 flex flex-wrap justify-center gap-3 sm:gap-5" aria-label="Sacred elements">
          {sequenceOfElements.map((el, i) => (
            <Reveal as="li" key={el.icon} delay={1100 + i * 80} title={`${el.name}: ${el.meaning}`} className="flex flex-col items-center">
              <span className="grid size-11 place-items-center rounded-full border border-gold/40 bg-paper/85 p-1.5 shadow-sm transition hover:border-rust hover:scale-105 sm:size-13">
                <Icon name={el.icon} className="size-6 sm:size-7" />
              </span>
              <span className="mt-1.5 max-w-[76px] text-center font-heading text-[10px] leading-tight font-medium text-teal-deep uppercase sm:text-xs">
                {el.name}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </Card>
  )
}
