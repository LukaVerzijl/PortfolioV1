import { PrismicRichText } from "@prismicio/react";
import BlobComponent from "./BlobComponent";
import { client } from "../prismic";
import { useQuery } from "@tanstack/react-query";
const Aboutme = () => {
  const { data } = useQuery({
    queryKey: ["AboutMe"],
    queryFn: () => client.getSingle("aboutme2"),
  });

  return (
    <div
      className="w-full flex lg:mt-64 sm:mt-10 items-center justify-end"
      id="aboutme"
    >
      <div></div>
      <div className="flex flex-col text-white lg:mr-[150px] ">
        <h1 className="text-5xl text-white font-poppins">About me </h1> {"\n"}
        <div className="font-poppins text-m">
          <PrismicRichText field={data?.data.text} />
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
