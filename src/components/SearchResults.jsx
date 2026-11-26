import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import { YT_SEARCH_VIDEOS_API } from "../utils/constants";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search_query")?.trim() ?? "";
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!searchQuery) {
      setVideos([]);
      setLoading(false);
      setError("");
      return;
    }

    let cancelled = false;
    setVideos([]);
    setLoading(true);
    setError("");

    fetch(YT_SEARCH_VIDEOS_API + encodeURIComponent(searchQuery))
      .then((response) => {
        if (!response.ok) {
          throw new Error("Search request failed");
        }
        return response.json();
      })
      .then((data) => {
        if (!cancelled) setVideos(data.items ?? []);
      })
      .catch(() => {
        if (!cancelled) setError("Could not load results. Please try again.");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [searchQuery]);

  return (
    <main className="min-w-0 flex-1 px-4 py-6 sm:px-6 lg:py-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-center justify-between border-b border-slate-200 pb-4">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Search results
            </p>
            <h1 className="mt-1 truncate text-xl font-bold text-slate-900 sm:text-2xl">
              {searchQuery
                ? `Results for “${searchQuery}”`
                : "Find something to watch"}
            </h1>
          </div>
          <span className="ml-4 hidden rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 sm:inline-flex">
            Videos
          </span>
        </div>

        {loading && (
          <p className="py-12 text-center text-sm text-slate-500">
            Searching videos…
          </p>
        )}

        {error && (
          <p
            role="alert"
            className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </p>
        )}

        {!loading && !error && searchQuery && videos.length === 0 && (
          <p className="py-12 text-center text-sm text-slate-500">
            No videos found. Try a different search.
          </p>
        )}

        {!searchQuery && (
          <p className="py-12 text-center text-sm text-slate-500">
            Search for a topic to see matching videos.
          </p>
        )}

        <div className="space-y-5">
          {videos.map((video) => {
            const { id, snippet } = video;
            const videoId = id?.videoId;

            return (
              <Link
                to={`/watch?v=${videoId}`}
                key={videoId}
                className="group flex min-w-0 flex-col gap-4 rounded-2xl p-2 transition hover:bg-white hover:shadow-sm sm:flex-row sm:gap-5">
                <div className="w-full shrink-0 overflow-hidden rounded-xl bg-slate-200 sm:w-[min(40%,360px)]">
                  <img
                    src={
                      snippet?.thumbnails?.high?.url ??
                      snippet?.thumbnails?.medium?.url
                    }
                    alt=""
                    className="aspect-video h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="min-w-0 py-1">
                  <h2 className="line-clamp-2 text-base font-semibold leading-6 text-slate-900 group-hover:text-blue-700 sm:text-lg">
                    {snippet?.title}
                  </h2>
                  <p className="mt-2 text-xs text-slate-500">
                    {snippet?.channelTitle}
                    {snippet?.publishedAt &&
                      ` · ${new Date(snippet.publishedAt).toLocaleDateString()}`}
                  </p>
                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">
                    {snippet?.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default SearchResults;
