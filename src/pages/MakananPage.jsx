// src/pages/MakananPage.jsx
import { useState, useEffect } from 'react';
import { ResepMakanan } from '../data/makanan';
import { ResepMinuman } from '../data/minuman';
import RecipeGrid from '../components/makanan/RecipeGrid';

export default function MakananPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  // Gabungkan semua data makanan dan minuman
  const allRecipes = [
    ...Object.values(ResepMakanan.resep).map(item => ({
      ...item,
      category: 'Makanan',
    })),
    ...Object.values(ResepMinuman.resep).map(item => ({
      ...item,
      category: 'Minuman',
    })),
  ];

  useEffect(() => {
    const filter = () => {
      if (searchQuery.trim() === '') {
        setFilteredRecipes(allRecipes);
      } else {
        const lowercasedQuery = searchQuery.toLowerCase();
        const filtered = allRecipes.filter(recipe =>
          recipe.name.toLowerCase().includes(lowercasedQuery)
        );
        setFilteredRecipes(filtered);
      }
      setCurrentPage(1); // reset ke halaman 1 saat cari
    };
    filter();
  }, [searchQuery]);

  // Hitung jumlah halaman
  const totalPages = Math.ceil(filteredRecipes.length / itemsPerPage);

  // Ambil data sesuai halaman aktif
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentRecipes = filteredRecipes.slice(indexOfFirstItem, indexOfLastItem);

  // Fungsi navigasi halaman
  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 pb-20 md:pb-8">
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
          Daftar Resep Makanan & Minuman
        </h1>

        {/* 🔍 Search bar */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Cari makanan atau minuman..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        {/* Grid Resep */}
        <RecipeGrid recipes={currentRecipes} />

        {/* Pagination Controls */}
        {filteredRecipes.length > itemsPerPage && (
          <div className="flex justify-center items-center mt-10 gap-4">
            <button
              onClick={goToPrevPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg shadow ${
                currentPage === 1
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              ← Sebelumnya
            </button>

            <span className="text-gray-700">
              Halaman {currentPage} dari {totalPages}
            </span>

            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg shadow ${
                currentPage === totalPages
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              Selanjutnya →
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
