import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-start gap-2 rounded-lg px-2 py-2 hover:bg-slate-100">
      <img
        className="h-8 w-8 shrink-0 rounded-full object-cover"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAEuVX1VtOECyLb-tpACXqDGz6HY-UJC8FtR06KlhzFA&s=10"
        alt=""
      />
      <div className="min-w-0 text-sm leading-5">
        <span className="mr-1 font-semibold text-slate-700">{name}</span>
        <span className="break-words text-slate-900">{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
