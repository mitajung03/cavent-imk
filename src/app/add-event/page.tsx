'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Navbar from '../components/navbaradmin';

const AddEvent = () => {
    const router = useRouter();

    const [eventData, setEventData] = useState({
        image: '',
        program: '',
        title: '',
        details: '',
        date: '',
        time: '',
        certificate: '',
        location: '',
    });

    const handleSubmit = () => {
        const newEvent = { ...eventData, id: Date.now() }; // Generate unique ID
        const existingEvents = JSON.parse(localStorage.getItem('mylist') || '[]'); // Get existing events
        localStorage.setItem('mylist', JSON.stringify([...existingEvents, newEvent])); // Save new event
        alert('Event berhasil ditambahkan!');
        router.push('/mylist-admin'); // Redirect to My List page
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
                    image: reader.result as string,
                });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleCancel = () => {
        router.push('/mylist-admin');
    };

    return (
        <div className="relative mx-auto w-full min-h-screen bg-white border border-gray-300 overflow-x-hidden overflow-y-auto">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/placeholder-bg.svg"
                    alt="background"
                    layout="fill"
                    objectFit="cover"
                    className="blur-xl"
                />
            </div>

            <div className="relative z-10 w-full p-4 flex items-center justify-between bg-opacity-70">
                <h1 className="text-lg font-bold">Add New Event</h1>
                <button
                    onClick={handleCancel}
                    aria-label="Cancel"
                    className="text-gray-600 hover:text-gray-800"
                >
                    Cancel
                </button>
            </div>

            <div className="relative mx-auto px-6 w-full min-h-screen rounded-t-2xl bg-white border-t-2 border-gray-300 z-2 space-y-4">
                <input
                    type="file"
                    onChange={handleImageChange}
                    className="w-full mt-4 p-2 border border-gray-300 rounded"
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
                    className="w-full mt-2 p-2 border border-gray-300 rounded"
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

                <div className="flex justify-center mt-6">
                    <button
                        onClick={handleSubmit}
                        className="bg-cyan-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-cyan-700"
                    >
                        Add Event
                    </button>
                </div>
            </div>

            <Navbar />
        </div>
    );
};

export default AddEvent;
