import { FaStar, FaUserCircle } from 'react-icons/fa';
import Image from 'next/image';
import Footer from '../components/navbar';

const AllFeedback = () => {
  const users = [
    {
      name: "Jung Jamal",
      feedback: "Acaranya sangat menarik. Membuka wawasan saya banget! Terima kasih!",
      images: ["/perkara1.svg", "/perkara2.svg", "/perkara3.svg", "/perkara4.svg"]
    },
    {
      name: "Januar Lim",
      feedback: "Pengalaman saya sangat luar biasa! Banyak hal baru yang saya pelajari.",
      images: ["/perkara4.svg", "/perkara3.svg", "/perkara2.svg", "/perkara1.svg"]
    },
    {
      name: "Anwar Fauzi",
      feedback: "Acara ini sangat bermanfaat dan penuh inspirasi.",
      images: ["/perkara1.svg", "/perkara4.svg", "/perkara3.svg", "/perkara2.svg"]
    },
    {
      name: "Dina Rahayu",
      feedback: "Sangat informatif dan menyenangkan. Saya belajar banyak hal baru.",
      images: ["/perkara2.svg", "/perkara1.svg", "/perkara4.svg", "/perkara3.svg"]
    },
    {
      name: "Ika Septiani",
      feedback: "Kegiatan ini sangat menyenangkan. Saya mendapatkan wawasan yang luas.",
      images: ["/perkara3.svg", "/perkara4.svg", "/perkara1.svg", "/perkara2.svg"]
    }
  ];

  return (
    <div className="flex flex-col items-center justify-start min-h-screen shadow-lg bg-white px-4 border border-gray-300 pb-16">
      {/* Title */}
      <div className="w-[393px] border-b-2 border-gray-300 p-0 mb-0 shadow sticky top-0 bg-white z-10">
        <h1 className="text-center text-2xl font-bold text-black mt-4">Feedback</h1>
        <h2 className="text-center text-xl font-semibold text-black mb-4">EFC CAMPUS PARMAD</h2>
      </div>

      {users.map((user, index) => (
        <div key={index} className="flex flex-col w-full mt-4 px-4 border-b-2 border-gray-200 pb-4">
          {/* Profile & Name */}
          <div className="ml-4 flex items-center gap-2">
            <FaUserCircle className="text-cyan-600 text-4xl" />
            <div>
              <p className="text-base text-black font-bold">{user.name}</p>
              {/* Rating */}
              <div className="flex items-center mt-1">
                {Array(5)
                  .fill(null)
                  .map((_, starIndex) => (
                    <FaStar key={starIndex} className="text-yellow-500 text-lg" />
                  ))}
              </div>
            </div>
          </div>

          {/* Review */}
          <p className="mt-2 text-sm text-gray-600 px-4">{user.feedback}</p>

          {/* Kolase Foto */}
          <div className="grid grid-cols-2 gap-2 mt-2 px-4">
            {user.images.map((src, imgIndex) => (
              <div key={imgIndex} className="relative w-full h-32 overflow-hidden">
                <Image
                  src={src}
                  alt={`Feedback ${imgIndex + 1}`}
                  width={320}
                  height={200}
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      <Footer />
    </div>
  );
};

export default AllFeedback;
