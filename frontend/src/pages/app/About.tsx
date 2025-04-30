function AboutPage() {
    return (
      <div className="p-8 max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold">Über uns</h1>
        <p>
          Wir entwickeln ein KI-gestütztes System zur intelligenten Verwaltung von PDF-Dokumenten – von der Kategorisierung bis zur Abfrage.
        </p>
  
        <h2 className="text-2xl font-semibold">Team</h2>
        <ul className="list-disc pl-6">
          <li><strong>Marc :</strong> Backend & AI-Systeme</li>
          <li><strong>Marc :</strong> Frontend & UX/UI</li>
        </ul>
  
        <h2 className="text-2xl font-semibold">Roadmap</h2>
        <ul className="list-decimal pl-6 space-y-1">
          <li>PDF-Upload & Texterkennung</li>
          <li>Kategorisierung mit KI</li>
          <li>Datenbank-Anbindung</li>
          <li>Frontend-Dashboard mit Suche & Filter</li>
          <li>LLM-Chat-Integration</li>
        </ul>
      </div>
    );
  }
  
  export default AboutPage;
  