import {
  ClimbingIcon,
  FitnessGymIcon,
  GymnasticsIcon,
  PlayerWithBadminton,
  PlayerWithBall,
  RunningIcon,
  SkiTrailsIcon,
  VolleyBallIcon,
} from "@/Components/svg/icons.js";
import {
  ContentContainer,
  H2,
  ResponsiveImage,
  Section,
} from "./contentComponents.js.js";
import { FaPersonRunning } from "react-icons/fa6";

const SportCenterSection = () => {
  const GUEST_OFFER = [
    {
      icon: <PlayerWithBall />,
      text: "Sports Hall",
    },
    {
      icon: <PlayerWithBall />,
      text: "Multipurpose gym",
    },
    {
      icon: <GymnasticsIcon />,
      text: "Gymnastics hall",
    },
    {
      icon: <FitnessGymIcon />,
      text: "Fitness Gym",
    },
    {
      icon: <ClimbingIcon />,
      text: "Climbing Wall",
    },
    {
      icon: <FaPersonRunning size={32} />,
      text: "Athletic stadium",
    },
    {
      icon: <PlayerWithBadminton />,
      text: "Multipurpose court",
    },
    {
      icon: <VolleyBallIcon />,
      text: "Beach volleyball court",
    },
    {
      icon: <RunningIcon />,
      text: "Asphalt circuit",
    },
    {
      icon: <SkiTrailsIcon />,
      text: "Cross-country ski trails",
    },
  ];

  return (
    <Section>
      <ResponsiveImage image="/images/gallery/ser2.png" />
      <ContentContainer>
        <H2>Sports Centre of Komensy School</H2>
        <p>
          In the sports centre of Komenský School, which is located in the very
          neighborhood of our pension (map), we offer to our guests:
        </p>

        <ul className="text-[21px] max-w-2xl text-lg grid sm:grid-cols-2 gap-4">
          {GUEST_OFFER.map((item, index) => (
            <li className="flex items-center gap-x-4" key={index}>
              {item.icon}
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </ContentContainer>
    </Section>
  );
};

export default SportCenterSection;
