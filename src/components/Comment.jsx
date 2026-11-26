import React from "react";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
      <img
        className="h-10 w-10 shrink-0 rounded-full object-cover"
        src="https://yt3.ggpht.com/ytc/AIdro_n6uXwQUZQrJSqgJ6ZF2m7yPyU86vA2cV06lZe_vIJ30N0POsPL-swpaX5qoZBX-P1M2A=s88-c-k-c0x00ffffff-no-rj"
        alt=""
      />

      <div className="min-w-0">
        <p className="text-sm font-semibold text-slate-900">{name}</p>
        <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
      </div>
      {/* {replies.map((reply) => {
        return <Comment key={index} data={comment} />;
      })} */}
    </div>
  );
};

export default Comment;
