import EventsDetails from '../../components/events-details';

const EventPage = () => {
    return (
        <EventsDetails
            profileImage="/lsmun-hi.svg"
            profileName="Himahi Paramadina"
            profileEmail="himahi@paramadina.ac.id"
            profileDescription="Navigating the digital frontier: ensuring equity, sequrity, and innovation in the digital age"
            posterImage="/lsmun-hi.svg"
            eventTitle="LSMUN 2024 - HIMAHI"
            eventSubtitle="Hubungan Internasional"
            eventDescription="Navigating the digital frontier: ensuring equity, sequrity, and innovation in the digital age"
            date="14 Agustus 2024"
            time="15.00- 17.00 WIB"
            location="Aula Paramadina"
            certificate={true}
        />
    );
};

export default EventPage;
