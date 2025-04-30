import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 p-4">

      <Link to="/login">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
        >
          Jetzt einloggen
        </button>
      </Link>
    </div>
  );
}

export default LandingPage;
