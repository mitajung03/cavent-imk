'use client';
import Image from "next/image";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { MdCheckCircle } from 'react-icons/md';
import Footer from "../components/navbaradmin";
import { useState } from "react";
import { useRouter } from "next/navigation";

const About = () => {
    const [showNotification, setShowNotification] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState("");
    const router = useRouter();

    const handleTelegramClick = () => {
        setNotificationMessage("Your message has been sent successfully!");
        setShowNotification(true);
    };

    
    const handleNotificationClose = () => {
        setShowNotification(false);
        router.push('/about-admin'); 
    };

    return(
        <div className="flex flex-col items-center justify-start min-h-screen bg-white px-4 border border-gray-300 pb-16">
            <div className="w-full max-w-xs">
                <div className="absolute top-4 left-1/2 -translate-x-1/2">
                    <Image
                    src="logo.svg"
                    alt="cavent logo"
                    width={110}
                    height={110}
                    className='object-contain'
                    />
                </div>

                <div className="flex items-center justify-center mt-4">
                    <h1 className="font-bold text-xl px-4 py-2 mt-14">About</h1>
                </div>

                <div className="mt-4 flex flex-col items-start p-4 bg-white shadow-sm rounded-lg border border-cyan-600">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center">
                            <BsFillTelephoneFill className="text-gray-500 w-5 h-5 mt-1" />
                            <div className="ml-4 font-medium">021 12345678</div>
                        </div>

                        <div className="flex items-center">
                            <BsFillTelephoneFill className="text-gray-500 w-5 h-5 mt-1" />
                            <div className="ml-4 font-medium">021 12345678</div>
                        </div>

                        <div className="flex items-center">
                            <TfiEmail className="text-gray-500 w-5 h-5 mt-1"/>
                            <div className="ml-4 font-bold underline text-cyan-600">cavent@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full mt-4 relative">
                <textarea
                    className="w-full h-72 p-2 border-2 border-gray-300 rounded-lg placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent"
                    placeholder="Write your complaints here!"
                ></textarea>
                <button 
                    onClick={handleTelegramClick}
                    className="absolute bottom-3 right-3 p-3 text-cyan-600 hover:text-cyan-700">
                    <FaTelegramPlane className="w-5 h-5"/>
                </button>
            </div>

            {/* Notifikasi Pop-up */}
            {showNotification && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
                    <div className="w-full max-w-xs mx-auto bg-gray-300 px-6 py-4 rounded-lg shadow-lg text-center">
                        {/* Icon Centang */}
                        <div className="flex justify-center mb-4">
                            <MdCheckCircle className="text-green-600 h-12 w-12" />
                        </div>

                        {/* Teks Notifikasi */}
                        <h2 className="text-black text-lg font-bold">{notificationMessage}</h2>

                        {/* Tombol OK */}
                        <button
                            onClick={handleNotificationClose}
                            className="mt-4 bg-cyan-600 text-white py-2 px-4 hover:bg-cyan-700 rounded-lg border border-gray-500"
                        >
                            Ok
                        </button>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default About;
