import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Section from "./pages/Section";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/section/:sectionName" element={<Section />} />
      <Route path="/search/:searchQuery" element={<Search />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
