'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [activeButton, setActiveButton] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const handleUserClick = () => {
    setActiveButton('user');
    setDropdownVisible(false);
  };

  const handleEventOrganizerClick = () => {
    setActiveButton('event');
    setDropdownVisible(true);
  };

  const handleSignUp = () => {
    const eventOrganizerEmails = [
      'himti@paramadina.ac.id',
      'rupakapala@paramadina.ac.id',
      'inprodes@paramadina.ac.id',
      'himahi@paramadina.ac.id',
      'himamen@paramadina.ac.id',
      'komik@paramadina.ac.id',
      'dkm@paramadina.ac.id'
    ];

    if (password !== confirmPassword) {
      setError('Password dan Confirm Password tidak cocok.');
      return;
    }

    if (activeButton === 'user') {
      if (
        email === 'miftahul.fitriah@students.paramadina.ac.id' &&
        password === 'M1234567'
      ) {
        setError('');
        router.push('/homepage');
      } else {
        setError('Sign-Up gagal! Periksa kembali email dan password.');
      }
    } else if (activeButton === 'event') {
      if (eventOrganizerEmails.includes(email) && password === 'P1234567') {
        setError('');
        router.push('/homepage-admin');
      } else {
        setError('Sign-Up gagal! Periksa kembali email dan password.');
      }
    } else {
      setError('Pilih kategori User atau Event Organizer.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen shadow-xl bg-white px-4 border border-gray-300">
      <div className="w-full max-w-xs mb-6">
        <span className="text-3xl font-bold">WELCOME...</span>
      </div>

      <div className="w-full max-w-xs mb-8">
        <Image
          src={'/logo.svg'}
          width={0}
          height={0}
          sizes="100%"
          alt="logo"
          className="w-full max-w-[300px] mx-0"
        />
      </div>

      <div className="w-full max-w-xs">
        {error && (
          <div className="text-red-500 text-sm mb-4">{error}</div>
        )}

        <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            placeholder="Alamat email"
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4 relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <BsEyeSlash size={20} /> : <BsEye size={20} />}
          </button>
        </div>

        <div className="mb-4 relative">
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirm Password"
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={toggleConfirmPasswordVisibility}
            className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
          >
            {showConfirmPassword ? <BsEyeSlash size={20} /> : <BsEye size={20} />}
          </button>
        </div>

        <div className="flex justify-center gap-4 mb-6">
          <button
            type="button"
            onClick={handleUserClick}
            className={`px-4 py-2 border rounded-full text-gray-600 hover:bg-gray-100 ${
              activeButton === 'user' ? 'bg-cyan-600 text-white' : ''
            }`}
          >
            User
          </button>
          <button
            type="button"
            onClick={handleEventOrganizerClick}
            className={`px-4 py-2 border rounded-full text-gray-600 hover:bg-gray-100 ${
              activeButton === 'event' ? 'bg-cyan-600 text-white' : ''
            }`}
          >
            Event Organizer
          </button>
        </div>

         {/* Dropdown */}
         {isDropdownVisible && (
            <div className="mt-4 w-full bg-white border rounded-lg shadow-lg mb-6">
              <select 
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent"
              style={{ maxHeight:"50px", overflowY: "auto"}}>
                <option value="">Program Studi</option>
                <option value="Teknik Informatika">Teknik Informatika</option>
                <option value="Desain Komunikasi Visual">Desain Komunikasi Visual</option>
                <option value="Desain Produk">Desain Produk</option>
                <option value="Manajemen">Manajemen</option>
                <option value="Psikologi">Psikologi</option>
                <option value="Ilmu Komunikasi">Ilmu Komunikasi</option>
                <option value="Falsafah Agama">Falsafah Agama</option>
              </select>
            </div>
          )}
        </div>

        <button
          onClick={handleSignUp}
          className="w-full py-2 bg-gradient-to-r from-cyan-600 to-cyan-600 text-white rounded-lg shadow-lg hover:opacity-90 mb-4"
        >
          Sign-Up
        </button>

        <div className="text-center text-sm">
          <p>
            Already have an account?{' '}
            <a href="/sign-in" className="text-blue-500 hover:underline">
              Sign-in
            </a>
          </p>
        </div>
      </div>
  );
};

export default SignUp;
