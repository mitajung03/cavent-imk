import EventsDetails from '../../components/event-details-admin';

const EventPage = () => {
    return (
        <EventsDetails
            profileImage="/paramadina.svg"
            profileName="Universitas Paramadina"
            profileEmail="info@paramadina.ac.id"
            posterImage="/kuliah-kebangsaan-paramadina.svg"
            eventTitle="Kuliah Kebangsaan Part 1"
            eventSubtitle="Universitas Paramadina"
            eventDescription="Seminar Kuliah Kebangsaan Universitas Paramadina"
            date="3 Desember 2024"
            time="15.30 - 18.00 WIB"
            location="Ruang Toledo 1 & 2"
            certificate={true}
        />
    );
};

export default EventPage;
