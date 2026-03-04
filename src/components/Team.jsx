import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const committeeMembers = [
  {
    name: 'Steffen Pauls',
    role: 'Founder & CEO',
    prev: 'KKR, Goldman Sachs',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'Lorenz Jüngling',
    role: 'Chief Investment Officer',
    prev: 'McKinsey, UBS',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'Alexandra Ivanova',
    role: 'Head of Fund Selection',
    prev: 'Advent International',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'Marcus Weber',
    role: 'Managing Director',
    prev: 'Permira, Deutsche Bank',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'Sophie Chen',
    role: 'General Counsel',
    prev: 'Clifford Chance, Blackstone',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face',
  },
]

const teamMembers = [
  {
    name: 'Felix Hartmann',
    role: 'VP, Fund Research',
    prev: 'Carlyle Group',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'Julia Schneider',
    role: 'Investment Analyst',
    prev: 'EQT, Roland Berger',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'Thomas Müller',
    role: 'Portfolio Manager',
    prev: 'Warburg Pincus',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'Emma Laurent',
    role: 'Senior Analyst',
    prev: 'BNP Paribas, CVC',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'David Kim',
    role: 'VP, Investor Relations',
    prev: 'JP Morgan, TPG',
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face',
  },
]

function MemberCard({ member }) {
  return (
    <div className="flex-shrink-0 w-56 group cursor-pointer">
      <div className="relative rounded-2xl overflow-hidden mb-4 aspect-[4/5]">
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <h4 className="text-gray-900 font-semibold text-base">{member.name}</h4>
      <p className="text-blue-600 text-sm mt-0.5">{member.role}</p>
      <p className="text-gray-400 text-xs mt-1">prev. {member.prev}</p>
    </div>
  )
}

export default function Team() {
  const [activeTab, setActiveTab] = useState('committee')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const members = activeTab === 'committee' ? committeeMembers : teamMembers

  return (
    <section className="bg-white py-28 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4 block"
          >
            Our people
          </motion.span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
              style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
            >
              The team behind
              <br />
              the selection
            </motion.h2>

            {/* Tabs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="flex gap-1 bg-gray-100 rounded-xl p-1 border border-gray-200 h-fit"
            >
              {[
                { id: 'committee', label: 'Investment Committee' },
                { id: 'team', label: 'Investment Team' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scrollable cards */}
        <div className="overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex gap-5"
          >
            {members.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
