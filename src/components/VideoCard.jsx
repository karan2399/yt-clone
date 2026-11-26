const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { title } = info;

  return (
    <div className="h-full min-w-0 overflow-hidden rounded-xl p-2 transition-shadow hover:shadow-lg">
      <div>
        <img
          src={snippet?.thumbnails?.medium?.url}
          alt={title}
          className="aspect-video w-full rounded-xl bg-slate-200 object-cover"
        />
      </div>
      <div>
        <ul>
          <li className="line-clamp-2 py-2 font-semibold leading-5 text-slate-900">
            {snippet?.title}
          </li>
          <li className="text-sm text-slate-600">{snippet?.channelTitle}</li>
          <li className="text-sm text-slate-500">
            {statistics?.viewCount} Views
          </li>
        </ul>
      </div>
    </div>
  );
};

// export const AdVideoCard = (VideoCard) => {
//   return ({ info }) => {
//     return (
//       <div className="p-1 m-1 border border-e-red-500">
//         <VideoCard info={info}></VideoCard>
//       </div>
//     );
//   };
// };

export default VideoCard;
