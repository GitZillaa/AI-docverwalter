import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-700 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold">
          AI-Dokumentenverwalter
        </Link>
        <nav className="space-x-6">
          <Link to="/" className="hover:underline">Start</Link>
          <Link to="/about" className="hover:underline">Über uns</Link>
          <Link to="/contact" className="hover:underline">Kontakt</Link>
          <Link to="/upload" className="hover:underline">Dateien analysieren</Link>
          <Link to="/categories" className="hover:underline">Kategorien</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;

