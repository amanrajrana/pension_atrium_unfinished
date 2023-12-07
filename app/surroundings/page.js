import { H1 } from "@/Components/common/Headings";
import Main from "@/Components/common/Main";
import Surroundings from "@/Components/surroundings/Surroundings";

const page = () => {
  return (
    <Main>
      <H1 className="text-center">Surroundings</H1>
      <Surroundings />
    </Main>
  );
};

export default page;
