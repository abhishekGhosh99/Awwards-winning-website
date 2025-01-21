import React from "react";

const Button = ({ id, title, rightIcon, leftIcon, containerClass }) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
    >
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div className="">{title}</div>
      </span>
      {rightIcon}
      {leftIcon}
    </button>
  );
};

export default Button;
