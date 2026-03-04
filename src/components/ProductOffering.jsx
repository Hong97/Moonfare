import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiTrendingUp, FiLayers, FiZap, FiDroplet, FiRepeat } from 'react-icons/fi'

const products = [
  {
    icon: FiTrendingUp,
    title: 'Direct Funds',
    description:
      "Gain direct exposure to top-tier private equity, venture capital, and growth equity funds managed by the world's leading GPs.",
    minimum: '€100,000',
    tag: 'Most popular',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: FiLayers,
    title: 'Portfolio of Funds',
    description:
      'Build instant diversification across multiple managers, vintages, and strategies with a single allocation.',
    minimum: '€50,000',
    tag: null,
    color: 'from-indigo-500 to-purple-600',
  },
  {
    icon: FiZap,
    title: 'Co-investments',
    description:
      'Invest alongside leading GPs in specific deals with no management fees or carried interest on co-investment capital.',
    minimum: '€50,000',
    tag: 'Fee-efficient',
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: FiDroplet,
    title: 'Semi-liquid',
    description:
      'Access private market returns with quarterly liquidity windows — a bridge between private and liquid alternatives.',
    minimum: '€25,000',
    tag: 'Quarterly liquidity',
    color: 'from-teal-500 to-cyan-600',
  },
  {
    icon: FiRepeat,
    title: 'Secondaries',
    description:
      'Acquire stakes in existing private equity funds at potentially discounted valuations with shorter duration.',
    minimum: '€25,000',
    tag: 'Discounted entry',
    color: 'from-rose-500 to-pink-600',
  },
]

function ProductCard({ product, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const Icon = product.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="relative rounded-2xl border border-gray-200 bg-white p-7 flex flex-col group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-200/50 cursor-pointer"
    >
      {product.tag && (
        <span className="absolute top-4 right-4 text-xs font-semibold text-gray-600 bg-gray-100 border border-gray-200 rounded-full px-3 py-1">
          {product.tag}
        </span>
      )}

      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <Icon size={22} className="text-white" />
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed flex-1">{product.description}</p>

      <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
        <div>
          <span className="text-xs text-gray-400 uppercase tracking-wide">Minimum</span>
          <div className="text-gray-900 font-semibold text-base mt-0.5">{product.minimum}</div>
        </div>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
          Learn more <span>→</span>
        </button>
      </div>
    </motion.div>
  )
}

export default function ProductOffering() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="products" className="bg-white py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="max-w-2xl mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4 block"
          >
            Product offering
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6"
            style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
          >
            One platform,
            <br />
            every strategy
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg leading-relaxed"
          >
            Whether you're building a diversified private markets portfolio or targeting a specific
            strategy, Moonfare gives you the tools and access to invest with confidence.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product, i) => (
            <ProductCard key={product.title} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
