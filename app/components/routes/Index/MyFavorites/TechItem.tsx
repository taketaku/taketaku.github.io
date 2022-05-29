import type { FC } from "react";
import { RadialProgress } from "react-daisyui";
import tw from "tailwind-styled-components";

export type Props = {
  children?: never;
  title: string;
  percentage: number;
};

export const TechItem: FC<Props> = ({ percentage, title }) => {
  return (
    <Wrapper>
      <div className="mb-8">
        <RadialProgress
          value={percentage}
          size={"7rem"}
          thickness={"0.5rem"}
          className="bg-accent text-accent-content border-4 border-accent"
        >
          {percentage}%
        </RadialProgress>
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
