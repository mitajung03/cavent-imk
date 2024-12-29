import EventsDetails from '../../components/event-details-admin';

const EventPage = () => {
    return (
        <EventsDetails
            profileImage="/inprodes.svg"
            profileName="Inprodes Paramadina"
            profileEmail="inprodes@paramadina.ac.id"
            posterImage="/workshopperkara.svg"
            eventTitle="Perkara 2024 - Inprodes"
            eventSubtitle="Desain Produk"
            eventDescription="Ini dia Workshop kedua kita yaitu Trend Forecast Kalo penasaran gas datang aja 🏃💨"
            date="10 November 2024"
            time="10.00- Selesai WIB"
            location="Aula Paramadina"
            certificate={true}
        />
    );
};

export default EventPage;
