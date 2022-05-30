import type { FC } from "react";
import { Collapse } from "@/components/shared/Collapse";

type Props = {
  children?: never;
};

export const Data1: FC<Props> = (props) => {
  return (
    <Collapse title="This website">
      <p className="mb-4">
        here: <span className="underline">https://taketaku.github.io</span>
      </p>
      <p>技術構成</p>

      <ul className="list-disc ml-3">
        <li>
          <a href="https://remix.run/" className="text-primary underline">
            remix/react
          </a>
        </li>
        <li>Typescrpt</li>
        <li>TailwindCSS</li>
        <li>StyledComponents</li>
        <li>
          <a
            href="https://docs.github.com/ja/pages/getting-started-with-github-pages/about-github-pages"
            className="text-primary underline"
          >
            Github pages
          </a>
        </li>
      </ul>
    </Collapse>
  );
};
