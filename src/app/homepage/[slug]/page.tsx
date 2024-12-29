'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaHeart, FaComment } from 'react-icons/fa';
import Navbar from '../../components/navbar';

const eventsData = {
  dkv: {
    eventsTop: [
      {
        id: 1,
        image: '/rekreasi-dkv.svg',
        owner: 'rupakapalaparamadina',
        profilePic: '/rupakapala.svg',
        email: 'rupakapala@paramadina.ac.id',
      },
    ],
    eventsBottom: [
      {
        id: 6,
        image: '/rekreasi-dkv.svg',
        owner: 'rupakapalaparamadina',
        profilePic: '/rupakapala.svg',
        email: 'rupakapala@paramadina.ac.id',
        description: 'Terima kasih kepada seluruh peserta yang telah mengikuti acara kami!❤️',
        postTime: '1 days ago',
        likeCount: 200,
        commentCount: 60,
      },
    ],
  },
  ti: {
    eventsTop: [
      {
        id: 3,
        image: '/evos-ti.svg',
        owner: 'himtiparamadina',
        profilePic: '/himti.svg',
        email: 'himti@paramadina.ac.id',
      },
    ],
    eventsBottom: [
      {
        id: 4,
        image: '/evos-ti.svg',
        owner: 'himtiparamadina',
        profilePic: '/himti.svg',
        email: 'himti@paramadina.ac.id',
        description: 'Terima kasih kepada seluruh peserta yang telah mengikuti acara kami!❤️',
        postTime: '1 days ago',
        likeCount: 200,
        commentCount: 60,
      },
    ],
  },
  mene: {
    eventsTop: [
      {
        id: 5,
        image: '/revisi-mene.svg',
        owner: 'himamenparamadina',
        profilePic: '/himamen.svg',
        email: 'himamen@paramadina.ac.id',
      },
    ],
    eventsBottom: [
      {
        id: 5,
        image: '/revisi-mene.svg',
        owner: 'himamenparamadina',
        profilePic: '/himamen.svg',
        email: 'himamen@paramadina.ac.id',
        description: 'Terima kasih kepada seluruh peserta yang telah mengikuti acara kami! See u in next event 🤍💚',
        postTime: '2 days ago',
        likeCount: 180,
        commentCount: 50,
      },
    ],
  },
  paramadina: {
    eventsTop: [
      {
        id: 7,
        image: '/kuliah-kebangsaan-paramadina.svg',
        owner: 'universitas_paramadina',
        profilePic: '/paramadina.svg',
        email: 'info@paramadina.ac.id',
      },
    ],
    eventsBottom: [
      {
        id: 8,
        image: '/kuliah-kebangsaan-paramadina.svg',
        owner: 'universitas_paramadina',
        profilePic: '/paramadina.svg',
        email: 'info@paramadina.ac.id',
        description: 'A great event organized by Paramadina! 🎉',
        postTime: '3 days ago',
        likeCount: 100,
        commentCount: 30,
      },
    ],
  },
  dp: {
    eventsTop: [
      {
        id: 9,
        image: '/perkara-dp.svg',
        owner: 'inprodesparamadina',
        profilePic: '/inprodes.svg',
        email: 'inprodes@paramadina.ac.id',
      },
    ],
    eventsBottom: [
      {
        id: 10,
        image: '/perkara-dp.svg',
        owner: 'inprodesparamadina',
        profilePic: '/inprodes.svg',
        email: 'inprodes@paramadina.ac.id',
        description: 'DP Department has a lot of exciting events! 💡',
        postTime: '5 days ago',
        likeCount: 150,
        commentCount: 45,
      },
    ],
  },
  ikom: {
    eventsTop: [
      {
        id: 11,
        image: '/batikday-ikom.svg',
        owner: 'komikparamadina',
        profilePic: '/komik.svg',
        email: 'komik@paramadina.ac.id',
      },
    ],
    eventsBottom: [
      {
        id: 12,
        image: '/batikday-ikom.svg',
        owner: 'komikparamadina',
        profilePic: '/komik.svg',
        email: 'komik@paramadina.ac.id',
        description: 'Innovative ideas and events from the IKom department! 🚀',
        postTime: '7 days ago',
        likeCount: 250,
        commentCount: 75,
      },
    ],
  },
  hi: {
    eventsTop: [
      {
        id: 13,
        image: '/lsmun-hi.svg',
        owner: 'himahiparamadina',
        profilePic: '/himahi.svg',
        email: 'himamen@paramadina.ac.id',
      },
    ],
    eventsBottom: [
      {
        id: 14,
        image: '/lsmun-hi.svg',
        owner: 'himahiparamadina',
        profilePic: '/himahi.svg',
        email: 'himamen@paramadina.ac.id',
        description: 'Exciting events hosted by the HI department! 🌍',
        postTime: '8 days ago',
        likeCount: 300,
        commentCount: 90,
      },
    ],
  },
  dkm: {
    eventsTop: [
      {
        id: 15,
        image: '/green-campus-dkm.svg',
        owner: 'dkmparamadina',
        profilePic: '/dkm.svg',
        email: 'dkm@paramadina.ac.id',
      },
    ],
    eventsBottom: [
      {
        id: 16,
        image: '/green-campus-dkm.svg',
        owner: 'dkmparamadina',
        profilePic: '/dkm.svg',
        email: 'dkm@paramadina.ac.id',
        description: 'Join the DKM department for meaningful events! 🙏',
        postTime: '10 days ago',
        likeCount: 350,
        commentCount: 110,
      },
    ],
  },
};

