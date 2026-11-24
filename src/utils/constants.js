const GOOGLE_API_KEY = import.meta.env.VITE_GOOLE_API_KEY;
export const YT_MOST_POPULAR_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&regionCode=IN&chart=mostPopular&regionCode=US&key=" +
  GOOGLE_API_KEY;
