import Main from "@/Components/common/Main";
import Surroundings from "@/Components/surroundings/Surroundings";

const page = () => {
  return (
    <Main>
      <h1 className="text-center font-bold text-4xlg lg:text-3xlg">
        Surroundings
      </h1>
      <Surroundings />
    </Main>
  );
};

export default page;
