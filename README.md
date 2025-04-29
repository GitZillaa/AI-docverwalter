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
    PDF-Service	            Parsing,Umbenennung, Text extrahieren	        Python
    KI-Service	            Anbindung an LLM, Prompts, Klassifikation	    Python
    Datenbank-Service	    Verwaltung der Metadaten, Suche	                Node.js
    LLM-Service	            Lokaler LLM, Anfrageverarbeitung	            Python

 ---------------------------------------------------------------------------------------------------------------

                PROMT    ----------
                        |
                        |
                        |

                        📝 Wiederanlaufhilfe für neuen Chat
Projektname:
AI-Dokumentenverwalter

Kurzbeschreibung:
Ich entwickle eine Plattform, auf der ich PDFs hochladen, automatisch auslesen, kategorisieren und wichtige Informationen extrahieren möchte. Die Daten sollen anschließend gespeichert und später abrufbar/abfragbar sein.

Aktueller Stand:

Frontend mit Vite + React + TypeScript + TailwindCSS ist fertig aufgesetzt.

Startseite mit Logo, Beschreibung und Upload-Button wurde bereits gebaut.

Branchstruktur vorhanden:

main

dev

feature/frontend-ts (erste Frontend-Version)

Technologien:

Frontend: Vite, React, TypeScript, Tailwind CSS

Backend (geplant): Node.js (Microservices-Architektur) + Python-Services

KI: Lokales LLM soll integriert werden

Datenbank: PostgreSQL (für strukturierte Speicherung und Kontextabfragen)

----------------------------------------------------------------------------------------------------------------

    🛠️ Aufgabenliste nach Bereichen
🎨 Frontend (React + Tailwind)
Upload-Button funktional machen (Datei auswählen und verarbeiten)

Hochgeladene PDF-Datei im Frontend als Vorschau anzeigen (PDF-Viewer)

Schöne Erfolgsmeldung nach Upload (Toast / Notification)

Liste aller hochgeladenen Dokumente als Tabelle oder Grid darstellen

Filterleiste einbauen (Suche nach Kategorie, Datum, Firma)

Dokument-Detailseite entwickeln (Metadaten + Download-Link)

Upload-Validierung (nur PDF zulassen, max. Größe prüfen)

Ladeanimation (Spinner) beim Upload einbauen

Mobile-First Anpassung (Responsives Layout testen und verbessern)

🖥️ Backend Node.js (API-Gateway)
Datei-Upload-Route anlegen (/api/upload)

Upload-Speicherung im temporären Ordner

API-Route zur Übergabe der Datei an den Parsing-Service

API-Route für "Dokumente abrufen" (GET /api/documents)

Authentifizierungsmiddleware vorbereiten (JWT oder Session)

Logging einbauen (für Uploads und Fehler)

🧠 Backend Python (Microservices)
Parsing-Service erstellen (mit FastAPI oder Flask)

PDF-Textauslese-Service bauen (pdfplumber oder PyMuPDF)

KI-Service aufbauen:

Text an eigenes LLM schicken

Kategorie, Firma, Betrag, Datum extrahieren

Neuen Dateinamen generieren basierend auf extrahierten Infos

Antwort an Node.js Gateway definieren (JSON-Response)

📚 Datenbank (PostgreSQL)
Tabellenstruktur erstellen (Dokumente-Tabelle)

Felder: ID, Originalname, Neuer Name, Kategorie, Datum, Betrag, Firma

Dokumente in die DB speichern nach erfolgreichem Upload

Dokumente nach Kriterien abrufbar machen (Kategorie, Zeitspanne, Firma)

Full-Text-Suche einbauen (z. B. nach Firmennamen oder Keywords)

Relation aufbauen für User → Dokumente (später für Multi-User-Funktion)

🤖 KI-Integration (LLM)
LLM lokal einrichten (z. B. Ollama + Mistral / Llama 3)

Prompt-Template definieren für Dokumentanalyse

Anbindung vom Python-KI-Service an lokales LLM

KI-Output strukturieren (klar definierte JSON-Rückgabe)

Evaluation einbauen: Prüfmechanismus, ob Antworten sinnvoll sind

🔒 Sicherheit / Auth / Sonstiges
Basis-Auth-System bauen (Registrieren, Login, geschützte Routen)

Upload-Sicherheit prüfen (MIME-Type, Antivirus-Scan optional)

Rate-Limiting / Upload-Limit setzen

Fehlerbehandlung und saubere API-Responses (Statuscodes etc.)

Vorbereitung auf Deployment (Dockerfiles für Microservices erstellen)