import Hero from "@/Components/Hero";
import ImageGrid from "@/Components/ImageGrid";
import Amenities from "@/Components/Amenities";

export default function Home() {
  return (
    <div className="font-urbanist">
      <Hero />
      <ImageGrid />
      <Amenities />
    </div>
  );
}
