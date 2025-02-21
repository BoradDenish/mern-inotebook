import React from "react";

const Alert = ({ message, type, onClose }) => {
  const alertStyles = {
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
    warning: "bg-yellow-500 text-black",
    info: "bg-blue-500 text-white",
  };

  return (
    <div className={`p-4 rounded-md ${alertStyles[type]} flex justify-between items-center`}>
      <span>{message}</span>
      <button onClick={onClose} className="text-lg font-bold">&times;</button>
    </div>
  );
};

export default Alert;
