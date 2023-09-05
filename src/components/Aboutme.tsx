import { PrismicRichText, useSinglePrismicDocument } from "@prismicio/react";
const Aboutme = () => {
  const [AboutMe] = useSinglePrismicDocument("aboutme2");

  return (
    <div className="w-full flex lg:mt-64 sm:mt-10 items-center justify-end">
      <div></div>

      <div className="flex flex-col text-white lg:mr-[450px] ">
        <h1 className="text-5xl text-white font-poppins">About me </h1> {"\n"}
        <div className="font-poppins text-m">
          <PrismicRichText field={AboutMe?.data.text} />
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
