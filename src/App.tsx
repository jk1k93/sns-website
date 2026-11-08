import './styles/index.scss'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { HomePage } from './pages/HomePage'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage'
import { TermsPage } from './pages/TermsPage'

// Vercel rewrites every path to index.html, so the page is picked here.
const path = window.location.pathname.replace(/\/+$/, '')

function App() {
  // The legal pages bring their own slim header and footer (LegalLayout).
  if (path === '/privacy-policy') return <PrivacyPolicyPage />
  if (path === '/terms') return <TermsPage />

  return (
    <div>
      <Header />
      <HomePage />
      <Footer />
    </div>
  )
}

export default App
