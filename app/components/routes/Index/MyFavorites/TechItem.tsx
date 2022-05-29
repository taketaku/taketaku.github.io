import type { FC } from "react";
import tw from "tailwind-styled-components";

import { RadialProgress } from "@/components/shared/RadialProgress";

export type Props = {
  children?: never;
  title: string;
  percentage: number;
};

export const TechItem: FC<Props> = ({ percentage, title }) => {
  return (
    <Wrapper>
      <div className="mb-8">
        <RadialProgress value={percentage}>{percentage}%</RadialProgress>
      </div>
      <div className="text-center">
        <p className="text-xl text-white font-bold mb-2">{title}</p>
        <p className="text-base text-gray-400 font-normal">
          ________________________________________
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = tw.div`
	w-full
	bg-gray-900
	rounded-lg
	sahdow-lg
	p-12
	flex
	flex-col
	justify-center
	items-center
`;
