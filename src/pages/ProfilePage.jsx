// src/pages/ProfilePage.jsx
export default function ProfilePage() {
  return (
    <div className="p-4 md:p-8 pb-20 md:pb-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
          Profile Pengguna
        </h1>

        {/* Card Profile */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Foto Profil */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Foto Profil"
            className="w-28 h-28 rounded-full border-4 border-blue-500 object-cover"
          />

          {/* Info Pengguna */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold text-gray-800">
              Cielo Reksana Jaya
            </h2>
            <p className="text-gray-600 text-lg">NIM: 21120123130092</p>
            <p className="text-gray-500 mt-2">
              Mahasiswa Teknik Komputer - Universitas Diponegoro
            </p>
            
          </div>
        </div>
        <div>
          <p>.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Foto Profil */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Foto Profil"
            className="w-28 h-28 rounded-full border-4 border-blue-500 object-cover"
          />

          {/* Info Pengguna */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold text-gray-800">
              Cielo Reksana Jaya
            </h2>
            <p className="text-gray-600 text-lg">NIM: 21120123130092</p>
            <p className="text-gray-500 mt-2">
              Mahasiswa Teknik Komputer - Universitas Diponegoro
            </p>
          </div>
          
        </div>
          
          

        {/* Konten tambahan */}
        <div className="bg-white rounded-lg shadow-md p-6 mt-6">
          <p className="text-gray-600">
            Konten halaman profile akan diisi di sini...
          </p>
        </div>
      </div>
    </div>
  );
}
