import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import img6 from '../assets/img/Group 6.png'
import img7 from '../assets/img/Group 7.png'
import img8 from '../assets/img/Group 9.png'
import img9 from '../assets/img/Group 10.png'
import img10 from '../assets/img/Group 11.png'
import img11 from '../assets/img/Group 12.png'

const features = [
  {
    img: img6,
    title: 'High-Conviction Research',
    description:
      'We bypass the noise. Our committee conducts rigorous, PE-style due diligence on secondary market leaders, selecting only the most resilient businesses with unassailable moats.',
  },
  {
    img: img7,
    title: 'Industrial-Financial Synergy',
    description:
      "Led by experts with deep roots in both industrial operations and financial architecture, we decode the 'Heartbeat' of every business we invest in.",
  },
  {
    img: img8,
    title: 'Private Partner Ecosystem',
    description:
      'Our partners are more than clients. You gain direct access to our core investment insights and a bespoke support structure tailored to institutional-grade needs.',
  },
  {
    img: img9,
    title: 'Systematic Execution',
    description:
      'We bridge the gap between physical business value and digital market liquidity. Our proprietary systems ensure disciplined execution and risk management at every stage.',
  },
  {
    img: img10,
    title: 'The Inner Circle',
    description:
      'Strictly invitation-only. We maintain a curated network of sophisticated capital owners who share our commitment to fundamental value and long-term stewardship.',
  },
  {
    img: img11,
    title: 'Strategic Capital Agility',
    description:
      'We expertly navigate secondary market cycles, identifying optimal entry points in premium blue-chip assets to protect and grow your capital across generations.',
  },
]

function FeatureCard({ feature, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.55 }}
      className="group p-7 rounded-2xl border border-gray-200 bg-white hover:shadow-md hover:border-gray-300 transition-all duration-300"
    >
      <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
        <img src={feature.img} alt={feature.title} className="w-14 h-14 object-contain" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
    </motion.div>
  )
}

export default function WhyMoonfare() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section className="bg-gray-50 py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4 block"
          >
            WHY BILLIONS TREE CAPITAL
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6"
            style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
          >
            Personal, Professional and 
            <br />
            Primed for Excellence.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg leading-relaxed"
          >
            We manage capital with the precision of a business owner. By focusing on elite blue-chip assets and long-term secondary market strategies, we provide our invited partners with a stable, high-conviction environment for wealth compounding.
          </motion.p>
        </div>

        {/* Feature grid — horizontal scroll on mobile, grid on sm+ */}
        <div className="sm:hidden flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide">
          {features.map((feature, i) => (
            <div key={feature.title} className="w-72 shrink-0">
              <FeatureCard feature={feature} index={i} />
            </div>
          ))}
        </div>
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
