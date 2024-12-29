'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Navbar from '../components/navbar';
import { FaList, FaBell, FaEnvelope, FaInfoCircle } from 'react-icons/fa';

const ProfilePage = () => {
  const router = useRouter();

  const [isEditing, setIsEditing] = useState(false); // State untuk mode edit
  const [name, setName] = useState('Himti');
  const [email] = useState('himti@paramadina.ac.id');
  const [profilePic, setProfilePic] = useState('/icon.svg');

  const handleNavigation = (page: 'mylist' | 'notification' | 'myfeedback' | 'about') => {
    router.push(`/${page}`);
  };

  const handleProfilePicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePic(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setIsEditing(false); // Keluar dari mode edit setelah menyimpan
    console.log('Profile saved:', { name, email, profilePic }); // Simulasi simpan data
  };

  const handleSignOut = () => {
    setTimeout(() => {
      router.push('/sign-in');
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-white px-4 border border-gray-300 pb-16">
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

        {/* Profile Section */}
        <div className="flex flex-col items-center mt-20 relative">
          {!isEditing ? (
            <>
              {/* Profile Display */}
              <button
                onClick={() => setIsEditing(true)}
                className="absolute top-0 right-0 mt-2 mr-2 px-2 py-0 text-xs text-gray-600 bg-white rounded-full hover:text-black border border-gray-700 focus:outline-none"
              >
                Edit Profile
              </button>

              {/* Profile Picture */}
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-200 mt-12">
                <Image
                  src={profilePic}
                  alt="Profile"
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Name and Email */}
              <div className="mt-4 text-center">
                <p className="text-xl font-semibold text-gray-800">{name}</p>
                <p className="text-sm text-gray-500">{email}</p>
              </div>
            </>
          ) : (
            <>
              {/* Edit Profile Form */}
              <div className="flex flex-col items-center w-full space-y-4 mt-4">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-200">
                  <Image
                    src={profilePic}
                    alt="Profile"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* Input File di tengah */}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePicChange}
                  className="mt-4 block mx-auto text-sm text-gray-600"
                />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="Enter your name"
                />
                <input
                  type="email"
                  value={email}
                  disabled
                  className="w-full px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none"
                />
                <div className="flex space-x-4">
                  <button
                    onClick={handleSave}
                    className="flex-1 px-4 py-2 text-white bg-cyan-600 rounded-lg hover:bg-cyan-700 focus:outline-none"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="flex-1 px-4 py-2 text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* List of Buttons */}
        {!isEditing && (
          <div className="flex flex-col space-y-4 mt-8 w-full">
            <button
              onClick={() => handleNavigation('mylist')}
              className="flex items-center w-full px-4 py-2 text-sm font-medium text-cyan-600 bg-white rounded-md hover:bg-gray-100 border border-gray-300 focus:outline-none"
            >
              <FaList className="mr-3 text-cyan-600" />
              My Event
            </button>
            <button
              onClick={() => handleNavigation('notification')}
              className="flex items-center w-full px-4 py-2 text-sm font-medium text-cyan-600 bg-white rounded-md hover:bg-gray-100 border border-gray-300 focus:outline-none"
            >
              <FaBell className="mr-3 text-cyan-600" />
              Notification
            </button>
            <button 
              onClick={() => handleNavigation('myfeedback')}
              className="flex items-center w-full px-4 py-2 text-sm font-medium text-cyan-600 bg-white rounded-md hover:bg-gray-100 border border-gray-300 focus:outline-none">
              <FaEnvelope className="mr-3 text-cyan-600" />
              Feedback
            </button>
            <button 
              onClick={() => handleNavigation('about')}
              className="flex items-center w-full px-4 py-2 text-sm font-medium text-cyan-600 bg-white rounded-md hover:bg-gray-100 border border-gray-300 focus:outline-none">
              <FaInfoCircle className="mr-3 text-cyan-600" />
              About
            </button>
          </div>
        )}

        {/* Sign Out Button */}
        {!isEditing && (
          <div className="mt-8 w-full flex justify-end">
            <button
              onClick={handleSignOut}
              className="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-800 focus:outline-none"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <Navbar />
    </div>
  );
};

export default ProfilePage;
