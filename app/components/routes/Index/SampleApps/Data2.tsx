import type { FC } from "react";
import { Collapse } from "@/components/shared/Collapse";

type Props = {
  children?: never;
};

export const Data2: FC<Props> = (props) => {
  return (
    <Collapse title="NomadJapan (WIP)">
      <p className="mb-4">
        <a
          href="https://www.nomadjapan.page/"
          target="_blank"
          rel="noreferrer"
          className="underline text-primary"
        >
          https://www.nomadjapan.page/
        </a>
      </p>
      <p>技術構成</p>

      <ul className="list-disc ml-3">
        <li>Next.js(Typescript)</li>
        <li>Ruby on Rails</li>
        <li>
          Graphql(apollo client/apollo cache/graphql code
          generator/ruby-graphql/Dataloader)
        </li>
        <li>
          <a
            href="https://en.wikipedia.org/wiki/SPARQL#:~:text=SPARQL%20(pronounced%20%22sparkle%22%20%2F,Description%20Framework%20(RDF)%20format."
            target="_blank"
            rel="noreferrer"
            className="underline text-primary"
          >
            SPARQL
          </a>
        </li>
      </ul>
    </Collapse>
  );
};
