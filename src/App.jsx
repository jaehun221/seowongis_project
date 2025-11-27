// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";
import About from "./pages/about/About";

// Business 레이아웃 + 각 세부 페이지
import Business from "./pages/business/Business";
import BusinessOverview from "./pages/business/BusinessOverview";
import SpatialInfo from "./pages/business/SpatialInfo";
import UndergroundSurvey from "./pages/business/UndergroundSurvey";
import DroneSurvey from "./pages/business/DroneSurvey";
import DroneLiDAR from "./pages/business/DroneLiDAR";
import AerialPhotoAnalysis from "./pages/business/AerialPhotoAnalysis";
import LandUseDB from "./pages/business/LandUseDB";
import Water3DModel from "./pages/business/Water3DModel";
import TechTransfer from "./pages/business/TechTransfer";
import GroundInvestigation from "./pages/business/GroundInvestigation";

import Equipment from "./pages/equipment/Equipment";
import Recruit from "./pages/recruit/Recruitment";
import News from "./pages/news";

export default function App() {
  return (
    <Router>
      <Header />

      <main>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* About group */}
          <Route path="/about/*" element={<About />} />

          {/* Business group - 중첩 라우팅 */}
          <Route path="/business" element={<Business />}>
            {/* /business : 대표 개요 페이지 */}
            <Route index element={<BusinessOverview />} />

            {/* /business/... : 각 세부 페이지 */}
            <Route path="spatial-info" element={<SpatialInfo />} />
            <Route path="underground-survey" element={<UndergroundSurvey />} />
            <Route path="drone-survey" element={<DroneSurvey />} />
            <Route path="drone-lidar" element={<DroneLiDAR />} />
            <Route
              path="aerial-photo-analysis"
              element={<AerialPhotoAnalysis />}
            />
            <Route path="landuse-db" element={<LandUseDB />} />
            <Route path="water-3d-model" element={<Water3DModel />} />
            <Route path="tech-transfer" element={<TechTransfer />} />
            <Route
              path="ground-investigation"
              element={<GroundInvestigation />}
            />
          </Route>

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
