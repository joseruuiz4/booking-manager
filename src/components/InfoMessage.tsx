import React from "react";

interface Props {
  message: string;
  type: String;
  onClose: () => void;
}

function InfoMessage({ message, type = "info", onClose }: Props) {
  return (
    <div
      className={`py-2 px-4 rounded-md text-center fixed bottom-4 right-4 flex gap-4 ${
        type === "success"
          ? "bg-green-500 text-white"
          : type === "error"
          ? "bg-red-500 text-white"
          : "bg-blue-500 text-white"
      }`}
    >
      <p>{message}</p>
      <span className="cursor-pointer font-bold" onClick={onClose}>
        <sup>X</sup>
      </span>
    </div>
  );
}

export default InfoMessage;
