import axios from "axios";
import { useState, useEffect } from "react";

const STRAPIURL = import.meta.env.VITE_STRAPIURL;
const STRAPIKEY = import.meta.env.VITE_STRAPIKEY;

const Aboutme = () => {
  const [aboutmeinfo, setAboutMeInfo] = useState(null);

  useEffect(() => {
    axios
      .get(`${STRAPIURL}/api/aboutmes/2`, {
        headers: { Authorization: `Bearer ${STRAPIKEY}` },
      })
      .then((res) => {
        setAboutMeInfo(res.data.data.attributes.AboutText);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      {aboutmeinfo ? (
        <div>
          <p className="text-white">{aboutmeinfo}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Aboutme;
