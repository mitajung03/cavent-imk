import EventsDetails from '../../components/events-details';

const EventPage = () => {
    return (
        <EventsDetails
            profileImage="/himamen.svg"
            profileName="Himamen Paramadina"
            profileEmail="himamen@paramadina.ac.id"
            profileDescription="REVISI merupakan acara Recycle & Visitation untuk tingkatkan hidup dan kurangi sampah"
            posterImage="/revisi-mene.svg"
            eventTitle="REVISI - HIMAMEN x INPRODES"
            eventSubtitle="Manajemen"
            eventDescription="REVISI merupakan acara Recycle & Visitation untuk tingkatkan hidup dan kurangi sampah"
            date="6 Agustus 2024"
            time="09.30- Selesai WIB"
            location="SMKN 51 Jakarta"
            certificate={true}
        />
    );
};

export default EventPage;
