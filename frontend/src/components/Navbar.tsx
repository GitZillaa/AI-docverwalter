import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50 h-16 flex items-center px-6 justify-between">
      <div className="font-bold text-xl text-blue-700">AI-Dokumentenverwalter</div>
      <div className="space-x-4 text-sm text-gray-700">
        <Link to="/" className="hover:underline">Start</Link>
        <Link to="/about" className="hover:underline">Über uns</Link>
        <Link to="/contact" className="hover:underline">Kontakt</Link>
        <Link to="/upload" className="hover:underline">Upload</Link>
        <Link to="/categories" className="hover:underline">Kategorien</Link>
        <Link to="/login" className="hover:underline text-blue-600 font-semibold">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
