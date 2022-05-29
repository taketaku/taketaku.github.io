import type { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
  value: number;
  size?: string;
  thickness?: string;
};

export const RadialProgress: FC<Props> = ({
  children,
  value,
  size = "7rem",
  thickness = "7px",
}) => {
  const displayedValue = Math.min(100, Math.max(0, value));

  const progressStyle: Record<string, string | number> = {
    "--value": displayedValue,
    "--size": size,
    "--thickness": thickness,
  };
  return (
    <div
      className="radial-progress bg-accent text-accent-content border-4 border-accent"
      style={progressStyle}
    >
      {children}
    </div>
  );
};
