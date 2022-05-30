import type { FC, ReactNode } from "react";
import { useState } from "react";
import tw from "tailwind-styled-components";

type Props = {
  title: string;
  children?: ReactNode;
};

export const Collapse: FC<Props> = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper $open={open}>
      <div
        className="collapse-title text-xl font-medium"
        onClick={() => {
          console.log(open);

          setOpen(!open);
        }}
      >
        {title}
      </div>
      <div className="collapse-content">{children}</div>
    </Wrapper>
  );
};

type WrapperProps = {
  $open: boolean;
};

const Wrapper = tw.div<WrapperProps>`
	collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-4
  ${(p: WrapperProps) => (p.$open ? "collapse-open" : "collapse-close")}
`;
