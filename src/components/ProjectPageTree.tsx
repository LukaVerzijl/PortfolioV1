import React, { useEffect } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import Footer from "./Footer";
import gsap from "gsap";
import BlobComponent from "./BlobComponent";
import { client } from "../prismic";
import { useQuery } from "@tanstack/react-query";

export default function ProjectPageTree() {
  //get with current url as id
  const { data } = useQuery({
    queryKey: ["project"],
    queryFn: () =>
      client.getByUID(
        "projects",
        window.location.pathname.split("/").pop() || "",
      ),
  });
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
    // GSAP animations
    gsap.fromTo(
      ".fade-in-text",
      {
        opacity: 0,
      },
      { opacity: 1, duration: 1, delay: 1.5, stagger: 0.2 },
    );
    gsap.fromTo(
      ".fade-in-button",
      {
        opacity: 0,
      },
      { opacity: 1, duration: 1, delay: 2.5, stagger: 0.2 },
    );

    gsap.fromTo(
      ".fade-scale-image",
      {
        opacity: 0.6,
        scale: 0,
        duration: 1,
      },
      { opacity: 1, scale: 1, duration: 2.5, delay: 0.5, ease: "power4.out" },
    );
  }, []);
  return (
    <>
      <main>
        <div className="bg-[#222831] page" style={{ height: "100vh" }}>
          <div className="flex flex-wrap justify-center h-[550px] w-full">
            <div className="absolute mt-6 fade-scale-image ">
              <BlobComponent />
            </div>
            <div
              className="text-white w-3/4 h-96 mt-24 rounded-3xl shadow-3xl  bg-cover flex justify-center items-center fade-scale-image"
              style={{ backgroundImage: `url(${data?.data.image.url})` }}
            >
              <h1 className="text-center font-bold text-6xl pl-12 fade-in-text">
                {data?.data.title[0].text}
              </h1>
            </div>
          </div>
          <div className="container md:mx-52 px-8 md:px-0 pt-8 md:pt-0 fade-in-text">
            <Link
              to={"/"}
              className="flex items-center space-x-2 text-white py-4"
            >
              <IoIosArrowRoundBack className="w-9 h-9" />
              Back
            </Link>
            <div className="md:w-full md:flex">
              <div className="md:w-2/3 md:mr-12 w-full">
                <h1 className="text-white font-poppins text-2xl mt-4">
                  About the project:
                </h1>
                <div className="mt-5  mb-14">
                  {data?.data.detailedinfo.map((info) => {
                    return (
                      <p className="text-white font-poppins text-md">
                        {info.text}
                      </p>
                    );
                  })}
                </div>

                <h1 className="text-white font-poppins text-2xl mt-4">
                  Technologies used:
                </h1>

                <div className="mt-5 ">
                  {/* map as list */}
                  <table>
                    {data?.data.technologies.map((tech) => {
                      return (
                        <li
                          className="text-white font-poppins text-md"
                          key={tech.text}
                        >
                          {tech.text}
                        </li>
                      );
                    })}
                  </table>
                </div>
              </div>
              {/* link naar project */}
              <div className="md:w-1/3 w-full">
                <a href={data?.data.link.url}>
                  <button className="text-white font-bold py-4 px-6 rounded-3xl p-6 outline fade-in-button">
                    Visit Project
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
