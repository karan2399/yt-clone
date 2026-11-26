const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
export const YT_MOST_POPULAR_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&regionCode=IN&chart=mostPopular&regionCode=US&key=" +
  GOOGLE_API_KEY;

export const YT_SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&q=";

export const YT_SEARCH_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&key=" +
  GOOGLE_API_KEY +
  "&q=";
