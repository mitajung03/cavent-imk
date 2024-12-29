import AllFeedback from '../../components/allfeedback';

const FeedbackPage = () => {
  const posterSrc = "/drawing.svg";
  const posterTitle = "DRAWING TOGETHER CIKARANG";
  const likeCount = 320;
  const commentCount = 45;
  const description = "Acara Workshop memberikan pengalaman yang berharga, membangun wawasan, dan memberikan inspirasi luar biasa kepada semua peserta.";
  const postTime = "Posted 1 days ago";

  const users = [
    {
      name: "Jung Jamal",
      feedback: "Acaranya sangat menarik. Membuka wawasan saya banget! Terima kasih!",
      images: ["/perkara1.svg", "/perkara2.svg", "/perkara3.svg", "/perkara4.svg"]
    },
    {
      name: "Januar Lim",
      feedback: "Pengalaman saya sangat luar biasa! Banyak hal baru yang saya pelajari.",
      images: ["/perkara4.svg", "/perkara3.svg", "/perkara2.svg", "/perkara1.svg"]
    },
    {
      name: "Anwar Fauzi",
      feedback: "Acara ini sangat bermanfaat dan penuh inspirasi.",
      images: ["/perkara1.svg", "/perkara4.svg", "/perkara3.svg", "/perkara2.svg"]
    },
    {
      name: "Dina Rahayu",
      feedback: "Sangat informatif dan menyenangkan. Saya belajar banyak hal baru.",
      images: ["/perkara2.svg", "/perkara1.svg", "/perkara4.svg", "/perkara3.svg"]
    },
    {
      name: "Ika Septiani",
      feedback: "Kegiatan ini sangat menyenangkan. Saya mendapatkan wawasan yang luas.",
      images: ["/perkara3.svg", "/perkara4.svg", "/perkara1.svg", "/perkara2.svg"]
    }
  ];

  return (
    <div>
      <AllFeedback
        posterSrc={posterSrc}
        posterTitle={posterTitle}
        likeCount={likeCount}
        commentCount={commentCount}
        description={description}
        postTime={postTime}
        users={users}
      />
    </div>
  );
};

export default FeedbackPage;
