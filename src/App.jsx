import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Section from "./pages/Section";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/section/:sectionName" element={<Section />} />
    </Routes>
  );
}
