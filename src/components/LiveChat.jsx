import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../slices/chatSlice";
import { generateRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const messages = useSelector((store) => store.chat.messages);

  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const chatInterval = setInterval(() => {
      dispatch(addMessage(generateRandomMessage()));
    }, 1500);

    return () => {
      clearInterval(chatInterval);
    };
  }, []);
  return (
    <div className="flex h-125 w-full flex-col overflow-hidden rounded-xl border border-slate-300 bg-white shadow-sm">
      <div className="border-b border-slate-200 px-4 py-3">
        <h2 className="text-sm font-semibold text-slate-900">Live chat</h2>
      </div>
      <div className="flex flex-1 flex-col-reverse overflow-y-auto bg-slate-50 px-2 py-2">
        {[...messages].reverse().map((message, index) => {
          return (
            <ChatMessage
              key={index}
              name={message.name}
              message={message.message}
            />
          );
        })}
      </div>
      <form
        className="flex gap-2 border-t border-slate-200 p-3"
        onSubmit={(e) => {
          e.preventDefault();
          if (!newMessage.trim()) return;
          dispatch(
            addMessage({
              name: "karan2399",
              message: newMessage.trim(),
            }),
          );
          setNewMessage("");
        }}>
        <input
          className="min-w-0 flex-1 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm outline-none transition placeholder:text-slate-400 focus:border-red-400 focus:ring-2 focus:ring-red-100"
          type="text"
          placeholder="Chat..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          type="submit"
          className="cursor-pointer rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
