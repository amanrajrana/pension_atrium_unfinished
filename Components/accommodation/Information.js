import text from "@/public/text.json";
import { H2 } from "@/Components/common/Headings";
const Information = () => {
  const { Info_t2 } = text;

  // Split the text into an array of words
  const words = Info_t2.split(" ");
  return (
    <div className="mt-10 w-full text-gray-800">
      <H2 className="text-2xl-custom 3xl:text-4xl mb-6">{text.Info}</H2>
      <div className="3xl:text-2xl mb-4">{text.Info_t1}</div>
      <div className="mb-4 3xl:text-2xl">
        {words.map((word, index) => (
          <span
            key={index}
            className={word === "20CZK" ? "text-customblue font-bold" : ""}
          >
            {word}{" "}
          </span>
        ))}
      </div>
    </div>
  );
};
export default Information;
