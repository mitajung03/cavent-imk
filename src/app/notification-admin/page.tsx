'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaBell } from 'react-icons/fa';
import Navbar from '../components/navbaradmin';

const NotificationsPage = () => {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<'notifications-admin' | 'mylist-admin'>('notifications-admin');

  const notifications = [
    {
      id: 1,
      profilePic: '/inprodes.svg',
      name: 'inprodesparamadina',
      email: 'inprodes@paramadina.ac.id',
      description: 'Seminar Desain Peran Desain Untuk Mencapai Sustainable Development Goals',
    },
    {
      id: 2,
      profilePic: '/rupakapala.svg',
      name: 'rupakapala_dkv',
      email: 'rupakapala@paramadina.ac.id',
      description: 'Sustainable Development Goals saat ini menjadi tujuan dari semua industri dan lembaga di dunia.',
    },
    {
      id: 3,
      profilePic: '/himti.svg',
      name: 'himtiparamadina',
      email: 'himti@paramadina.ac.id',
      description: 'Nobar EFC Pro Series, we dare you! to achieve your dreams through evos fams cup',
    }
  ];

  const handleTabChange = (tab: 'notifications-admin' | 'mylist-admin') => {
    setActiveTab(tab);
    localStorage.setItem('lastVisitedTab', tab);

    if (tab === 'notifications-admin') {
      router.push('/notification-admin');
    } else if (tab === 'mylist-admin') {
      router.push('/mylist-admin');
    }
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen shadow-xl bg-white px-4 border border-gray-300 pb-16">
      <div className="w-full max-w-xs">
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
          <Image
            src="/logo.svg"
            alt="Cavent Logo"
            width={110}
            height={110}
            className="object-contain"
          />
        </div>

        <div className="flex space-x-4 items-center justify-center mt-20">
          <button
            onClick={() => handleTabChange('notifications-admin')}
            className={`px-4 py-2 text-sm font-medium ${activeTab === 'notifications-admin' ? 'text-white bg-cyan-600' : 'text-cyan-600 bg-white border border-cyan-600'} rounded-md`}
          >
            Notification
          </button>
          <button
            onClick={() => handleTabChange('mylist-admin')}
            className={`px-4 py-2 text-sm font-medium ${activeTab === 'mylist-admin' ? 'text-white bg-cyan-600' : 'text-cyan-600 bg-white border border-cyan-600'} rounded-md`}
          >
            My List
          </button>
        </div>
      </div>

      {/* Notifications List */}
      <div className="flex flex-col p-4 space-y-4 overflow-y-auto max-h-screen">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="flex items-start p-4 bg-white shadow-sm rounded-lg border border-gray-200"
          >
            {/* Profile Picture */}
            <div className="w-14 h-14 rounded-full overflow-hidden border border-gray-200">
              <Image
                src={notification.profilePic}
                alt={notification.name}
                width={56}
                height={56}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Notification Content */}
            <div className="ml-4 flex-1">
              <p className="font-semibold text-gray-800">{notification.name}</p>
              <p className="text-sm text-gray-500">{notification.email}</p>
              <p className="mt-1 text-sm text-gray-700">{notification.description}</p>
            </div>

            {/* Notification Icon */}
            <div className="ml-4">
              <FaBell className="text-gray-500 w-5 h-5" />
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <Navbar/>
    </div>
  );
};

export default NotificationsPage;