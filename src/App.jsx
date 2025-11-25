import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";
import About from "./pages/about/About";
import Business from "./pages/business/Business";
import Equipment from "./pages/equipment/Equipment";
import Recruit from "./pages/recruit/Recruit";
import News from "./pages/news";    // index.jsx를 자동 인식


export default function App() {
  return (
    <Router>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* About group */}
          <Route path="/about/*" element={<About />} />

          {/* Business group */}
          <Route path="/business/*" element={<Business />} />

          {/* Equipment */}
          <Route path="/equipment" element={<Equipment />} />

          {/* News group */}
          <Route path="/news/*" element={<News />} />

          {/* Recruit group */}
          <Route path="/recruit/*" element={<Recruit />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}
