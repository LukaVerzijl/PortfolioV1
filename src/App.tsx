import Aboutme from "./components/Aboutme";
import HeroBanner from "./components/HeroBanner";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-[#222831] h-screen">
        <div>
          <HeroBanner />
        </div>
        <div className=" mt-44">
          <Aboutme />
        </div>
      </div>
    </>
  );
}

export default App;
