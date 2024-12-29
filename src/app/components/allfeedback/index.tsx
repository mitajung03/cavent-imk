import { FaStar, FaUserCircle, FaHeart, FaComment } from 'react-icons/fa';
import Image from 'next/image';
import Footer from '../../components/navbar';

interface UserFeedback {
  name: string;
  feedback: string;
  images: string[];
}

interface AllFeedbackProps {
  posterSrc: string;
  posterTitle: string;
  likeCount: number;
  commentCount: number;
  description: string;
  postTime: string;
  users: UserFeedback[];
}

const AllFeedback = ({
  posterSrc,
  posterTitle,  // Menggunakan prop posterTitle
  likeCount,
  commentCount,
  description,
  postTime,
  users,
}: AllFeedbackProps) => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen shadow-lg bg-white px-4 border border-gray-300 pb-16">
      {/* Title */}
      <div className="w-[393px] border-b-2 border-gray-300 p-0 mb-0 shadow sticky top-0 bg-white z-10">
        <h1 className="text-center text-2xl font-bold text-black mt-4">Feedback</h1>
        <h2 className="text-center text-xl font-semibold text-black mb-4">{posterTitle}</h2>
      </div>

      {/* Poster Section */}
      <div className="w-full flex flex-col items-center my-4">
        <Image
          src={posterSrc}
          alt="Poster"
          width={350}
          height={500}
          objectFit="cover"
        />

        {/* Like, Comment, Description, and Time */}
        <div className="mt-4 w-full px-4">
          <div className="flex gap-4 mb-4 justify-start">
            <button className="text-gray-600 hover:text-cyan-600 flex items-center">
              <FaHeart className="w-5 h-5 mr-2" /> {likeCount}
            </button>
            <button className="text-gray-600 hover:text-cyan-600 flex items-center">
              <FaComment className="w-5 h-5 mr-2" /> {commentCount}
            </button>
          </div>
          <p className="text-sm text-gray-700 text-left mb-2">
            {description}
          </p>
          <p className="text-xs text-gray-500 text-left">{postTime}</p>
        </div>
      </div>

      {/* Feedback List */}
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