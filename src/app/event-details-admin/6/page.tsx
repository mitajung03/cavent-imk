import EventsDetails from '../../components/event-details-admin';

const EventPage = () => {
    return (
        <EventsDetails
            profileImage="/rupakapala.svg"
            profileName="Rupakapala Paramadina"
            profileEmail="rupakapala@paramadina.ac.id"
            posterImage="/rekreasi-dkv.svg"
            eventTitle="Rekreasi - RUPAKAPALA"
            eventSubtitle="Desain Komunikasi Visual"
            eventDescription="Rekreasi adalah singkatan dari revolusi, kreasi, inovasi. Rekreasi merupakan tema acara dari rupatemu"
            date="10 November 2024"
            time="10.00- Selesai WIB"
            location="Aula Paramadina"
            certificate={true}
        />
    );
};

export default EventPage;
