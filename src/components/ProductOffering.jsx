import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import img1 from '../assets/img/Group 2.png'
import img2 from '../assets/img/Group 3.png'
import img3 from '../assets/img/Group 5.png'
import img4 from '../assets/img/Group 1.png'
import img5 from '../assets/img/Group 4.png'

const products = [
  {
    img: img1,
    title: 'Private Equity Mindset',
    description:
      'Applying rigorous private equity due diligence standards to public markets to uncover long-term intrinsic value.',
    tag: 'Exclusive Tier',
  },
  {
    img: img2,
    title: 'Blue-Chip Alpha',
    description:
      'Targeted allocation into global industry leaders with resilient cash flows and unassailable competitive advantages.',
    tag: 'Access via Invitation Only',
  },
  {
    img: img3,
    title: 'Secondary Market Excellence',
    description:
      'Proprietary models designed to navigate market volatility, capturing value in secondary markets through disciplined execution.',
    tag: 'Restricted Access',
  },
  {
    img: img4,
    title: 'Business-Owner Strategy',
    description:
      'We treat equity as business ownership. Deep-dive fundamental analysis into the underlying commercial systems of every position.',
    tag: 'Authorized Partners Only',
  },
  {
    img: img5,
    title: 'Bespoke Portfolios',
    description:
      'Tailored investment solutions designed for institutional-grade requirements and sophisticated private partners.',
    tag: 'Inquiry Required',
  },
]

function ProductCard({ product, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="relative rounded-2xl border border-gray-200 bg-white p-7 flex flex-col group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-200/50 cursor-pointer"
    >
      <div className="w-14 h-14 rounded-full  flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <img src={product.img} alt={product.title} className="w-14 h-14 object-contain" />
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed flex-1">{product.description}</p>

      <div className="mt-6 pt-5 border-t border-gray-100">
        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">{product.tag}</span>
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
           INVESTMENT STRATEGIES
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6"
            style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
          >
            One Vision,

            <br />
            Exceptional Assets,
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg leading-relaxed"
          >
            Whether identifying defensive moats in blue-chip leaders or executing high-conviction secondary market plays, our strategies are built for capital preservation and sustainable growth.
          </motion.p>
        </div>

        {/* Cards grid — horizontal scroll on mobile, grid on sm+ */}
        <div className="sm:hidden flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide">
          {products.map((product, i) => (
            <div key={product.title} className="w-72 shrink-0">
              <ProductCard product={product} index={i} />
            </div>
          ))}
        </div>
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product, i) => (
            <ProductCard key={product.title} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
