import './styles/index.scss'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { HomePage } from './pages/HomePage'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage'

// Vercel rewrites every path to index.html, so the page is picked here.
const isPrivacyPolicy = window.location.pathname.replace(/\/+$/, '') === '/privacy-policy'

function App() {
  return (
    <div>
      <Header />
      {isPrivacyPolicy ? <PrivacyPolicyPage /> : <HomePage />}
      <Footer />
    </div>
  )
}

export default App
