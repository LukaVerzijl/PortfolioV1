import { PrismicRichText, useSinglePrismicDocument } from "@prismicio/react";
const Aboutme = () => {
  const [test] = useSinglePrismicDocument("test");

  return (
    <div className="w-full flex justify-evenly flex-row lg:mt-32 sm:mt-10 items-center">
      <div>
        <div></div>
      </div>

      <div className="flex text-white ">
        <h1>About me </h1> {"\n"}
        <section>
          <PrismicRichText field={test?.data.test} />
        </section>
      </div>
    </div>
  );
};

export default Aboutme;
