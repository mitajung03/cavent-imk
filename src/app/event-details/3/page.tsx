import EventsDetails from '../../components/events-details';

const EventPage = () => {
    return (
        <EventsDetails
            profileImage="/himti.svg"
            profileName="Himti Paramadina"
            profileEmail="himti@paramadina.ac.id"
            profileDescription="Nobar EFC Pro Series, we dare you! to achieve your dreams through evos fams cup"
            posterImage="/evos-ti.svg"
            eventTitle="EFC Campus Parmad - HIMTI"
            eventSubtitle="Teknik Informatika"
            eventDescription="Nobar EFC Pro Series, we dare you! to achieve your dreams through evos fams cup"
            date="18 Juli 2022"
            time="15.00- 17.00 WIB"
            location="Aula Paramadina"
            certificate={true}
        />
    );
};

export default EventPage;
