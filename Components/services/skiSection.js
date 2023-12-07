import {
  ContentContainer,
  H2,
  ResponsiveImage,
  Section,
} from "./contentComponents.js.js";
import { FaSkiing } from "react-icons/fa";

const SkiSection = () => {
  const SKI_BUS_MAP = [
    "Ski park Mladé Buky (8 km)",
    "Ski resort Černá Hora (14 km)",
    "Ski area Petříkovice (9 km)",
    "Ski area Žacléř (15 km)",
  ];
  return (
    <Section>
      <ResponsiveImage image="/images/gallery/ser3.png" />

      <ContentContainer>
        <H2>Ski Resorts close to Trutnov</H2>
        <p>
          For group consisting of 20 people or more we offer free ski bus to
          these resorts (map):
        </p>

        <ul className="text-[21px] text-lg 3xl:text-2xl space-y-4">
          {SKI_BUS_MAP.map((text, index) => (
            <li className="flex items-center gap-x-4" key={index}>
              <FaSkiing size={32} />
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </ContentContainer>
    </Section>
  );
};

export default SkiSection;
