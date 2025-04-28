import './style.css';
import logo from './assets/dalle.jpg.webp';
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

      {/* Upload-Button */}
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
      >
        PDF hochladen
      </button>
    </div>
  );
}

export default App;
