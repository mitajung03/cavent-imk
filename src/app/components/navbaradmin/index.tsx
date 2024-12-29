'use client';
import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { FaBell, FaHome, FaUser } from 'react-icons/fa';

const Footer = () => {
  const router = useRouter();
  const currentPath = usePathname();

  return (
    <div className="fixed bottom-0 mx-auto w-full max-w-[393px] left-1/2 transform -translate-x-1/2 items-center bg-white border border-gray-300">
      <div className="max-w-xs mx-auto flex justify-around items-center py-2">
      {/* Notification Button */}
      <button
        onClick={() => router.push('/notification-admin')}
        className={`flex flex-col items-center ${
          currentPath === '/notification-admin' ? 'text-cyan-600' : 'text-gray-600 hover:text-cyan-600'
        }`}
      >
        <FaBell className="w-6 h-6" />
        <span className="text-xs">Notification</span>
      </button>

      {/* Home Button */}
      <button
        onClick={() => router.push('/homepage-admin')}
        className={`flex flex-col items-center ${
          currentPath === '/homepage-admin' ? 'text-cyan-600' : 'text-gray-600 hover:text-cyan-600'
        }`}
      >
        <FaHome className="w-6 h-6" />
        <span className="text-xs">Home</span>
      </button>

      {/* Profile Button */}
      <button
        onClick={() => router.push('/profile-admin')}
        className={`flex flex-col items-center ${
          currentPath === '/profile-admin' ? 'text-cyan-600' : 'text-gray-600 hover:text-cyan-600'
        }`}
      >
        <FaUser className="w-6 h-6" />
        <span className="text-xs">Profile</span>
      </button>
    </div>
    </div>
  );
};

export default Footer;
