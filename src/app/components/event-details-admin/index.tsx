'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { MdDateRange, MdAccessTime, MdOutlineEventAvailable, MdLocationOn, MdBookmarkBorder, MdClose } from 'react-icons/md';
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

    const handleClose = () => {
        router.push('/homepage-admin');
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
                {/* Profile and Text */}
                <div className="flex items-center gap-4">
                    {/* Profile Picture */}
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200 flex-shrink-0">
                        <Image
                            src={profileImage}
                            alt="profile picture"
                            width={48}
                            height={48}
                            className="object-cover w-full h-full"
                        />
                    </div>

                    {/* Text Content */}
                    <div>
                        <h1 className="text-base font-bold">{profileName}</h1>
                        <h2 className="text-sm font-medium">{profileEmail}</h2>
                    </div>
                </div>

                {/* Close Icon */}
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
                        width={1080} // Poster width
                        height={1350} // Poster height
                        objectFit="contain"
                    />
                </div>
            </div>

            {/* Details Section */}
            <div className="relative mx-auto px-6 w-full h-96 rounded-t-2xl bg-white border-t-2 border-gray-300 -mt-6 z-2">
                {/* Title */}
                <div>
                    <h2 className="text-lg font-medium mt-2">{eventSubtitle}</h2>
                    <h1 className="text-xl font-bold">{eventTitle}</h1>
                    <p className="text-left text-sm">{eventDescription}</p>
                </div>

                {/* Details */}
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

                {/* Join Button */}
                <div className="flex items-center justify-between mt-4 p-4">
                    <button className="w-full bg-cyan-600 text-white py-2.5 px-2 rounded-lg font-bold shadow-md hover:bg-cyan-700">
                        Join Event
                    </button>
                    <button className="text-cyan-600 hover:text-cyan-700">
                        <MdBookmarkBorder className="h-11 w-11 ml-4" />
                    </button>
                </div>

                {/* Footer */}
                <Footer/>
            </div>
        </div>
    );
};

export default EventDetails;
