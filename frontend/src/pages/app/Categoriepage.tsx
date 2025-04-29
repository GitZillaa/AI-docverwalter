import { Link } from 'react-router-dom';

const categories = [
  'Rechnungen',
  'Verträge',
  'Angebote',
  'Briefe',
  'Sonstiges'
];

function CategoriesPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Kategorienübersicht</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {categories.map((category) => (
          <Link
            key={category}
            to={`/app/categories/${category.toLowerCase()}`}
            className="bg-blue-600 hover:bg-blue-700 text-white text-center font-semibold py-4 px-6 rounded-lg shadow-md transition"
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoriesPage;
