'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MdDateRange, MdAccessTime, MdOutlineEventAvailable, MdLocationOn, MdBookmark, MdBookmarkBorder, MdClose, MdCheckCircle } from 'react-icons/md';
import Footer from '../navbar';

interface EventDetailsProps {
    profileImage: string;
    profileName: string;
    profileEmail: string;
    posterImage: string;
    eventTitle: string;
    eventSubtitle: string;
    eventDescription: string;
    date: string;
    time: string;
    location: string;
    certificate: boolean;
}

const EventDetails: React.FC<EventDetailsProps> = ({
    profileImage,
    profileName,
    profileEmail,
    posterImage,
    eventTitle,
    eventSubtitle,
    eventDescription,
    date,
    time,
    location,
    certificate,
}) => {
    const router = useRouter();
    const [showNotification, setShowNotification] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);

    const handleClose = () => {
        router.push('/homepage');
    };

    const handleJoinEvent = () => {
        setNotificationMessage('Register Successfully!');
        setShowNotification(true);
        setIsRegistered(true); 
    };

    const handleFeedback = () => {
        router.push('/feedback'); 
    };

    const handleBookmark = () => {
        if (isBookmarked) {
            setNotificationMessage('Bookmark removed');
            setIsBookmarked(false);
        } else {
            setNotificationMessage('Bookmark added');
            setIsBookmarked(true);
        }
        setShowNotification(true);
    };

    return (
        <div className="relative w-full h-screen bg-white border border-gray-300 overflow-x-hidden overflow-y-auto">
            {/* Background Blur */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={posterImage}
                    alt="background"
                    layout="fill"
                    objectFit="cover"
                    className="blur-xl"
                />
            </div>

            {/* Header Section */}
            <div className="relative z-10 w-full p-4 flex items-center justify-between bg-opacity-70">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200 flex-shrink-0">
                        <Image
                            src={profileImage}
                            alt="profile picture"
                            width={48}
                            height={48}
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div>
                        <h1 className="text-base font-bold">{profileName}</h1>
                        <h2 className="text-sm font-medium">{profileEmail}</h2>
                    </div>
                </div>

                <button
                    onClick={handleClose}
                    aria-label="Close"
                    className="text-gray-600 hover:text-gray-800"
                >
                    <MdClose className="h-6 w-6" />
                </button>
            </div>

            {/* Poster */}
            <div className="relative z-0 flex items-center justify-center w-full mt-0">
                <div className="relative w-full max-w-4xl">
                    <Image
                        src={posterImage}
                        alt="poster"
                        layout="intrinsic"
                        width={1080}
                        height={1350}
                        objectFit="contain"
                    />
                </div>
            </div>

            {/* Details Section */}
            <div className="relative mx-auto px-6 w-full h-96 rounded-t-2xl bg-white border-t-2 border-gray-300 -mt-6 z-2">
                <div>
                    <h2 className="text-lg font-medium mt-2">{eventSubtitle}</h2>
                    <h1 className="text-xl font-bold">{eventTitle}</h1>
                    <p className="text-left text-sm">{eventDescription}</p>
                </div>

                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                        <MdDateRange className="text-cyan-600 h-8 w-8" />
                        <span className="text-sm text-gray-700">{date}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <MdAccessTime className="text-cyan-600 h-8 w-8" />
                        <span className="text-sm text-gray-700">{time}</span>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                        <MdOutlineEventAvailable className="text-cyan-600 h-8 w-8" />
                        <span className="text-sm text-gray-700">{certificate ? 'Sertifikat' : 'Tanpa Sertifikat'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MdLocationOn className="text-cyan-600 h-8 w-8" />
                        <span className="text-sm text-gray-700">{location}</span>
                    </div>
                </div>

                {/* Button Section */}
                <div className="flex items-center justify-between mt-4 p-4">
                    {!isRegistered ? (
                        <button
                            onClick={handleJoinEvent}
                            className="w-full bg-cyan-600 text-white py-2.5 px-2 rounded-lg font-bold shadow-md hover:bg-cyan-700"
                        >
                            Join Event
                        </button>
                    ) : (
                        <button
                            onClick={handleFeedback}
                            className="w-full bg-cyan-600 text-white py-2.5 px-2 rounded-lg font-bold shadow-md hover:bg-cyan-700"
                        >
                            Feedback
                        </button>
                    )}
                    <button onClick={handleBookmark} className="text-cyan-600 hover:text-cyan-700">
                        {isBookmarked ? (
                            <MdBookmark className="h-11 w-11 ml-4 text-cyan-600" />
                        ) : (
                            <MdBookmarkBorder className="h-11 w-11 ml-4" />
                        )}
                    </button>
                </div>

                {/* Notification */}
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
                                onClick={() => {
                                    setShowNotification(false);
                                }}
                                className="mt-4 bg-cyan-600 text-white py-2 px-4 hover:bg-cyan-700 rounded-lg border border-gray-500"
                            >
                                Ok
                            </button>
                        </div>
                    </div>
                )}
                <Footer />
            </div>
        </div>
    );
};

export default EventDetails;
