import Hero from "@/Components/home/Hero";
import ImageGrid from "@/Components/home/ImageGrid";
import Amenities from "@/Components/home/Amenities";
import Main from "@/Components/common/Main";

export default function Home() {
  return (
    <Main className="2xl:space-y-12">
      <Hero />
      <div className="sm:mt-12 xl:mt-6">
        <ImageGrid />
      </div>
      <Amenities />
    </Main>
  );
}
