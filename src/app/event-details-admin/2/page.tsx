import EventsDetails from '../../components/event-details-admin';

const EventPage = () => {
    return (
        <EventsDetails
            profileImage="/komik.svg"
            profileName="Komik Paramadina"
            profileEmail="komik@paramadina.ac.id"
            posterImage="/praikom.svg"
            eventTitle="Pra Kami IKOM - IKOM"
            eventSubtitle="Ilmu Komunikasi"
            eventDescription="Pra kami ikom bertujuan untuk menyambut mahasiswa baru prodi ilmu komunikasi"
            date="28 September 2024"
            time="10.00 - 12.00 WIB"
            location="Aula Paramadina"
            certificate={true}
        />
    );
};

export default EventPage;
