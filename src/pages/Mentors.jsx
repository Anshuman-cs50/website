import { useState } from 'react'
import { mentors, avatarStyles } from '../data/mentors'

export default function Mentors() {
  const [searchQuery, setSearchQuery] = useState('')
  const [btnHovered, setBtnHovered] = useState(false)

  // Filter mentors case-insensitively by name, role, or company (both name and role are matched)
  const filteredMentors = mentors.filter(mentor => {
    const query = searchQuery.toLowerCase()
    return (
      mentor.name.toLowerCase().includes(query) ||
      mentor.role.toLowerCase().includes(query)
    )
  })

  return (
    <>
      {/* Hero Header */}
      <section
        className="relative overflow-hidden"
        style={{ padding: '10rem 4rem 7rem', background: 'var(--cream)' }}
      >
        {/* Background Blobs and Grid */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute rounded-full opacity-20"
            style={{
              width: 500,
              height: 500,
              background: 'var(--purple)',
              filter: 'blur(100px)',
              top: -100,
              right: -100,
            }}
          />
          <div
            className="absolute rounded-full opacity-10"
            style={{
              width: 350,
              height: 350,
              background: 'var(--teal)',
              filter: 'blur(90px)',
              bottom: 0,
              left: -80,
            }}
          />
          <div className="hero-grid" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="section-label">Our Mentors</div>
          <h1
            className="font-display font-bold leading-none mb-8"
            style={{
              fontSize: 'clamp(3rem, 6.5vw, 5rem)',
              letterSpacing: '-0.04em',
              color: 'var(--ink)',
            }}
          >
            Women who've walked
            <br />
            this path before you
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed font-light"
            style={{
              color: 'var(--ink-soft)',
              maxWidth: 600,
            }}
          >
            Real women working in AI at India's top companies and startups. Reach out, ask questions, get inspired.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 px-5 sm:px-8 lg:px-16" style={{ background: 'white' }}>
        <div className="max-w-6xl mx-auto">
          {/* Search Bar */}
          <div className="flex justify-center mb-16">
            <input
              type="text"
              placeholder="Search by name, company, or role..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full max-w-[480px] rounded-full border text-sm transition-all duration-200 outline-none text-[var(--ink)] focus:border-[var(--purple)] focus:ring-1 focus:ring-[var(--purple)]"
              style={{
                background: 'white',
                border: '1px solid var(--border)',
                padding: '0.6rem 1.25rem',
              }}
            />
          </div>

          {/* Mentors Grid */}
          {filteredMentors.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg font-medium mb-2" style={{ color: 'var(--ink-soft)' }}>
                No mentors found matching your search
              </p>
              <p className="text-sm font-light" style={{ color: 'var(--ink-muted)' }}>
                Try searching for a different name, role, or company.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMentors.map((mentor) => (
                <div
                  key={mentor.id}
                  className="rounded-2xl p-6 transition-all duration-200 cursor-default"
                  style={{ border: '1px solid var(--border)', background: 'var(--cream)' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--purple)'
                    e.currentTarget.style.background = 'white'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.background = 'var(--cream)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <div
                    className="w-13 h-13 rounded-full flex items-center justify-center font-display font-bold text-lg text-white mb-4"
                    style={{ ...avatarStyles[mentor.avatarColor], width: 52, height: 52 }}
                  >
                    {mentor.initials}
                  </div>
                  <div className="font-display font-bold text-base mb-0.5" style={{ color: 'var(--ink)' }}>
                    {mentor.name}
                  </div>
                  <div className="text-xs font-light mb-3" style={{ color: 'var(--ink-muted)' }}>
                    {mentor.role}
                  </div>
                  <p className="text-sm leading-relaxed italic font-light mb-4" style={{ color: 'var(--ink-soft)' }}>
                    "{mentor.advice}"
                  </p>
                  <a
                    href={mentor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold no-underline transition-all duration-200"
                    style={{ color: 'var(--purple)' }}
                  >
                    Connect on LinkedIn →
                  </a>
                </div>
              ))}
            </div>
          )}

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto mt-20 sm:mt-28">
            <div className="rounded-2xl p-10 text-center" style={{ background: 'var(--ink)' }}>
              <h3
                className="font-display font-bold text-2xl sm:text-3xl mb-4"
                style={{ color: 'white', letterSpacing: '-0.02em' }}
              >
                Are you a woman working in AI?
              </h3>
              <p className="text-sm sm:text-base leading-relaxed mb-8 font-light mx-auto max-w-xl" style={{ color: 'rgba(255,255,255,0.7)' }}>
                Mentoring takes 30 minutes a month. Your story could be the reason a girl in Tier-2 India starts learning.
              </p>
              <a
                href="mailto:hey@herstack.org?subject=I want to be a HerStack mentor"
                className="btn-primary inline-flex items-center"
                style={{
                  background: btnHovered ? 'var(--purple-light)' : 'white',
                  color: 'var(--purple)',
                  transform: btnHovered ? 'translateY(-1px)' : 'none',
                }}
                onMouseEnter={() => setBtnHovered(true)}
                onMouseLeave={() => setBtnHovered(false)}
              >
                Apply to be a mentor →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
