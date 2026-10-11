import { useMemo } from 'react'
import { CardContext, useInViewOnce } from './motion'
import { img } from '../asset'

// Teal watercolour blooms that wash over a page as it arrives (video transition)
const INK = [
  { src: img('ink-1.webp'), className: 'left-[-20%] top-[5%] w-[95%] sm:w-[60%]', delay: 0 },
  { src: img('ink-2.webp'), className: 'right-[-25%] top-[30%] w-[100%] sm:w-[65%]', delay: 120 },
  { src: img('ink-1.webp'), className: 'left-[10%] bottom-[-15%] w-[90%] sm:w-[55%] rotate-90', delay: 240 },
]

// One "page" of the invitation: paper, block-print frame, hanging garland
// top-left and the peacock bottom-left, as in the PDF.
export default function Card({ id, label, children, peacock = true, className = '', theme, decor, cornerMantra }) {
  const [ref, inView] = useInViewOnce(0.25)
  const since = useMemo(() => (inView ? performance.now() : 0), [inView])

  return (
    <section id={id} aria-label={label} className="px-2 py-2 sm:px-4 sm:py-4 lg:px-6 xl:px-14">
      <div
        ref={ref}
        className={`card-frame relative mx-auto flex min-h-[calc(100svh-1rem)] max-w-7xl flex-col sm:min-h-[calc(100svh-2rem)] ${
          theme?.night ? 'card-night' : ''
        } ${inView ? 'is-inview' : ''}`}
        style={
          theme && {
            '--accent': theme.accent,
            '--accent-2': theme.accent2,
            '--page-ink': theme.ink,
          }
        }
      >
        {cornerMantra && (
          <div className="pointer-events-none absolute top-3 right-4 z-20 font-devanagari text-[11px] font-semibold tracking-wider text-(--accent,var(--color-rust)) select-none sm:top-5 sm:right-8 sm:text-sm md:text-base">
            {cornerMantra}
          </div>
        )}
        {decor && <div className="absolute inset-0 z-[5] overflow-hidden">{decor}</div>}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-30 overflow-hidden">
          {INK.map((ink, i) => (
            <img
              key={i}
              src={ink.src}
              alt=""
              className={`ink-bloom absolute max-w-none ${ink.className}`}
              style={{ animationDelay: `${ink.delay}ms` }}
            />
          ))}
        </div>

        <div className="card-garland pointer-events-none absolute top-0 left-[7%] w-[38%] max-w-[380px] select-none sm:w-[30%] lg:w-[24%]">
          <img src={img('garland.webp')} alt="" aria-hidden="true" className="animate-sway w-full" />
        </div>
        {peacock && (
          <img
            src={img('peacock.webp')}
            alt=""
            aria-hidden="true"
            className="card-peacock pointer-events-none absolute bottom-[calc(-1*var(--bw))] left-[calc(-1*var(--bw))] z-10 w-[42%] max-w-[280px] select-none sm:w-[44%] sm:max-w-[380px] lg:w-[31%] lg:max-w-[460px]"
          />
        )}

        <CardContext.Provider value={since}>
          <div
            className={`relative z-20 flex flex-1 flex-col items-center justify-start px-4 pt-16 pb-20 text-center sm:justify-center sm:px-10 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28 ${className}`}
          >
            <div className="flex w-full max-w-3xl flex-col items-center sm:my-auto">
              {children}
            </div>
          </div>
        </CardContext.Provider>
      </div>
    </section>
  )
}
