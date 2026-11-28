import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router";
import { closeMenu } from "../slices/appSlice";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  let videoId = searchParams.get("v");
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full gap-2 px-4 py-6">
        <div className="min-w-0 flex-1">
          <iframe
            width="1200"
            height="500"
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            className="aspect-video w-full rounded-xl bg-black shadow-lg"
            allowFullScreen></iframe>
        </div>
        <div className="w-96 shrink-0">
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
