import type { FC } from "react";

import { Section } from "@/components/shared/Section";
import { Data1 } from "./Data1";
import { Data2 } from "./Data2";
import { Data3 } from "./Data3";
import { Data4 } from "./Data4";

type Props = {
  children?: never;
};

export const SampleApps: FC<Props> = (props) => {
  return (
    <Section title="Sample Apps">
      <Data1 />
      <Data2 />
      <Data3 />
      <Data4 />
    </Section>
  );
};
