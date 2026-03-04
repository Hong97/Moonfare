import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FiFilter, FiAward, FiUser, FiMonitor, FiUsers, FiShuffle,
} from 'react-icons/fi'

const features = [
  {
    icon: FiFilter,
    title: 'Hyper-selected funds',
    description:
      'We review thousands of funds annually and hand-pick only 20–30, so every option on our platform has passed our rigorous due diligence.',
  },
  {
    icon: FiAward,
    title: 'Decades of expertise',
    description:
      'Our investment committee combines deep private markets experience from leading institutional investors, asset managers, and family offices.',
  },
  {
    icon: FiUser,
    title: 'Dedicated relationship manager',
    description:
      'Every member gets a dedicated point of contact to guide them through the investment process and answer questions at any stage.',
  },
  {
    icon: FiMonitor,
    title: 'Fully digital',
    description:
      'From onboarding to portfolio tracking, the entire Moonfare experience is seamlessly digital — invest in minutes, monitor anytime.',
  },
  {
    icon: FiUsers,
    title: 'Engaged community',
    description:
      'Join 75,000+ sophisticated investors sharing insights, attending exclusive events, and building wealth in private markets together.',
  },
  {
    icon: FiShuffle,
    title: 'Secondary market flexibility',
    description:
      "Access Moonfare's secondary market to buy or sell fund positions before the end of a fund's life, providing rare liquidity in private markets.",
  },
]

function FeatureCard({ feature, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const Icon = feature.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.55 }}
      className="group p-7 rounded-2xl border border-gray-200 bg-white hover:shadow-md hover:border-gray-300 transition-all duration-300"
    >
      <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5 group-hover:bg-blue-100 transition-colors">
        <Icon size={20} className="text-blue-600" />
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
            Why Moonfare
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6"
            style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
          >
            Built differently
            <br />
            for serious investors
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg leading-relaxed"
          >
            Moonfare combines institutional-grade access, rigorous due diligence, and
            a seamless digital experience — so you can invest with the same advantages
            as the world's best-endowed institutions.
          </motion.p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
