import { FC } from "react";
declare var React: { FC: FC };

export const Button: React.FC<{ onClick: () => void }> = ({
  children,
  onClick,
}) => {
  return (
    <button onClick={onClick} className="px-2 py-1 bg-blue-400 text-white">
      {children}
    </button>
  );
};
