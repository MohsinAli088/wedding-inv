import Card from '../components/Card'
import { Divider, Icon } from '../components/Ornaments'
import Reveal from '../components/Reveal'
import ThemeDecor, { THEMES } from '../components/ThemeDecor'
import { isPlaceholder, mapsLink, mantra } from '../data/content'

function formatSuperscriptDate(dateStr) {
  if (!dateStr) return null
  const parts = dateStr.split(/(\d+(?:st|nd|rd|th))/i)
  return parts.map((part, i) => {
    const m = part.match(/^(\d+)(st|nd|rd|th)$/i)
    return m ? (
      <span key={i} className="inline-block">
        {m[1]}
        <sup className="relative -top-[0.5em] text-[0.62em] font-bold uppercase tracking-normal">{m[2]}</sup>
      </span>
    ) : (
      part
    )
  })
}

function HighlightedDescription({ text }) {
  const parts = text.split(/(“[^”]+”)/g)
  return (
    <p className="text-xs leading-relaxed italic opacity-95 sm:text-sm">
      {parts.map((part, i) =>
        /^“[^”]+”$/.test(part) ? (
          <span key={i} className="rounded bg-crimson/10 px-1 py-0.5 font-bold text-crimson not-italic">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </p>
  )
}

// PAGES 3–7 — one page per group of functions
export default function EventPage({ event }) {
  const theme = THEMES[event.theme]
  const many = event.functions.length > 1

  return (
    <Card
      id={event.id}
      label={event.title}
      theme={theme}
      cornerMantra={mantra.ganesh}
      decor={<ThemeDecor theme={event.theme} />}
    >
      <div className="flex w-full flex-col items-center text-(--page-ink)">
        <Reveal delay={100} className="flex flex-col items-center">
          <span className="relative grid size-14 place-items-center sm:size-16">
            <span className="absolute inset-0 rounded-full border border-(--accent)/40" />
            <span className="animate-spin-slow absolute inset-1 rounded-full border border-dashed border-(--accent-2)/40" />
            <Icon name={event.element} className="size-9.5 contrast-125 brightness-90 drop-shadow-xs sm:size-11" />
          </span>
        </Reveal>

        <Reveal delay={200} className="mt-3 text-center">
          <h2 className="max-w-2xl text-3xl font-bold text-(--accent) sm:text-4xl lg:text-5xl">{event.title}</h2>
        </Reveal>

        {event.blessing && (
          <Reveal delay={320} className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-(--accent-2) italic sm:text-base">
            {event.blessing.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </Reveal>
        )}

        <Reveal delay={450} className="mt-4">
          <Divider className="text-(--accent)" />
          <p className="mt-3 text-lg font-semibold tracking-[0.15em] text-(--accent) uppercase sm:text-2xl">
            {formatSuperscriptDate(event.date)}
          </p>
        </Reveal>

        <div className={`mt-6 grid w-full gap-4 sm:gap-5 ${many ? 'max-w-3xl sm:grid-cols-2' : 'max-w-md'}`}>
          {event.functions.map((f, i) => (
            <Reveal
              key={f.name}
              delay={600 + i * 200}
              className="rounded-sm border border-(--accent)/30 bg-paper/70 px-4 py-4 sm:px-5 sm:py-5"
            >
              <p className="text-sm font-bold tracking-[0.2em] text-(--accent-2) uppercase sm:text-base">{f.name}</p>
              {f.time && (
                <>
                  <p className="mt-2 text-xs tracking-[0.25em] text-(--accent) uppercase">Time</p>
                  <p className="text-xl font-semibold tracking-wider text-(--accent) uppercase sm:text-2xl">{f.time}</p>
                </>
              )}
              <p className="mt-3 text-xs tracking-[0.25em] text-(--accent) uppercase">Venue</p>
              <address className="text-sm text-(--accent-2) not-italic sm:text-base">
                {f.venue.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              {f.note && (
                <p className="mt-2 text-xs font-semibold tracking-wider text-(--accent) uppercase">
                  {f.note}
                </p>
              )}
              {!isPlaceholder(f.venue[0]) && (
                <a
                  href={f.mapUrl || mapsLink(f.venue)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block border border-(--accent) px-4 py-1 text-xs tracking-[0.18em] text-(--accent) uppercase transition hover:bg-(--accent) hover:text-paper"
                >
                  View on map
                </a>
              )}
            </Reveal>
          ))}
        </div>

        {event.description && (
          <Reveal delay={1100} as="footer" className="relative z-20 mt-6 mb-14 w-full max-w-xl px-2 sm:mb-0">
            <div className="rounded-lg border border-(--accent)/25 bg-paper/90 px-4 py-3 text-center shadow-xs backdrop-blur-xs sm:px-6 sm:py-3.5">
              <HighlightedDescription text={event.description} />
            </div>
          </Reveal>
        )}
      </div>
    </Card>
  )
}
