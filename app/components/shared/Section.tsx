import type { FC, ReactNode } from "react";
import tw from "tailwind-styled-components";

type Props = {
  title: string;
  subTitle?: string;
  children: ReactNode;
};

export const Section: FC<Props> = ({ title, subTitle, children }) => {
  return (
    <Wrapper>
      <div className="container xl:max-w-6xl mx-auto px-4">
        <header className="text-center mx-auto mb-11 lg:px-20">
          <h2 className="text-2xl leading-normal mb-2 font-bold text-white">
            {title}
          </h2>
          {subTitle && (
            <p className="text-white leading-relaxed font-light text-xl mx-auto pb-2">
              {subTitle}
            </p>
          )}
        </header>
      </div>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        {children}
      </section>
    </Wrapper>
  );
};

const Wrapper = tw.div`
	mb-12
`;
