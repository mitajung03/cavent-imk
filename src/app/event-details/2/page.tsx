import EventsDetails from '../../components/events-details';

const EventPage = () => {
    return (
        <EventsDetails
            profileImage="/inprodes.svg"
            profileName="Inprodes Paramadina"
            profileEmail="inprodes@paramadina.ac.id"
            profileDescription="Seminar Desain Peran Desain Untuk Mencapai Sustainable Development Goals"
            posterImage="/perkara-dp.svg"
            eventTitle="PERKARA 2023 - INPRODES"
            eventSubtitle="Desain Produk"
            eventDescription="PERKARA adalah acara seminar peran desain untuk mencapai sustainable development goals"
            date="10 Oktober 2024"
            time="10.00 - 12.00 WIB"
            location="Aula Paramadina"
            certificate={true}
        />
    );
};

export default EventPage;
