import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

import footerBg from '../assets/img/footer.png'

export default function Community() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="community" className="relative overflow-hidden py-0">
      {/* Background */}
      <div className="relative min-h-[600px] flex items-center">
        <img
          src={footerBg}
          alt="Mountain landscape"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060B18]/80 via-[#060B18]/70 to-[#060B18]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060B18]/60 to-transparent" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 w-full">
          <div className="max-w-2xl">
            {/* Member count badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-3 mb-8 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-5 py-2"
            >
              <div className="flex -space-x-2">
                {[
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="member"
                    className="w-7 h-7 rounded-full border-2 border-white/20 object-cover"
                  />
                ))}
              </div>
              <span className="text-white font-semibold text-sm">75,000+ members worldwide</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.08] mb-6"
            >
              The Future of Value

              <br />
              Curated for the Elite
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="text-slate-300 text-lg leading-relaxed mb-10 max-w-xl"
            >
              Join an exclusive circle of sophisticated capital owners, institutional veterans, and visionary entrepreneurs—shared in pursuit of exceptional blue-chip growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-0.5 text-base">
                Secure Your Access
                <FiArrowRight />
              </button>
              {/* <button className="border border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-base">
                Learn more
              </button> */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
