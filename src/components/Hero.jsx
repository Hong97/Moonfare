import { motion } from 'framer-motion'
import heroBg from '../assets/img/hero.png'

// Partner logos — text-based to match the screenshot style
const partners = [
  'CONSUMER LOGISTICS',
  'TECH GIANTS',
  'FINANCIAL MOATS',
  'ENERGY LEADERS'
]

function PartnerLogos() {
  // Duplicate the list so the marquee loops seamlessly
  const items = [...partners, ...partners]

  return (
    <div className="w-full overflow-hidden relative">
      {/* Separator line */}
      <div className="w-full h-px bg-white/15 mb-6" />

      {/* Edge fades */}
      <div className="absolute left-0 top-6 bottom-0 w-24 z-10 pointer-events-none"
           style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.45), transparent)' }} />
      <div className="absolute right-0 top-6 bottom-0 w-24 z-10 pointer-events-none"
           style={{ background: 'linear-gradient(to left, rgba(0,0,0,0.45), transparent)' }} />

      <motion.div
        className="flex items-center gap-14 w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
      >
        {items.map((name, i) => (
          <span
            key={i}
            className="text-white/60 hover:text-white transition-colors duration-300 text-[11px] font-semibold tracking-[0.2em] uppercase whitespace-nowrap cursor-default"
          >
            {name}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* ── Animated background — Ken Burns slow pan+zoom, no GIF file needed ── */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="hero-bg-animate absolute inset-0">
          <img
            src={heroBg}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Gradient overlays — warm/neutral to match screenshot tones */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-black/65" />
        <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* ── Page content ─────────────────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col flex-1 max-w-7xl mx-auto w-full px-6 lg:px-8">

        {/* Vertically centered hero copy */}
        <div className="flex-1 flex flex-col items-center justify-center text-center pt-28 pb-16">

          {/* Pill badge — "Outlook 2026  |  Restarting the PE flywheel" */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center mb-10 overflow-hidden rounded-full border border-white/25 text-sm"
          >
            <span className="bg-white/20 backdrop-blur-sm text-white font-semibold px-4 py-1.5 leading-none">
              Outlook 2026
            </span>
            <span className="bg-white/5 backdrop-blur-sm text-white/80 font-normal px-4 py-1.5 leading-none">
              Restarting the PE flywheel
            </span>
          </motion.div>

          {/* Headline — serif display, large, centered */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif-display text-white leading-[1.1] tracking-tight mb-6 max-w-2xl"
            style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: 'clamp(2.75rem, 6vw, 5rem)' }}
          >
            The Art of Selection. Only
            <br />
            The Discipline of Value.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.62, duration: 0.7 }}
            className="text-white/70 text-base md:text-[17px] max-w-md leading-relaxed mb-10"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Bespoke secondary market strategies for blue-chip excellence. 
            <br />
            We don't just trade; we own great businesses.
          </motion.p>

          {/* CTA button */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.78 }}
          >
            <button
              className="bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 text-[15px]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
             Enter with Invitation
            </button>
          </motion.div>
        </div>

        {/* Partner logos strip at the bottom of the hero */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="pb-10"
        >
          <PartnerLogos />
        </motion.div>
      </div>
    </section>
  )
}
