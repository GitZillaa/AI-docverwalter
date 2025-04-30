import './style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import LandingPage from './pages/Landingpage';
import LoginPage from './pages/Loginpage';
import ContactPage from './pages/app/Contact';
import AboutPage from './pages/app/About';
import UploadPage from './pages/app/Uploadpage';
import CategoriesPage from './pages/app/Categoriepage';

import PrivateRoute from './components/Privateroute';
import HomePage from './pages/app/HomePage';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-20">
        <Routes>
          {/* Öffentliche Routen */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/categories" element={<CategoriesPage />} />

          {/* Geschützte App-Routen */}
          <Route path="/app" element={<PrivateRoute />}>
            <Route path="home" element={<HomePage />} />
          </Route>

          {/* Fallback 404 */}
          <Route path="*" element={<div className="text-center p-8">404 – Seite nicht gefunden</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
