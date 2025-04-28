import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Home, Classique } from './pages';
// highlight-next-line
import { Layout } from './components/Layout/Layout'; // Import Layout
// highlight-remove-next-line
// import { Header, Footer } from './components'; // Header/Footer gérés par Layout

function App() {
  return (
    // highlight-next-line
    <Layout> {/* Utiliser Layout pour envelopper les routes */}
      {/* Le contenu principal est maintenant géré par Layout, mais les Routes définissent quelle page afficher */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classique" element={<Classique />} />
        {/* Other routes */}
      </Routes>
    </Layout>
  )
}

export default App
