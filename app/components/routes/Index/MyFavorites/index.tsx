import type { FC } from "react";

import { TechItem } from "@/components/routes/Index/MyFavorites/TechItem";
import { Section } from "@/components/shared/Section";

import { items } from "./data";

type Props = {
  children?: never;
};

export const MyFavorites: FC<Props> = (props) => {
  return (
    <Section
      title="Technologies / Frameworks"
      subTitle="My favorite technologies!"
    >
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
    </Section>
  );
};
