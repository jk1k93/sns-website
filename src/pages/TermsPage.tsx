import { CONTACT_EMAIL, LegalLayout } from '../components/layout/LegalLayout'

const LAST_UPDATED = '8 November 2026'

const SECTIONS = [
  { id: 'acceptance', title: 'Accepting these terms' },
  { id: 'eligibility', title: 'Who can use SportsNStats' },
  { id: 'account', title: 'Your account' },
  { id: 'tournaments', title: 'Tournaments and scoring' },
  { id: 'content', title: 'Your content' },
  { id: 'acceptable-use', title: 'Acceptable use' },
  { id: 'bookings', title: 'Venue bookings' },
  { id: 'fees', title: 'Fees and payments' },
  { id: 'third-parties', title: 'Third-party services' },
  { id: 'availability', title: 'Changes to the service' },
  { id: 'disclaimers', title: 'Disclaimers' },
  { id: 'liability', title: 'Limitation of liability' },
  { id: 'indemnity', title: 'Indemnity' },
  { id: 'termination', title: 'Suspension and deletion' },
  { id: 'law', title: 'Governing law' },
  { id: 'changes', title: 'Changes to these terms' },
  { id: 'contact', title: 'Contact and grievances' },
]

export function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      lastUpdated={LAST_UPDATED}
      sections={SECTIONS}
      intro={
        <>
          These terms are an agreement between you and TurfRank Technologies (“we”, “us”), the maker of
          the SportsNStats app. They cover how you may use the app to run tournaments, score matches and
          book venues. Please read them together with our <a href="/privacy-policy">Privacy Policy</a>.
        </>
      }
    >
      <section id="acceptance" className="legal__section">
        <h2>1. Accepting these terms</h2>
        <p>
          By creating an account or using SportsNStats, you agree to these terms. If you do not agree,
          please do not use the app.
        </p>
      </section>

      <section id="eligibility" className="legal__section">
        <h2>2. Who can use SportsNStats</h2>
        <p>
          You must be at least 13 years old to use SportsNStats. If you are under 18, you may use it only
          with the permission and supervision of a parent or guardian, who agrees to these terms on your
          behalf.
        </p>
      </section>

      <section id="account" className="legal__section">
        <h2>3. Your account</h2>
        <ul>
          <li>You sign in with your own mobile number. Use only a number that belongs to you.</li>
          <li>Keep your profile details accurate, and use your real name so teammates and organisers can find you.</li>
          <li>You are responsible for what happens on your account. Do not share your one-time passwords with anyone.</li>
          <li>One person, one account. Do not create accounts for other people without their permission.</li>
        </ul>
      </section>

      <section id="tournaments" className="legal__section">
        <h2>4. Tournaments and scoring</h2>
        <p>
          SportsNStats is a tool for organising sports. We do not organise, run or referee the tournaments
          and matches created in the app.
        </p>
        <ul>
          <li>
            <strong>Organisers</strong> are responsible for their tournaments: the rules, the teams and
            players they add, entry fees, prizes, schedules, and any arrangements with venues and
            participants.
          </li>
          <li>
            <strong>Scores</strong> are entered by the people scoring each match. Results, standings,
            leaderboards, awards and player statistics are worked out from what was entered, so they are
            only as accurate as that scoring.
          </li>
          <li>
            Only add a player to a team with their agreement. Players can see the tournaments they have
            been added to.
          </li>
        </ul>
      </section>

      <section id="content" className="legal__section">
        <h2>5. Your content</h2>
        <p>
          You keep ownership of what you put into SportsNStats — your profile, photos, team logos,
          tournament details and scores (“your content”). You give us a non-exclusive, royalty-free
          licence to store, display and process your content so we can run the app, for example to show
          your name in a scorecard or your stats on a leaderboard. This licence ends when your content is
          deleted, except for match records that stay in other people’s tournaments as described in our
          Privacy Policy.
        </p>
        <p>
          Only upload content you have the right to use. We may remove content that breaks these terms.
        </p>
      </section>

      <section id="acceptable-use" className="legal__section">
        <h2>6. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>pretend to be someone else, or sign in with a phone number that is not yours;</li>
          <li>upload content that is offensive, hateful, sexually explicit, defamatory, or infringes someone else’s rights;</li>
          <li>harass, threaten or abuse other users;</li>
          <li>deliberately enter false scores or results to mislead others;</li>
          <li>use the app for gambling, betting or match-fixing;</li>
          <li>list a venue you do not own or have the right to manage;</li>
          <li>copy, scrape or resell data from the app, or try to break, overload or reverse-engineer it;</li>
          <li>use the app for anything illegal.</li>
        </ul>
      </section>

      <section id="bookings" className="legal__section">
        <h2>7. Venue bookings</h2>
        <p>
          SportsNStats lets you find venues and book time slots that venue owners have listed. The venue
          owner provides the facility and is responsible for it — its condition, safety, staff and for
          honouring your booking. The price, and any cancellation or refund terms, are shown before you
          confirm a booking.
        </p>
        <p>
          If you list a venue, you confirm that you own or are authorised to manage it, that your
          listing, prices and availability are accurate, and that you will honour bookings made through
          the app.
        </p>
      </section>

      <section id="fees" className="legal__section">
        <h2>8. Fees and payments</h2>
        <p>
          Creating an account and running tournaments is currently free. If we introduce paid features
          or booking fees, we will show the price clearly before you pay. Payments are handled by a
          third-party payment provider, under its own terms.
        </p>
      </section>

      <section id="third-parties" className="legal__section">
        <h2>9. Third-party services</h2>
        <p>
          The app relies on services from other companies, such as maps, payments and notifications.
          Those services are governed by their own terms, and we are not responsible for them.
        </p>
      </section>

      <section id="availability" className="legal__section">
        <h2>10. Changes to the service</h2>
        <p>
          We are constantly improving SportsNStats, so features may change, be added or be removed. We
          aim to keep the app available, but it may sometimes be unavailable for maintenance or for
          reasons outside our control.
        </p>
      </section>

      <section id="disclaimers" className="legal__section">
        <h2>11. Disclaimers</h2>
        <p>
          SportsNStats is provided “as is” and “as available”. To the extent the law allows, we make no
          promises that it will be error-free or uninterrupted, or that scores, statistics or listings
          are accurate.
        </p>
        <p>
          Sport carries a risk of injury. You take part in matches and use venues at your own risk; we
          are not responsible for injuries, losses or disputes that arise at tournaments, matches or
          venues.
        </p>
      </section>

      <section id="liability" className="legal__section">
        <h2>12. Limitation of liability</h2>
        <p>
          To the extent the law allows, TurfRank Technologies is not liable for any indirect, incidental
          or consequential loss, or for loss of data, profits or opportunities, arising from your use of
          SportsNStats. Our total liability to you for any claim is limited to the amount you paid us in
          the 12 months before the claim arose. Nothing in these terms limits liability that cannot be
          limited by law.
        </p>
      </section>

      <section id="indemnity" className="legal__section">
        <h2>13. Indemnity</h2>
        <p>
          You agree to compensate TurfRank Technologies for claims, losses and costs that arise because
          you broke these terms or the law, or because of content you uploaded.
        </p>
      </section>

      <section id="termination" className="legal__section">
        <h2>14. Suspension and deletion</h2>
        <p>
          You can stop using SportsNStats and delete your account at any time from Profile → Delete
          Account, as described in our <a href="/privacy-policy#delete-account">Privacy Policy</a>.
        </p>
        <p>
          We may suspend or close an account that breaks these terms, puts other users at risk, or where
          the law requires it. Where reasonable, we will tell you why.
        </p>
      </section>

      <section id="law" className="legal__section">
        <h2>15. Governing law</h2>
        <p>
          These terms are governed by the laws of India. Any dispute will be handled by the courts of
          India, and we will first try to resolve it with you informally.
        </p>
      </section>

      <section id="changes" className="legal__section">
        <h2>16. Changes to these terms</h2>
        <p>
          We may update these terms as the app changes. We will change the “Last updated” date above and
          tell you in the app about significant changes. If you keep using SportsNStats after a change,
          you accept the updated terms.
        </p>
      </section>

      <section id="contact" className="legal__section">
        <h2>17. Contact and grievances</h2>
        <p>
          For questions about these terms, or to report content or a user that breaks them, write to
          TurfRank Technologies at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We will
          acknowledge complaints within 24 hours and aim to resolve them within 15 days.
        </p>
      </section>
    </LegalLayout>
  )
}
