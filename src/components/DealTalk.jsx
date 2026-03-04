import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiPlay } from 'react-icons/fi'

const episodes = [
  {
    number: 'EP. 12',
    title: 'The rise of continuation vehicles in private equity',
    guest: 'Managing Partner, Nordic Capital',
    duration: '42 min',
    img: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&h=400&fit=crop',
  },
  {
    number: 'EP. 11',
    title: 'Why emerging markets PE is having a moment',
    guest: 'Head of PE, Singapore GIC',
    duration: '38 min',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
  },
  {
    number: 'EP. 10',
    title: 'Infrastructure as the new defensive allocation',
    guest: 'Partner, Brookfield Asset Management',
    duration: '45 min',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop',
  },
]

function EpisodeCard({ ep, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.55 }}
      className="group rounded-2xl overflow-hidden border border-gray-200 bg-white hover:border-gray-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer"
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={ep.img}
          alt={ep.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:bg-white/30 transition-colors">
            <FiPlay size={18} className="text-white ml-1" />
          </div>
        </div>
        <div className="absolute top-4 left-4">
          <span className="text-xs font-bold text-blue-100 bg-blue-600/80 border border-blue-500/40 rounded-full px-3 py-1">
            {ep.number}
          </span>
        </div>
        <div className="absolute bottom-4 right-4">
          <span className="text-xs text-white/90 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
            {ep.duration}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h4 className="text-gray-900 font-semibold text-base leading-snug mb-2 group-hover:text-blue-600 transition-colors">
          {ep.title}
        </h4>
        <p className="text-gray-500 text-sm">{ep.guest}</p>
      </div>
    </motion.div>
  )
}

export default function DealTalk() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section className="bg-gray-50 py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Hero banner — kept dark because it has a real photo background */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="relative rounded-3xl overflow-hidden mb-16"
          style={{ minHeight: 360 }}
        >
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1400&h=600&fit=crop"
            alt="Deal Talk"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060B18] via-[#060B18]/80 to-transparent" />
          <div className="relative z-10 p-12 lg:p-16 flex flex-col justify-center h-full min-h-[360px]">
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4 block">
              Moonfare Originals
            </span>
            <h2
              className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
              style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
            >
              Deal Talk
            </h2>
            <p className="text-slate-300 text-lg max-w-lg leading-relaxed mb-8">
              In-depth conversations with private markets luminaries — GPs, LPs,
              and allocators sharing unfiltered insights on deals, strategy, and the future of the asset class.
            </p>
            <button className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors w-fit">
              <FiPlay size={16} />
              Watch latest episode
            </button>
          </div>
        </motion.div>

        {/* Episodes grid */}
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold text-gray-900">Recent episodes</h3>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold flex items-center gap-1 transition-colors">
            View all episodes →
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {episodes.map((ep, i) => (
            <EpisodeCard key={ep.number} ep={ep} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
