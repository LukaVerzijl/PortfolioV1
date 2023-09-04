import { PrismicRichText, useSinglePrismicDocument } from "@prismicio/react";
const Aboutme = () => {
  const [AboutMe] = useSinglePrismicDocument("aboutme2");

  return (
    <div
      className="w-full flex lg:mt-64 sm:mt-10 items-center justify-center"
      id="trigger-1"
    >
      <div>
        <div>
          <img
            src="/placeholder.jpg"
            className=" w-[500px] flex left-0 left mx-auto mr-72 rounded-2xl shadow-2xl"
          />
        </div>
      </div>

      <div className="flex flex-col text-white ml-60 ">
        <h1 className="text-5xl text-white font-poppins">About me </h1> {"\n"}
        <div className="font-poppins text-m">
          <PrismicRichText field={AboutMe?.data.text} />
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
