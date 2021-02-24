import React from "react";

export const Button: React.FC<{ onClick: () => void }> = ({
  children,
  onClick,
}) => {
  return (
    <button onClick={onClick} className="px-2 py-1 bg-blue-300 text-white">
      {children}
    </button>
  );
};
