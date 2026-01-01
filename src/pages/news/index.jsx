import { Routes, Route } from "react-router-dom";
import NewsList from "./NewsList";
import NewsDetail from "./NewsDetail";

export default function News() {
  return (
    <Routes>
      <Route path="/" element={<NewsList />} />
      <Route path=":id" element={<NewsDetail />} />
    </Routes>
  );
}
