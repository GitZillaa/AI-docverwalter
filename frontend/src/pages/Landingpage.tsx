import { Link } from 'react-router-dom';
import bgImage from '../assets/dantenstromsortierer.png';

function LandingPage() {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Inhalt fix zentriert, nichts scrollt */}
      <div className="bg-black bg-opacity-60 p-6 rounded-lg shadow-lg text-center max-w-xl">
        <h1 className="text-4xl font-bold text-white mb-4">AI-Dokumentenverwalter</h1>
        <p className="text-white text-lg mb-6">
          Unser KI-System liest, kategorisiert und extrahiert Informationen aus deinen PDF-Dokumenten.
        </p>

        <Link to="/login">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
          >
            Jetzt einloggen
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
