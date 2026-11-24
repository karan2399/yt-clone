import React from "react";

const Button = ({ name }) => {
  return (
    <div className="m-1 shrink-0 whitespace-nowrap">
      <button className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-900 hover:text-white">
        {name}
      </button>
    </div>
  );
};

export default Button;
