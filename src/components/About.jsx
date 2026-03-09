import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: '20–30', suffix: '', label: 'funds selected annually from thousands reviewed' },
  { value: '120', suffix: '+', label: 'funds offered since inception' },
  { value: '15', suffix: '+', label: 'years of combined investment committee experience' },
  { value: '€4B', suffix: '+', label: 'in committed capital from our members' },
]

function StatCard({ value, suffix, label, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="border border-gray-200 rounded-2xl p-8 bg-white hover:shadow-md transition-all duration-300"
    >
      <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
        {value}
        <span className="text-blue-600">{suffix}</span>
      </div>
      <p className="text-gray-500 text-sm leading-relaxed">{label}</p>
    </motion.div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="bg-gray-50 py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid  gap-16 lg:gap-24 items-start">
          {/* Left column */}
          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4 block">
                OUR PHILOSOPHY
              </span>
              <h2
                className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6"
                style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
              >
                Investing in Great Businesses,
                <br />
                 Not Just Tickers
              </h2>
              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                <p className="text-gray-500 text-lg leading-relaxed">
                  We do not chase market volatility. We view each blue-chip stock as a living, breathing business. Our investment committee conducts exhaustive fundamental analysis to identify companies with unassailable moats and sustainable cash flows.
                </p>
                <p className="text-gray-500 text-lg leading-relaxed">
                  Access to our inner circle is strictly by invitation. We curate a community of sophisticated partners who prioritize long-term capital preservation and compounding over market noise.
                </p>
              </div>
              <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-base transition-colors group">
                Learn about our process
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </motion.div>
          </div>

          {/* Right column - Stats grid */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <StatCard key={i} {...stat} index={i} />
            ))}
          </div> */}
        </div>
      </div>
    </section>
  )
}
