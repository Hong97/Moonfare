import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import c1 from '../assets/img/commitee/1.jpg'
import c2 from '../assets/img/commitee/2.png'
import c3 from '../assets/img/commitee/3.png'
import c4 from '../assets/img/commitee/4.png'
import c5 from '../assets/img/commitee/5.png'
import c7 from '../assets/img/commitee/7.png'
import t1 from '../assets/img/team/t1.png'
import t2 from '../assets/img/team/t2.png'
import t3 from '../assets/img/team/t3.png'
import t4 from '../assets/img/team/t4.png'
import t5 from '../assets/img/team/t5.png'
import t6 from '../assets/img/team/t6.png'

const committeeMembers = [
  {
    name: 'Richard Ashford',
    role: 'Founder & Chairman',
    prev: 'Blackstone, Goldman Sachs',
    img: c1,
  },
  {
    name: 'Jonathan Mercer',
    role: 'Chief Executive Officer',
    prev: 'KKR, Morgan Stanley',
    img: c2,
  },
  {
    name: 'Evelyn Hartley',
    role: 'Chief Investment Officer',
    prev: 'Carlyle Group, UBS',
    img: c3,
  },
  {
    name: 'Sebastian Voss',
    role: 'Managing Director, Capital Markets',
    prev: 'Permira, Deutsche Bank',
    img: c4,
  },
  {
    name: 'Natalie Wren',
    role: 'Head of Secondary Markets',
    prev: 'Advent International, Lazard',
    img: c5,
  },
  {
    name: 'Marcus Elliot',
    role: 'General Counsel & Compliance',
    prev: 'Clifford Chance, Apollo',
    img: c7,
  },
]

const teamMembers = [
  {
    name: 'Daniel Croft',
    role: 'VP, Blue-Chip Research',
    prev: 'JP Morgan, Fidelity',
    img: t1,
  },
  {
    name: 'Sophia Liang',
    role: 'Senior Investment Analyst',
    prev: 'CVC Capital, McKinsey',
    img: t3,
  },
  {
    name: 'Brendan Walsh',
    role: 'Portfolio Risk Manager',
    prev: 'Warburg Pincus, Deloitte',
    img: t2,
  },
  {
    name: 'Isabelle Fontaine',
    role: 'Partner Relations Lead',
    prev: 'BNP Paribas, Rothschild',
    img: t5,
  },
  {
    name: 'Owen Tanner',
    role: 'VP, Investor Relations',
    prev: 'TPG Capital, Credit Suisse',
    img: t4,
  },
  {
    name: 'Priya Nair',
    role: 'Business Intelligence Analyst',
    prev: 'EY-Parthenon, Temasek',
    img: t6,
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
    <section className="bg-white py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4 block"
          >
            THE ARCHITECTS OF CAPITAL
          </motion.span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 }}
                className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-lg mb-4"
                style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
              >
                Uniting Industrial Wisdom with Financial Precision
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="text-gray-500 text-lg leading-relaxed max-w-lg"
              >
                Our core leadership combines decades of hands-on business execution with rigorous secondary market mastery to safeguard your growth.
              </motion.p>
            </div>

            {/* Tabs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="flex gap-1 bg-gray-100 rounded-xl p-1 border border-gray-200 h-fit shrink-0"
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
                      ? 'bg-blue-600  shadow-md'
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

        <div style={{ overflowX: 'auto' }} className="pb-4">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            style={{ display: 'flex', gap: '1.25rem', width: 'max-content' }}
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
