import { PrismicRichText, useSinglePrismicDocument } from "@prismicio/react";
const Aboutme = () => {
  const [AboutMe] = useSinglePrismicDocument("aboutme2");

  return (
    <div
      className="w-full flex justify-evenly flex-row lg:mt-64 sm:mt-10 items-center"
      id="trigger-1"
    >
      <div>
        <div></div>
      </div>

      <div className="flex flex-col text-white ">
        <h1 className="text-5xl text-white font-poppins">About me </h1> {"\n"}
        <div className="font-poppins text-m">
          <PrismicRichText field={AboutMe?.data.text} />
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