const Category = ({ params }: { params: { slug: string } }) => {
    const [eventsTop, setEventsTop] = useState([]);
    const [eventsBottom, setEventsBottom] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('ALL');
    const router = useRouter();
  
    const categories = ['ALL', 'PARAMADINA', 'DKV', 'TI', 'DP', 'MENE', 'IKOM', 'HI', 'DKM'];
    const slug = params.slug;
  
    useEffect(() => {
      if (eventsData[slug]) {
        setEventsTop(eventsData[slug].eventsTop);
        setEventsBottom(eventsData[slug].eventsBottom);
      }
    }, [slug]);
  
    return (
      <div className="flex flex-col items-center justify-start shadow-xl bg-white px-4 border border-gray-300 pb-16">
        {/* Logo Cavent */}
        <div className="w-full flex justify-center mb-6 mt-4">
          <Image
            src="/logo.svg"
            alt="Cavent Logo"
            width={110}
            height={110}
            className="object-contain"
          />
        </div>
  
        {/* Header */}
        <div className="w-full max-w-xs mb-6">
          <h1 className="text-3xl font-bold text-center text-cyan-600">Halo, Venters!</h1>
          <p className="text-center text-gray-600">Berikut adalah acara yang tersedia di kategori {slug}</p>
        </div>
  
        {/* Kategori Filter (Horizontal Scrollable) */}
        <div className="w-full overflow-x-auto mb-6">
          <div className="flex gap-4 justify-start px-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  router.push(`/homepage/${category.toLowerCase()}`);
                }}
                className={`flex-shrink-0 px-4 py-2 rounded-lg font-medium ${selectedCategory === category ? 'bg-cyan-600 text-white' : 'bg-white border border-gray-400 text-gray-800 hover:bg-gray-100'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
  
        {/* Horizontal Slider */}
        <div className="w-full mb-8">
          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={1}
            navigation
            className="swiper-container"
          >
            {eventsTop.map((event) => (
              <SwiperSlide key={event.id}>
                <div className="relative w-full h-[300px] bg-white overflow-hidden shadow-md cursor-pointer">
                  <Image
                    src={event.image}
                    alt="event image"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-100">
                    <Image
                      src={event.profilePic}
                      alt={event.owner}
                      width={48}
                      height={48}
                      className="cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">@{event.owner}</p>
                    <p className="text-xs text-gray-500">{event.email}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
  
        {/* Vertical Content */}
        <div className="w-full max-w-xs">
          <h2 className="text-xl font-bold text-center text-gray-800">Event yang telah berlalu</h2>
          <h3 className="text-sm text-center text-sky-300 mb-4">Yuk lihat keseruannya disini!</h3>
          <div className="overflow-y-auto">
            {eventsBottom.map((event) => (
              <div key={event.id} className="relative w-full bg-white mb-4 overflow-hidden shadow-md">
                <div className="flex items-center p-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-100">
                    <Image
                      src={event.profilePic}
                      alt={event.owner}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-semibold text-gray-800">@{event.owner}</p>
                    <p className="text-xs text-gray-500">{event.email}</p>
                  </div>
                </div>
  
                <div className="relative w-full h-[300px] bg-white overflow-hidden shadow-md">
                  <Image
                    src={event.image}
                    alt="poster"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
  
                <div className="p-4">
                  <div className="flex gap-4 mb-4">
                    <button className="text-gray-600 hover:text-cyan-600 flex items-center">
                      <FaHeart className="w-5 h-5 mr-2" /> {event.likeCount}
                    </button>
                    <button className="text-gray-600 hover:text-cyan-600 flex items-center">
                      <FaComment className="w-5 h-5 mr-2" /> {event.commentCount}
                    </button>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">{event.description}</p>
                  <p className="text-xs text-gray-500">{event.postTime}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Navbar />
      </div>
    );
  };
  
  export default Category;