import { Routes, Route } from "react-router-dom";
// import Intro from "./Intro";
import History from "./History";
import Location from "./Location";

export default function About() {
  return (
    <Routes>
      {/* <Route path="/intro" element={<Intro />} /> */}
      <Route path="/history" element={<History />} />
      <Route path="/location" element={<Location />} />
    </Routes>
  );
}
