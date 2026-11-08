import './styles/index.scss'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { HomePage } from './pages/HomePage'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage'

// Vercel rewrites every path to index.html, so the page is picked here.
const isPrivacyPolicy = window.location.pathname.replace(/\/+$/, '') === '/privacy-policy'

function App() {
  // The policy is mostly read inside the app's in-app browser, on a phone, so
  // it has its own slim header and footer instead of the marketing ones.
  if (isPrivacyPolicy) return <PrivacyPolicyPage />

  return (
    <div>
      <Header />
      <HomePage />
      <Footer />
    </div>
  )
}

export default App
