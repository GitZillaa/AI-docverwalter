import './style.css';
import logo from './assets/dalle.jpg.webp';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landingpage';
import LoginPage from './pages/Loginpage';
import PrivateRoute from './components/Privateroute';
import HomePage from './pages/app/HomePage';
import UploadPage from './pages/app/Uploadpage';
import CategoriesPage from './pages/app/Categoriepage';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      {/* Logo */}
      <div className="mb-6">
        <img
          src={logo}   // Platzhalter – hier dein Logo rein!
          alt="Logo"
          className="w-32 h-32 object-contain rounded-full shadow-lg"
        />
      </div>

          {/* Titel */}
          <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
            AI-Dokumentenverwalter
          </h1>

          {/* Beschreibung */}
          <p className="text-gray-600 text-lg max-w-xl text-center mb-6">
            Organisiere deine PDF-Dokumente automatisch. Unser KI-gestütztes System liest, kategorisiert und extrahiert wichtige Informationen für dich.
          </p>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/app" element={<PrivateRoute />}>
         
            <Route path="home" element={<HomePage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="upload" element={<UploadPage />} />
            <Route path="categories" element={<CategoriesPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
