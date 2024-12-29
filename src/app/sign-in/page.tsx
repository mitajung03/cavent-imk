'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = () => {
    if (email === 'himti@paramadina.ac.id' && password === 'P1234567') {
      // Jika email adalah himti dengan password P1234567
      setError('');
      router.push('/homepage-admin'); // Redirect ke homepage-admin
    } else if (
      email === 'miftahul.fitriah@students.paramadina.ac.id' &&
      password === 'M1234567'
    ) {
      // Jika email adalah miftahul dengan password M1234567
      setError('');
      router.push('/homepage'); // Redirect ke homepage
    } else {
      // Jika email atau password salah
      setError('Email atau password salah. Silakan coba lagi.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen shadow-xl bg-white px-4 border border-gray-300">
      <div className="w-full max-w-xs mb-20">
        <span className="text-3xl font-bold">WELCOME...</span>
      </div>

      <div className="w-full max-w-xs mb-8 -mt-4">
        <Image
          src={'/logo.svg'}
          width={0}
          height={0}
          sizes="100%"
          alt="logo"
          className="w-full max-w-[300px]"
        />
      </div>

      <div className="w-full max-w-xs">
        {error && (
          <div className="text-red-500 text-sm mb-4">
            {error}
          </div>
        )}

        <div className="mb-4">
          <input
            type="email"
            placeholder="Alamat email"
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-2 relative">
          <input
            id="hs-toggle-password"
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

        <div className="text-right mb-6 -mt-2">
          <a
            href="/forgot-password"
            className="text-blue-500 hover:underline text-xs"
          >
            forgot password?
          </a>
        </div>

        <button
          onClick={handleSignIn}
          className="w-full bg-gradient-to-r from-cyan-600 to-cyan-600 text-white py-2 rounded-lg shadow-lg hover:opacity-90 -mt-2"
        >
          Sign-In
        </button>

        <div className="mt-4 text-center text-sm">
          <p>
            Doesn&apos;t have an account?{' '}
            <a href="/sign-up" className="text-blue-500 hover:underline">
              Sign-Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
