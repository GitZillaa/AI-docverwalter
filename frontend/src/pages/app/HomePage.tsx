function HomePage() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
        <h1 className="text-4xl font-bold mb-6">Dein Dokumentenbereich</h1>
        <p className="text-gray-700 text-center max-w-xl">
          Willkommen zurück! Hier kannst du deine PDF-Dokumente hochladen, kategorisieren und verwalten.
        </p>
        {/* Beschreibung */}

{/* Upload-Button */}
<button
  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
>
  PDF hochladen
</button>
      </div>
    );
  }
  
  export default HomePage;
  