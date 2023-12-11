import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SectionPage from "./pages/SectionPage/SectionPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import "./index.scss";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/section/:sectionName" element={<SectionPage />} />
      <Route path="/search/:searchQuery" element={<SearchPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
