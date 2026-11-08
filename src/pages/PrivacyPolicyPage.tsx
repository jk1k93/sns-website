import { useEffect } from 'react'
import logo from '../assets/Vector_logo.png'
import './privacy-policy.scss'

// Where people write for privacy questions and account deletion requests.
const CONTACT_EMAIL = 'admin@turfranktechnologies.com'
const LAST_UPDATED = '8 November 2026'

const SECTIONS = [
  { id: 'information-we-collect', title: 'Information we collect' },
  { id: 'how-we-use', title: 'How we use your information' },
  { id: 'what-others-see', title: 'What other people can see' },
  { id: 'sharing', title: 'Who we share it with' },
  { id: 'permissions', title: 'App permissions' },
  { id: 'retention', title: 'How long we keep it' },
  { id: 'delete-account', title: 'Deleting your account' },
  { id: 'your-rights', title: 'Your rights' },
  { id: 'security', title: 'Security' },
  { id: 'children', title: 'Children' },
  { id: 'changes', title: 'Changes to this policy' },
  { id: 'contact', title: 'Contact us' },
]

export function PrivacyPolicyPage() {
  useEffect(() => {
    document.title = 'Privacy Policy — SportsNStats'
  }, [])

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
          <h1 className="legal__title">Privacy Policy</h1>
          <p className="legal__meta">Last updated {LAST_UPDATED}</p>
          <p className="legal__intro">
            SportsNStats is a mobile app made by TurfRank Technologies (“we”, “us”) for running sports
            tournaments, scoring matches live and booking venues. This policy explains what information
            the app collects, why, who it is shared with, and the choices you have — including how to
            delete your account.
          </p>
        </header>

        <nav className="legal__toc" aria-label="On this page">
          <span className="legal__toc-title">On this page</span>
          <ol>
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>{s.title}</a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="information-we-collect" className="legal__section">
          <h2>1. Information we collect</h2>
          <h3>Information you give us</h3>
          <ul>
            <li>
              <strong>Phone number</strong> — used to sign you in with a one-time password (OTP). It is
              your account identifier.
            </li>
            <li>
              <strong>Profile details</strong> — your name, and optionally your email, gender, date of
              birth and profile picture.
            </li>
            <li>
              <strong>Sports details</strong> — for example your cricket playing role, batting and
              bowling hand, jersey name, number and size.
            </li>
            <li>
              <strong>Tournament and match data</strong> — tournaments, teams and entries you create or
              join, fixtures, and the scores recorded for matches you play in or score.
            </li>
            <li>
              <strong>Photos you upload</strong> — profile pictures, team logos and venue photos you
              choose from your gallery.
            </li>
            <li>
              <strong>Bookings</strong> — the venues, dates and time slots you book, and, if you list a
              venue, its details, pricing and availability.
            </li>
          </ul>
          <h3>Information collected automatically</h3>
          <ul>
            <li>
              <strong>Location</strong> — only while you are using the app and only if you allow it, to
              show sports venues and tournaments near you. We use it for that search; we do not track
              your location in the background.
            </li>
            <li>
              <strong>Push notification token</strong> — a device identifier that lets us send you
              notifications such as booking reminders, if you allow notifications.
            </li>
          </ul>
        </section>

        <section id="how-we-use" className="legal__section">
          <h2>2. How we use your information</h2>
          <ul>
            <li>To create your account and sign you in.</li>
            <li>To run tournaments: drawing fixtures, recording live scores, standings, leaderboards and awards.</li>
            <li>To show your player statistics and match history.</li>
            <li>To find nearby venues and tournaments, and to handle bookings and payments.</li>
            <li>To send notifications you have allowed, such as booking reminders.</li>
            <li>To keep the service secure, prevent abuse and fix problems.</li>
          </ul>
          <p>We do not sell your personal information, and we do not show ads.</p>
        </section>

        <section id="what-others-see" className="legal__section">
          <h2>3. What other people can see</h2>
          <p>
            SportsNStats is built around shared tournaments, so some information is visible to other
            users:
          </p>
          <ul>
            <li>
              Your <strong>name and profile picture</strong> appear in tournaments, teams, scorecards,
              leaderboards and awards you are part of.
            </li>
            <li>
              Your <strong>player statistics</strong> (for example runs, wickets and matches played) can be
              viewed by anyone using the app.
            </li>
            <li>
              Tournament organisers can find you by your <strong>phone number</strong> to add you to a team,
              and may see your phone number when they do.
            </li>
          </ul>
          <p>Your email, gender and date of birth are not shown to other users.</p>
        </section>

        <section id="sharing" className="legal__section">
          <h2>4. Who we share it with</h2>
          <p>We share information only with service providers that help us run the app:</p>
          <ul>
            <li><strong>Cloudflare</strong> — storage of uploaded photos.</li>
            <li><strong>Render</strong> and <strong>Neon</strong> — hosting of our servers and database.</li>
            <li><strong>Expo</strong> and <strong>Google Firebase Cloud Messaging</strong> — delivery of push notifications.</li>
            <li><strong>Google Maps Platform</strong> — city and place search.</li>
          </ul>
          <p>
            These providers process data only to provide their service to us. We may also disclose
            information if required by law or to protect the rights and safety of our users.
          </p>
        </section>

        <section id="permissions" className="legal__section">
          <h2>5. App permissions</h2>
          <ul>
            <li><strong>Location (while using the app)</strong> — to show nearby venues and tournaments.</li>
            <li><strong>Photos</strong> — to pick a profile picture, team logo or venue photo. Only the images you choose are uploaded.</li>
            <li><strong>Notifications</strong> — for booking reminders and updates.</li>
          </ul>
          <p>You can turn any of these off at any time in your phone’s settings; the rest of the app keeps working.</p>
        </section>

        <section id="retention" className="legal__section">
          <h2>6. How long we keep it</h2>
          <p>
            We keep your information while your account is active. When you delete your account, we
            remove your personal details as described below. Booking and payment records are kept for as
            long as tax and accounting law requires.
          </p>
        </section>

        <section id="delete-account" className="legal__section legal__section--highlight">
          <h2>7. Deleting your account</h2>
          <p>You can delete your SportsNStats account at any time.</p>
          <h3>In the app</h3>
          <ol>
            <li>Open the <strong>Profile</strong> tab.</li>
            <li>Tap <strong>Delete Account</strong>.</li>
            <li>Read the summary, tick the confirmation box and tap <strong>Delete my account</strong>.</li>
          </ol>
          <h3>Without the app</h3>
          <p>
            Email <a href={`mailto:${CONTACT_EMAIL}?subject=Delete%20my%20SportsNStats%20account`}>{CONTACT_EMAIL}</a>{' '}
            with the subject “Delete my account” and the phone number registered with your account. We may
            ask you to confirm that the number is yours, and will delete the account within 30 days.
          </p>
          <h3>What is deleted</h3>
          <ul>
            <li>Your name, phone number, email, gender, date of birth and profile picture.</li>
            <li>Your sports profile and push notification tokens.</li>
            <li>Your access to any venues you manage.</li>
          </ul>
          <h3>What is kept</h3>
          <ul>
            <li>
              Matches you played in stay in other people’s tournament records and scorecards, shown as
              “Deleted user”, so their results remain correct.
            </li>
            <li>Booking and payment records, as required for tax and accounting.</li>
          </ul>
          <p>You can sign up again later with the same phone number; it will be a new, empty account.</p>
        </section>

        <section id="your-rights" className="legal__section">
          <h2>8. Your rights</h2>
          <p>
            You can see and correct your profile details in the app at any time, and delete your account
            as described above. You can also contact us to ask for a copy of your information, to correct
            it, or to raise a concern about how it is handled. Under India’s Digital Personal Data
            Protection Act, 2023 you may also nominate someone to exercise these rights on your behalf.
          </p>
        </section>

        <section id="security" className="legal__section">
          <h2>9. Security</h2>
          <p>
            All information sent between the app and our servers is encrypted in transit (HTTPS). Access to
            our systems is limited to people who need it to run the service. No system is perfectly secure,
            but we work to protect your information and will tell you if a breach affects you.
          </p>
        </section>

        <section id="children" className="legal__section">
          <h2>10. Children</h2>
          <p>
            SportsNStats is not directed at children under 13. If you believe a child has created an
            account, contact us and we will delete it.
          </p>
        </section>

        <section id="changes" className="legal__section">
          <h2>11. Changes to this policy</h2>
          <p>
            We may update this policy as the app changes. We will change the “Last updated” date above,
            and tell you in the app if the changes are significant.
          </p>
        </section>

        <section id="contact" className="legal__section">
          <h2>12. Contact us</h2>
          <p>
            For any privacy question or request, write to TurfRank Technologies at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>
        </section>
      </main>
      <footer className="legal__footer">
        © {new Date().getFullYear()} TurfRank Technologies · <a href="/">turfranktechnologies.com</a>
      </footer>
    </div>
  )
}
