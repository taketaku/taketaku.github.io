import type { FC } from "react";

import { TechItem } from "@/components/routes/Index/MyFavorites/TechItem";

import { items } from "./data";

type Props = {
  children?: never;
};

export const MyFavorites: FC<Props> = (props) => {
  return (
    <>
      <div className="container xl:max-w-6xl mx-auto px-4">
        <header className="text-center mx-auto mb-12 lg:px-20">
          <h2 className="text-2xl leading-normal mb-2 font-bold text-white">
            Technologies / Frameworks
          </h2>
          <p className="text-white leading-relaxed font-light text-xl mx-auto pb-2">
            My favorite technologies!
          </p>
        </header>
      </div>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => {
            return (
              <TechItem
                key={item.title}
                title={item.title}
                percentage={item.percentage}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};
