import SurroundingElement from "./SurroundingElement";
import imgAPI from "@/public/images/ImageApi";
import text from "@/public/text.json";

const Surroundings = () => {
  return (
    <article className="space-y-12 lg:space-y-0">
      <SurroundingElement
        heading="Trutnov city Center"
        text={text.surr_1}
        large_img={imgAPI.surr_img[6]}
        isReverse={false}
      />

      <SurroundingElement
        heading="The Krkonoše Mountains National Park"
        text={text.surr_2}
        large_img={imgAPI.surr_img[7]}
        isReverse={true}
      />

      <SurroundingElement
        heading="Adršpach-Teplice rocks"
        text={text.surr_3}
        large_img={imgAPI.surr_img[8]}
        isReverse={false}
      />

      <SurroundingElement
        heading="Kuks"
        text={text.surr_4}
        large_img={imgAPI.surr_img[9]}
        isReverse={true}
      />

      <SurroundingElement
        heading="ZOO Dvůr Králové"
        text={text.surr_5}
        large_img={imgAPI.surr_img[10]}
        isReverse={false}
      />
    </article>
  );
};

export default Surroundings;
