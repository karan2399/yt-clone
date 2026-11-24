import ButtonsList from "./ButtonsList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="min-w-0 flex-1 px-2">
      <ButtonsList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
