'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { MdDateRange, MdAccessTime, MdOutlineEventAvailable, MdLocationOn, MdClose, MdEdit } from 'react-icons/md';
import Navbar from '../components/navbaradmin';

const Events = () => {
    const router = useRouter();

    const [isEditing, setIsEditing] = useState(false); // State to toggle editing mode
    const [eventData, setEventData] = useState({
        image: 'evos-ti.svg',
        program: 'Teknik Informatika',
        title: 'EFC Campus Parmad - HIMTI',
        details: 'Nobar EFC Pro Series, we dare you! to achieve your dreams through evos fams cup',
        date: '10 Oktober 2024',
        time: '10.00 - 12.00 WIB',
        certificate: 'Sertifikat',
        location: 'Aula Paramadina',
    });

    const [isStarted, setIsStarted] = useState(false); // State to track if the event has started
    const [isEnded, setIsEnded] = useState(false); // State to track if the event has ended

    const handleHomeClose = () => {
        router.push('/homepage');
    };

    const handleEditClose = () => {
        setIsEditing(false); 
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSubmit = () => {
        setIsEditing(false);
        console.log('Updated Event Data:', eventData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
        setEventData({
            ...eventData,
            [field]: e.target.value,
        });
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setEventData({
                    ...eventData,
                    image: reader.result as string, // Save image as data URL
                });
            };
            reader.readAsDataURL(file);
        }
    };

    // Navigation handlers
    const handleRegistrantClick = () => {
        router.push('/registrant');
    };

    const handleFeedbackClick = () => {
        router.push('/allfeedback');
    };

    const handleStartClick = () => {
        setIsStarted(true); // Set event to started
    };
    
    const handleEndClick = () => {
        setIsEnded(true); // Mark event as ended
    };
    

    return (
        <div className="relative mx-auto w-full min-h-screen bg-white border border-gray-300 overflow-x-hidden overflow-y-auto">
            {/* Background Blur */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="evos-ti.svg"
                    alt="background"
                    layout="fill"
                    objectFit="cover"
                    className="blur-xl"
                />
            </div>

            {/* Header Section */}
            <div className="relative z-10 w-full p-4 flex items-center justify-between bg-opacity-70">
                {!isEditing && (
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200 flex-shrink-0">
                            <Image
                                src="himti.svg"
                                alt="profile picture"
                                width={48}
                                height={48}
                                className="object-cover w-full h-full"
                            />
                        </div>

                        <div>
                            <h1 className="text-base font-bold">Himti Paramadina</h1>
                            <h2 className="text-sm font-medium">himti@paramadina.ac.id</h2>
                            <p className="mt-0 text-xs">
                                Nobar EFC Pro Series, we dare you! to achieve your dreams through evos fams cup
                            </p>
                        </div>
                    </div>
                )}

                {/* Only show this button when not in editing mode */}
                {!isEditing && (
                    <button
                        onClick={handleHomeClose}
                        aria-label="Close"
                        className="text-gray-600 hover:text-gray-800"
                    >
                        <MdClose className="h-6 w-6" />
                    </button>
                )}

                {/* Close Button to Exit Edit Mode */}
                {isEditing && (
                    <button
                        onClick={handleEditClose}
                        aria-label="Exit Edit Mode"
                        className="text-gray-600 hover:text-gray-800"
                    >
                        <MdClose className="h-6 w-6" />
                    </button>
                )}
            </div>

            {/* Poster */}
            {!isEditing && (
                <div className="relative z-0 flex items-center justify-center w-full -mt-2">
                    <div className="relative w-full max-w-4xl">
                        <Image
                            src={eventData.image}
                            alt="poster"
                            layout="intrinsic"
                            width={1080} // Poster width
                            height={1350} // Poster height
                            objectFit="contain"
                        />
                    </div>
                </div>
            )}

            {/* Details Section */}
            <div className="relative mx-auto px-6 w-full min-h-screen rounded-t-2xl bg-white border-t-2 border-gray-300 -mt-6 z-2">
                {isEditing ? (
                    <div className="space-y-4">
                        {/* Edit Form */}
                        <input
                            type="file"
                            onChange={handleImageChange}
                            className="w-full mt-2 p-2 border border-gray-300 rounded"
                            accept="image/*"
                        />
                        <input
                            type="text"
                            value={eventData.title}
                            onChange={(e) => handleChange(e, 'title')}
                            className="text-xl font-bold w-full mt-2 p-2 border border-gray-300 rounded"
                            placeholder="Event Title"
                        />
                        <textarea
                            value={eventData.details}
                            onChange={(e) => handleChange(e, 'details')}
                            className="w-full mt-2 p-2 border border-gray-300 rounded"
                            placeholder="Event Details"
                        />
                        <input
                            type="text"
                            value={eventData.program}
                            onChange={(e) => handleChange(e, 'program')}
                            className="w-full mt- p-2 border border-gray-300 rounded"
                            placeholder="Program Studi"
                        />
                        <input
                            type="date"
                            value={eventData.date}
                            onChange={(e) => handleChange(e, 'date')}
                            className="w-full mb-4 p-2 border border-gray-300 rounded"
                        />
                        <input
                            type="text"
                            value={eventData.time}
                            onChange={(e) => handleChange(e, 'time')}
                            className="w-full mb-4 p-2 border border-gray-300 rounded"
                            placeholder="Time"
                        />
                        <input
                            type="text"
                            value={eventData.location}
                            onChange={(e) => handleChange(e, 'location')}
                            className="w-full mb-4 p-2 border border-gray-300 rounded"
                            placeholder="Location"
                        />
                        <input
                            type="text"
                            value={eventData.certificate}
                            onChange={(e) => handleChange(e, 'certificate')}
                            className="w-full mb-4 p-2 border border-gray-300 rounded"
                            placeholder="Benefit (Certificate or Anything)"
                        />
                    </div>
                ) : (
                    <>
                        <div>
                            <h2 className='text-lg font-medium mt-2'>{eventData.program}</h2>
                            <h1 className='text-xl font-bold'>{eventData.title}</h1>
                            <p className="text-left text-sm">{eventData.details}</p>
                        </div>

                        <button
                            onClick={handleEdit}
                            className='absolute top-2 right-4 bg-cyan-600 text-white p-3 rounded-full shadow-xl hover:bg-cyan-700'
                            aria-label='Edit'
                        >
                            <MdEdit className='h-4 w-4'/>
                        </button>

                        <div className='flex items-center justify-between mt-4'>
                            <div className='flex items-center gap-2'>
                                <MdDateRange className='text-cyan-600 h-8 w-8'/>
                                <span className='text-sm text-gray-700'>{eventData.date}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MdAccessTime className="text-cyan-600 h-8 w-8" />
                                <span className="text-sm text-gray-700">{eventData.time}</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center gap-2">
                                <MdOutlineEventAvailable className="text-cyan-600 h-8 w-8" />
                                <span className="text-sm text-gray-700">{eventData.certificate}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MdLocationOn className="text-cyan-600 h-8 w-8" />
                                <span className="text-sm text-gray-700">{eventData.location}</span>
                            </div>
                        </div>

                        <div className="flex justify-center mt-4 p-4">
                            <button onClick={handleRegistrantClick} className="flex-1 bg-cyan-600 text-white py-2 px-4 rounded-lg text-base font-bold shadow-md hover:bg-cyan-700 mr-2">
                                Registrant
                            </button>
                            <button onClick={handleFeedbackClick} className="flex-1 bg-cyan-600 text-white py-2 px-4 rounded-lg text-base font-bold shadow-md hover:bg-cyan-700 mx-2">
                                Feedback
                            </button>

                            {/* Start/End Button */}
                            <button
                                onClick={isStarted ? handleEndClick : handleStartClick}
                                className={`flex-1 ${isEnded ? 'bg-gray-500' : isStarted ? 'bg-red-600' : 'bg-green-500'} text-white py-2 px-4 rounded-lg text-base font-bold shadow-md hover:${isEnded ? 'bg-gray-600' : isStarted ? 'bg-red-700' : 'bg-green-600'} ml-2`}
                                disabled={isEnded} // Disable if event has ended
                            >
                                {isEnded ? 'Ended' : isStarted ? 'End' : 'Start'}
                            </button>
                        </div>
                    </>
                )}

                {/* Submit Button for Editing */}
                {isEditing && (
                    <div className="flex justify-center mt-6">
                        <button
                            onClick={handleSubmit}
                            className="bg-cyan-600 text-white p-2 rounded-lg"
                        >
                            Submit
                        </button>
                    </div>
                )}

                <Navbar />
            </div>
        </div>
    );
};

export default Events;
