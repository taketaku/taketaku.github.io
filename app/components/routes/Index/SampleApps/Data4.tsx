import type { FC } from "react";
import { Collapse } from "@/components/shared/Collapse";

type Props = {
  children?: never;
};

export const Data4: FC<Props> = (props) => {
  return (
    <Collapse title="trade off sliders (the backend is stopped)">
      <p className="mb-4">
        <a
          href="https://trade-off-sliders.app/"
          target="_blank"
          rel="noreferrer"
          className="underline text-primary"
        >
          https://trade-off-sliders.app/
        </a>
      </p>
      <p>技術構成</p>

      <ul className="list-disc ml-3">
        <li>Next.js(Typescript)</li>
        <li>Go(no framework)</li>
        <li>Graphql</li>
        <li>Terraform</li>
        <li>AWS</li>
      </ul>
    </Collapse>
  );
};
