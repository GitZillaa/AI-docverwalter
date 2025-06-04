# AI-docverwalter

🏗️ Projekt-Zusammenfassung (Stand jetzt)

✅ Frontend
React + Tailwind CSS

Datei-Upload, Dokumentenübersicht, Filter, Detailansicht, evtl. Chat-Interface

✅ Backend (Microservices-Architektur)
Node.js als Hauptdienst für Routing, Authentifizierung, API-Management

Python-Services für:

PDF-Handling (Extraktion)

KI-Verarbeitung (LLM, Klassifikation, Named Entity Recognition)

✅ KI / LLM
Eigener LLM (z. B. Mistral, LLaMA, Mixtral, etc.)

Lokal gehostet mit Ollama, lmstudio.ai oder eigener API-Anbindung

✅ Datenbank
PostgreSQL mit guter relationaler Modellierung

Vorteil: starke Abfragen, Referenzen, FTS (Full Text Search), JSON-Unterstützung

Alternativ: Supabase (falls gehostet & leicht verwaltbar sein soll)


# grundsätzliche struktur idee

1. Datei wird im Frontend hochgeladen → Node.js API empfängt
2. Node.js speichert PDF temporär → Übergibt an Python-Service
3. Python-Service (z. B. FastAPI):
   - Liest PDF aus
   - Sendet Text an eigenes LLM
   - Holt: Kategorie, Datum, Betrag, Firma, etc.
   - Gibt strukturierte Daten + neuen Dateinamen zurück
4. Node.js:
   - Benennt Datei um
   - Speichert alles in PostgreSQL
   - Antwort an Frontend

🔧 Microservices – Ideen für Aufteilung

#   Microservice	        Aufgabe	                                        Sprache

    Gateway/API 	        Zentrale Schnittstelle,                         Auth, Routing	Node.js
    PDF-Service	            Parsing, Umbenennung, Text extrahieren	        Python
    KI-Service	            Anbindung an LLM, Prompts, Klassifikation	    Python
    Datenbank-Service	    Verwaltung der Metadaten, Suche	                Node.js
    LLM-Service	            Lokaler LLM, Anfrageverarbeitung	            Python