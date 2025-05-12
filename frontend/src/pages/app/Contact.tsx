function ContactPage() {
    return (
      <div className="p-8 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Kontakt</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input type="text" className="w-full p-2 border rounded" required />
          </div>
          <div>
            <label className="block text-gray-700">E-Mail</label>
            <input type="email" className="w-full p-2 border rounded" required />
          </div>
          <div>
            <label className="block text-gray-700">Grund</label>
            <textarea className="w-full p-2 border rounded" rows={4} required></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            Absenden
          </button>
        </form>
      </div>
    );
  }
  
  export default ContactPage;
  