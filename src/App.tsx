import './styles/index.scss'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { HomePage } from './pages/HomePage'

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <Footer />
    </div>
  )
}

export default App
