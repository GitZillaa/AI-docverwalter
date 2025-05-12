function UploadPage() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
        <h2 className="text-3xl font-bold mb-4">PDF-Upload & Analyse</h2>
  
        <div className="w-full max-w-lg space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Datei(en) auswählen:</label>
            <input type="file" multiple className="w-full p-2 border rounded-md" />
          </div>
  
          <div>
            <label className="block text-gray-700 mb-2">Zielpfad eingeben:</label>
            <input
              type="text"
              placeholder="/zielordner/pdfs"
              className="w-full p-2 border rounded-md"
            />
          </div>
  
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-md w-full transition"
          >
            Analyse starten
          </button>
        </div>
      </div>
    );
  }
  
  export default UploadPage;
  