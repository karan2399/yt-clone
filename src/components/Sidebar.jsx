import { useSelector } from "react-redux";
import { Link } from "react-router";

const Sidebar = () => {
  return (
    <div className="sticky top-[72px] h-[calc(100vh-72px)] w-48 shrink-0 self-start overflow-y-auto border-r border-slate-200 bg-white p-4">
      <ul className="space-y-1">
        <li className="rounded-lg bg-slate-100 px-3 py-2 font-medium text-slate-900 transition hover:bg-slate-200">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="rounded-lg px-3 py-2 text-slate-700 transition hover:bg-slate-100">Shorts</li>
        <li className="rounded-lg px-3 py-2 text-slate-700 transition hover:bg-slate-100">Videos</li>
        <li className="rounded-lg px-3 py-2 text-slate-700 transition hover:bg-slate-100">Live</li>
      </ul>
      <h1 className="mb-2 mt-6 px-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Subscriptions</h1>
      <ul className="space-y-1">
        <li className="rounded-lg px-3 py-2 text-slate-700 transition hover:bg-slate-100">Music</li>
        <li className="rounded-lg px-3 py-2 text-slate-700 transition hover:bg-slate-100">Sports</li>
        <li className="rounded-lg px-3 py-2 text-slate-700 transition hover:bg-slate-100">Gaming</li>
        <li className="rounded-lg px-3 py-2 text-slate-700 transition hover:bg-slate-100">Movies</li>
      </ul>

      <h1 className="mb-2 mt-6 px-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Watch Later</h1>
      <ul className="space-y-1">
        <li className="rounded-lg px-3 py-2 text-slate-700 transition hover:bg-slate-100">Music</li>
        <li className="rounded-lg px-3 py-2 text-slate-700 transition hover:bg-slate-100">Sports</li>
        <li className="rounded-lg px-3 py-2 text-slate-700 transition hover:bg-slate-100">Gaming</li>
        <li className="rounded-lg px-3 py-2 text-slate-700 transition hover:bg-slate-100">Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
