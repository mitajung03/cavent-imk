'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Navbar from '../components/navbar';

const MyListPage = () => {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<'notifications' | 'mylist'>('mylist');
  const [myListItems, setMyListItems] = useState([
    {
      id: 1,
      profilePic: '/inprodes.svg',
      name: 'inprodesparamadina',
      email: 'inprodesparamadina@gmail.com',
      description: 'Seminar Desain Peran Desain Untuk Mencapai Sustainable Development Goals',
    },
    {
      id: 2,
      profilePic: '/rupakapala.svg',
      name: 'rupakapala_dkv',
      email: 'dkvparamadina@gmail.com',
      description: 'Sustainable Development Goals saat ini menjadi tujuan dari semua industri dan lembaga di dunia.',
    },
    {
      id: 3,
      profilePic: '/himti.svg',
      name: 'himtiparamadina',
      email: 'himti@paramadina.ac.id',
      description: 'Nobar EFC Pro Series, we dare you! to achieve your dreams through evos fams cup',
    }
  ]);

  const [showConfirmation, setShowConfirmation] = useState(false); // Modal visibility
  const [itemToDelete, setItemToDelete] = useState<number | null>(null); // Item to be deleted

  const handleTabChange = (tab: 'notifications' | 'mylist') => {
    setActiveTab(tab);
    localStorage.setItem('lastVisitedTab', tab); // Store last visited tab

    if (tab === 'notifications') {
      router.push('/notification'); // Navigate to the Notification page
    } else if (tab === 'mylist') {
      router.push('/mylist'); // Navigate to the My List page
    }
  };

  const handleCancelClick = (itemId: number) => {
    setItemToDelete(itemId); // Set the item to be deleted
    setShowConfirmation(true); // Show confirmation modal
  };

  const handleDeleteItem = () => {
    if (itemToDelete !== null) {
      // Remove the item from the list
      setMyListItems((prevItems) => prevItems.filter(item => item.id !== itemToDelete));
    }
    setShowConfirmation(false); // Hide confirmation modal
    setItemToDelete(null); // Reset the item to delete
    alert('Event berhasil dihapus dan pendaftaranmu telah dibatalkan.'); // Show success message
  };

  const handleCancelDelete = () => {
    setShowConfirmation(false); // Hide confirmation modal if canceled
    setItemToDelete(null); // Reset the item to delete
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
            onClick={() => handleTabChange('notifications')}
            className={`px-4 py-2 text-sm font-medium ${activeTab === 'notifications' ? 'text-white bg-cyan-600' : 'text-cyan-600 bg-white border border-cyan-600'} rounded-md`}
          >
            Notification
          </button>
          <button
            onClick={() => handleTabChange('mylist')}
            className={`px-4 py-2 text-sm font-medium ${activeTab === 'mylist' ? 'text-white bg-cyan-600' : 'text-cyan-600 bg-white border border-cyan-600'} rounded-md`}
          >
            My List
          </button>
        </div>
      </div>

      {/* My List Items */}
      <div className="flex flex-col p-4 space-y-4 overflow-y-auto max-h-screen">
        {myListItems.map((item) => (
          <div
            key={item.id}
            className="flex items-start p-4 bg-white shadow-sm rounded-lg border border-gray-200"
          >
            {/* Profile Picture */}
            <div className="w-14 h-14 rounded-full overflow-hidden border border-gray-200">
              <Image
                src={item.profilePic}
                alt={item.name}
                width={56}
                height={56}
                className="object-cover w-full h-full"
              />
            </div>

            {/* List Item Content */}
            <div className="ml-4 flex-1">
              <p className="font-semibold text-gray-800">{item.name}</p>
              <p className="text-sm text-gray-500">{item.email}</p>
              <p className="mt-1 text-sm text-gray-700">{item.description}</p>
            </div>

            {/* List Icon */}
            <div className="-ml-11">
              <button
                onClick={() => handleCancelClick(item.id)}
                className="px-2 py-0 text-white bg-red-600 rounded-lg hover:bg-red-800 focus:outline-none"
              >
                Cancel
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
            <p className="text-lg font-semibold text-gray-800 mb-4">Ingin membatalkan event ini?</p>
            <div className="flex justify-around">
              <button
                onClick={handleDeleteItem}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Yes
              </button>
              <button
                onClick={handleCancelDelete}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Navbar />
    </div>
  );
};

export default MyListPage;
