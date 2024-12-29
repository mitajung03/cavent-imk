'use client';
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';
import Navbar from '../components/navbar';

const Feedback = () => {
    const [rating, setRating] = useState(0);
    const [photoName, setPhotoName] = useState<string | null>(null);
    const [videoName, setVideoName] = useState<string | null>(null);

    const handleRatingClick = (index: number) => {
        setRating(index);
    };

    const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setPhotoName(event.target.files[0].name);
        }
    };

    const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setVideoName(event.target.files[0].name);
        }
    };

    return (
        <div className="flex flex-col items-center justify-start min-h-screen shadow-lg bg-white px-4 border border-gray-300 pb-16">
            <div className="w-[393px] border-b-2 border-gray-300 p-0 mb-0 shadow">
                <h1 className="text-center text-2xl font-bold text-black mt-4">Feedback</h1>
                <h2 className="text-center text-xl font-semibold text-black mb-4">PERKARA 2023</h2>
            </div>

            {/* Isi */}
            <div className="flex flex-row items-start w-full mt-2">
                <Image
                    src="perkara.svg"
                    alt="image"
                    width={96}
                    height={96}
                />
                <div className="flex flex-col ml-4">
                    <h1 className="text-base text-black font-bold">PERKARA 2023 - INPRODES</h1>
                    <p className="text-xs text-black">PERKARA adalah acara seminar peran desain untuk mencapai sustainable development goals</p>
                </div>
            </div>

            {/* Rating */}
            <div className="flex left-0 w-full mt-2">
                <p className="text-base text-black font-bold">Rate Us!</p>
            </div>

            <div className="flex left-0 w-full mt-2">
                {[1, 2, 3, 4, 5].map((starindex) => (
                    <FaStar
                        key={starindex}
                        size={24}
                        color={starindex <= rating ? 'yellow' : 'gray'}
                        className="cursor-pointer"
                        onClick={() => handleRatingClick(starindex)}
                    />
                ))}
            </div>

            {/* Add Foto & Video */}
            <div className="flex left-0 w-full mt-4">
                <p className="text-base text-black font-bold">Add Photo or Video</p>
            </div>

            {/* Kotak untuk Photo dan Video */}
            <div className="flex w-full mt-4 space-x-4">
                {/* Kontainer untuk Add Photo */}
                <div className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg relative">
                    <p className="text-sm text-black">Add Photo</p>
                    {photoName && (
                        <p className="text-xs text-black mt-2">{photoName}</p>
                    )}
                    <input
                        type="file"
                        accept="image/*"
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        onChange={handlePhotoUpload}
                    />
                </div>

                {/* Kontainer untuk Add Video */}
                <div className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg relative">
                    <p className="text-sm text-black">Add Video</p>
                    {videoName && (
                        <p className="text-xs text-black mt-2">{videoName}</p>
                    )}
                    <input
                        type="file"
                        accept="video/*"
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        onChange={handleVideoUpload}
                    />
                </div>
            </div>

            {/* Tulis */}
            <div className="flex left-0 w-full mt-4">
                <p className="text-base text-black font-bold">Write your review here!</p>
            </div>

            {/* Kontainer untuk input Review */}
            <div className="w-full mt-4">
                <textarea
                    className="w-full h-32 p-2 border-2 border-gray-300 rounded-lg placeholder-gray-400"
                    placeholder="Share your thoughts about our event"
                />
            </div>

            {/* Submit */}

        <div className='w-full mt-4'>
            <button className='w-full text-white bg-cyan-600 py-2.5 px-2 rounded-lg font-bold shadow-md hover:bg-cyan-700 '>
                Submit
            </button>
        </div>
        <Navbar/>
    </div>
    );
};

export default Feedback;
