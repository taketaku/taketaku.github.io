import { MyFavorites } from "@/components/routes/Index/MyFavorites";
import { Section } from "@/components/shared/Section";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function Index() {
  return (
    <div className="py-20 lg:py-[120px] overflow-hidden relative z-10">
      <Section title="Account / SNS">
        <div className="mx-auto text-center">
          <a
            href="https://github.com/taketaku"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn btn-primary">
              <FontAwesomeIcon icon={faGithub} className="mr-2" />
              Github
            </button>
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=100008052070722"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn btn-primary ml-3">
              <FontAwesomeIcon icon={faFacebook} className="mr-2" />
              Facebook
            </button>
          </a>
        </div>
      </Section>
      <MyFavorites />
    </div>
  );
}
