import { useState, useEffect } from "react";
import axios from "axios";

const LASTFM_API_KEY = import.meta.env.VITE_LASTFMKEY;
const LASTFM_USERNAME = import.meta.env.VITE_LASTFMUSER;

function Latestsong() {
  const [lastPlayedSong, setLastPlayedSong] = useState<any>(null); // Use 'any' type for now

  useEffect(() => {
    // Make a request to the Last.fm API
    axios
      .get(
        `https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${LASTFM_USERNAME}&api_key=${LASTFM_API_KEY}&format=json`
      )
      .then((response) => {
        const recentTracks = response.data.recenttracks.track;
        const lastTrack = recentTracks[0];
        setLastPlayedSong(lastTrack);
      })
      .catch((error) => {
        console.error("Error fetching data from Last.fm API:", error);
      });
  }, []);

  return (
    <div className="App">
      <div>
        {lastPlayedSong ? (
          <div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
              <a href="https://www.last.fm/user/Redlucraft">
                <p className="font-poppins text-white text-l">
                  Last Played Song: {lastPlayedSong.name}, by:{" "}
                  {lastPlayedSong.artist["#text"]}
                </p>
              </a>
            </div>
          </div>
        ) : (
          <p className="font-poppins text-white text-l">Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Latestsong;
