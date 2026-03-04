import { FiTwitter, FiLinkedin, FiInstagram, FiYoutube } from 'react-icons/fi'

const footerLinks = {
  Invest: [
    'Direct Funds',
    'Portfolio of Funds',
    'Co-investments',
    'Semi-liquid',
    'Secondaries',
    'Secondary Market',
  ],
  Learn: [
    'Academy',
    'Deal Talk',
    'Research & Insights',
    'Private Equity Guide',
    'Venture Capital Guide',
    'Events',
  ],
  Company: [
    'About Us',
    'Team',
    'Careers',
    'Press',
    'Partners',
    'Contact',
  ],
}

const socials = [
  { Icon: FiLinkedin, label: 'LinkedIn' },
  { Icon: FiTwitter, label: 'Twitter' },
  { Icon: FiInstagram, label: 'Instagram' },
  { Icon: FiYoutube, label: 'YouTube' },
]

const legalLinks = ['Privacy Policy', 'Terms of Use', 'Cookie Policy', 'Imprint', 'Regulatory Disclosures']

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top section */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-gray-900 font-semibold text-xl tracking-tight">moonfare</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-6">
              Moonfare is the leading digital platform for private market investments, giving
              qualified investors access to institutional-grade funds from the world's top managers.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {socials.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-200 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-gray-900 font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="py-8 border-t border-gray-200">
          <p className="text-gray-400 text-xs leading-relaxed mb-4">
            <strong className="text-gray-500">Important Notice:</strong> The information on this website is for informational
            purposes only and does not constitute investment advice, a solicitation, or an offer to buy or sell any
            security. Private market investments are speculative and involve a high degree of risk. Past performance
            is not indicative of future results. Moonfare GmbH is authorized and regulated by the Federal Financial
            Supervisory Authority (BaFin) in Germany. Investments in private equity funds are suitable only for
            professionally experienced investors and qualified private investors within the meaning of applicable law.
          </p>
          <p className="text-gray-400 text-xs">
            Moonfare is registered in Germany under HRB 196291 B. Registered office: Luisenstraße 1, 10117 Berlin, Germany.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} Moonfare GmbH. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-400 hover:text-gray-600 text-xs transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
