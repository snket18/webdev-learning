import React from "react";
export const Button = ({
  disabled,
  children,
  onClick,
  type = "text",
  placeholder
}) => {
  return (
    <button
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      className={`rounded-2xl text-4xl px-32 py-8 text-white cursor-pointer
        ${disabled ? "bg-blue-200" : "bg-green-400"}`}
    >
      {children}
      <input type={type} placeholder={placeholder} />
    </button>
  );
};


