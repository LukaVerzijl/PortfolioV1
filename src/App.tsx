import { Route, Routes, useLocation } from "react-router-dom";
import WebTree from "./components/WebTree";
import ProjectPageTree from "./components/ProjectPageTree";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const location = useLocation();
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" key={"home"} element={<WebTree />} />
        <Route path="/project/:name" element={<ProjectPageTree />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
