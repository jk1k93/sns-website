import { useEffect, type ReactNode } from 'react'
import logo from '../../assets/Vector_logo.png'
import '../../pages/legal.scss'

export const CONTACT_EMAIL = 'admin@turfranktechnologies.com'

type Section = { id: string; title: string }

type Props = {
  title: string
  lastUpdated: string
  intro: ReactNode
  sections: Section[]
  children: ReactNode
}

/**
 * Shell for the legal pages (privacy policy, terms). They are mostly opened from
 * the app's in-app browser on a phone, so they get a slim header and footer
 * instead of the marketing ones.
 */
export function LegalLayout({ title, lastUpdated, intro, sections, children }: Props) {
  useEffect(() => {
    document.title = `${title} — SportsNStats`
  }, [title])

  return (
    <div className="legal">
      <header className="legal__bar">
        <a href="/" className="legal__brand" aria-label="SportsNStats home">
          <img src={logo} alt="" />
          <span>SPORTSNSTATS</span>
        </a>
      </header>
      <main className="legal__inner">
        <header className="legal__hero">
          <span className="legal__eyebrow">Legal</span>
          <h1 className="legal__title">{title}</h1>
          <p className="legal__meta">Last updated {lastUpdated}</p>
          <p className="legal__intro">{intro}</p>
        </header>

        <nav className="legal__toc" aria-label="On this page">
          <span className="legal__toc-title">On this page</span>
          <ol>
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>{s.title}</a>
              </li>
            ))}
          </ol>
        </nav>

        {children}
      </main>
      <footer className="legal__footer">
        © {new Date().getFullYear()} TurfRank Technologies · <a href="/privacy-policy">Privacy Policy</a> ·{' '}
        <a href="/terms">Terms of Service</a>
      </footer>
    </div>
  )
}
