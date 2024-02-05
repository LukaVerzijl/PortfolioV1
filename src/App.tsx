import { Route, Routes, useLocation } from "react-router-dom";
import WebTree from "./components/WebTree";
import ProjectPageTree from "./components/ProjectPageTree";

function App() {
  const location = useLocation();

  return (
    <Routes>
      <Route path="/" key={"home"} element={<WebTree />} />
      <Route path="/project/:name" element={<ProjectPageTree />} />
    </Routes>
  );
}

export default App;
