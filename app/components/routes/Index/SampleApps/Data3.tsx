import type { FC } from "react";
import { Collapse } from "@/components/shared/Collapse";

type Props = {
  children?: never;
};

export const Data3: FC<Props> = (props) => {
  return (
    <Collapse title="Leancanvas prayground">
      <p className="mb-4">
        <a
          href="https://leancanvas.info/"
          target="_blank"
          rel="noreferrer"
          className="underline text-primary"
        >
          https://leancanvas.info/
        </a>
      </p>
      <p>技術構成</p>

      <ul className="list-disc ml-3">
        <li>Next.js(Typescript)</li>
        <li>TailwindCSS</li>
        <li>StyledComponents(emotion)</li>
        <li>PWA</li>
      </ul>
    </Collapse>
  );
};
