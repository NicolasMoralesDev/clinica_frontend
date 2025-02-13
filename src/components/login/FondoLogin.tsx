import Title from "antd/es/typography/Title"
import video from "../../assets/video-login.mp4"
import "./estilos/Fondo-modal.css"

const FondoLogin = () => {
  return (
    <div className="relative h-screen  w-auto">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/2 z-10">
        <Title
          style={{ color: "white" }}
          className="text-4xl font-mono font-bold"
        >
          Cuidamos de vos, con la atención que mereces
        </Title>
      </div>
      <video
        className="object-cover relative  z-0 clip-triangle h-full"
        src={video}
        autoPlay
        muted
        loop
      />
    </div>
  );
};

export default FondoLogin;
