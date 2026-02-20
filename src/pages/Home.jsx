// home.jsx
import React, { useEffect, useRef, useState } from "react";
import "../index.css";
import mainImg from "../assets/images/main/main.png";
import douDImg from "../assets/images/home/partner/doubleDragon.jpg"
import guktoImg from "../assets/images/home/partner/gukto.png"
import hyundaiS from "../assets/images/home/partner/hyundai_steel.jpeg"
import hyundaiG from "../assets/images/home/partner/hyundaigunseol.svg"
import klpgImg from "../assets/images/home/partner/KLPG.svg"
import seosanLogo from "../assets/images/home/partner/seosan_logo.png"
import chungImg from "../assets/images/home/partner/chung.png"

// ===============================================
// 데이터 정의 (실제 환경에 맞게 경로 확인 필요)
// ===============================================

// 인증 이미지 자동 import
const certificationImageModules = import.meta.glob(
  "../assets/images/home/verify/*.png",
  { eager: true, as: "url" }
);
const CERTIFICATIONS = Object.entries(certificationImageModules).map(
  ([path, url], index) => {
    const fileName = path
      .split("/")
      .pop()
      .replace(/\.(png|jpg|jpeg|gif|svg)$/, "");
    return { id: index + 1, title: fileName, image: url };
  }
);

// 특허 이미지 자동 import
const patentImageModules = import.meta.glob("../assets/images/home/tk/*.png", {
  eager: true,
  as: "url",
});
const PATENTS = Object.entries(patentImageModules).map(([path, url], index) => {
  const fileName = path
    .split("/")
    .pop()
    .replace(/\.(png|jpg|jpeg|gif|svg)$/, "");
  return { id: index + 1, title: fileName, image: url };
});

const PARTNERS = [
  { id: 1, name: "쌍용건설", logo: douDImg },
  { id: 2, name: "서산시", logo: seosanLogo },
  { id: 3, name: "한국LPG사업관리원", logo: klpgImg },
  { id: 4, name: "현대건설", logo: hyundaiG },
  { id: 5, name: "현대제철", logo: hyundaiS },
  { id: 6, name: "국토지리정보원", logo: guktoImg },
  { id: 7, name: "충청남도", logo: chungImg },
];

// ===============================================
// 커스텀 훅: Intersection Observer
// - 첫 진입 트리거 용도 (한 번만 true로 만들고 끝)
// ===============================================
const useOnceVisible = (ref, { threshold = 0.3, rootMargin = "0px" } = {}) => {
  const [onceVisible, setOnceVisible] = useState(false);

  useEffect(() => {
    if (onceVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOnceVisible(true);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, threshold, rootMargin, onceVisible]);

  return onceVisible;
};

export default function Home() {
  // 무한 롤링은 2배 복제가 -50% 기준과 가장 안정적으로 맞습니다.
  const duplicatedCerts = [...CERTIFICATIONS, ...CERTIFICATIONS];
  const duplicatedPatents = [...PATENTS, ...PATENTS];

  const certCarouselRef = useRef(null);
  const patentCarouselRef = useRef(null);

  // "처음 화면에 들어온 순간"만 감지
  const certOnceVisible = useOnceVisible(certCarouselRef, { threshold: 0.3 });
  const patentOnceVisible = useOnceVisible(patentCarouselRef, { threshold: 0.3 });

  // stage(입장 애니메이션) 상태: 처음엔 숨김, 첫 진입 때만 visible
  const [certStage, setCertStage] = useState("hidden-right");
  const [patentStage, setPatentStage] = useState("hidden-left");

  // 무한 롤링은 첫 진입 이후 절대 끄지 않음
  const [isCertActive, setIsCertActive] = useState(false);
  const [isPatentActive, setIsPatentActive] = useState(false);

  // 타이머
  const certEnterTimerRef = useRef(null);
  const patentEnterTimerRef = useRef(null);

  // 인증: 첫 진입 시 입장 애니메이션 1회 → 롤링 시작 → 이후 계속 유지
  useEffect(() => {
    if (!certOnceVisible) return;

    setCertStage("visible");
    certEnterTimerRef.current = setTimeout(() => {
      setIsCertActive(true);
    }, 320);

    return () => {
      if (certEnterTimerRef.current) clearTimeout(certEnterTimerRef.current);
    };
  }, [certOnceVisible]);

  // 특허: 첫 진입 시 입장 애니메이션 1회 → 롤링 시작 → 이후 계속 유지
  useEffect(() => {
    if (!patentOnceVisible) return;

    setPatentStage("visible");
    patentEnterTimerRef.current = setTimeout(() => {
      setIsPatentActive(true);
    }, 320);

    return () => {
      if (patentEnterTimerRef.current) clearTimeout(patentEnterTimerRef.current);
    };
  }, [patentOnceVisible]);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="home-hero">
        <img
          src={mainImg}
          alt="서원공간정보 메인 이미지"
          className="home-hero-img"
        />

        <div className="home-hero-text">
          <h1>
            정확한 데이터로
            <br />
            더 나은 공간정보를 만듭니다
          </h1>
          <p>
            ㈜서원공간정보는 디지털트윈에 필요한 모든 공간정보 구축을 수행합니다.
          </p>
        </div>
      </section>

      {/* 회사 소개 */}
      <section className="home-section home-about">
        <div className="container home-section-inner">
          <div className="home-about-left">
            <h2 className="home-section-title">회사 소개</h2>
            <p className="home-section-subtitle">
              <strong>"하늘의 시선으로 땅을 읽고, 지반의 깊이로 안전을 세웁니다."</strong> 
              <br />
              {/* 공공·민간 분야의 의사결정을 지원하는 전문 공간정보 기업입니다. */}
            </p>

            <p className="home-about-body">
              ㈜서원공간정보는 2019년 충남 서산에 뿌리를 내린 이후, 정밀 데이터 기반의 <strong>공간정보 구축 전문 기업</strong>으로 성장해 왔습니다. 
              우리는 단순한 측량을 넘어, 국토의 효율적 활용과 시민의 안전을 위한 디지털 자산을 만듭니다. <br />
              우리는 최첨단 <strong>드론(UAV) 기술</strong>을 활용한 고정밀 지형도 제작부터, 
              보이지 않는 곳의 사고를 예방하는 <br />
              <strong>지하시설물 측량</strong>, 
              그리고 모든 건설 및 토목 사업의 기초가 되는 <strong>지반조사</strong>까지 아우르는 종합 솔루션을 제공합니다.
            </p>

            <div className="home-about-badges">
              <div className="home-about-badge">
                <span className="badge-label">주요 사업</span>
                <ul>
                  <li>측지측량 및 지형측량</li>
                  <li>지하시설물측량(GIS DB구축)</li>
                  <li>드론을 이용한 수치지형도 및 정사영상제작</li>
                  <li>연안측량</li>
                  <li>지반조사</li>
                </ul>
              </div>
              <div className="home-about-badge">
                <span className="badge-label">핵심 가치</span>
                <ul>
                  <li><strong>Integrity</strong> - 정직한 데이터</li>
                  <li><strong>Continuity</strong> - 공간의 연결</li>
                  <li><strong>Safety</strong> - 내일의 안전</li>
                  <li><strong>Tech-Agility</strong> - 기술적 혁신</li>
                  <li><strong>Human-Growth</strong> - 지역 인재 육성</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="home-about-right">
            <div className="home-about-card">
              <h3>기업 현황</h3>
              <dl>
                <div>
                  <dt>법인명</dt>
                  <dd>주식회사 서원공간정보</dd>
                </div>
                <div>
                  <dt>설립일</dt>
                  <dd>2019년 11월 5일</dd>
                </div>
                <div>
                  <dt>대표자</dt>
                  <dd>문중원</dd>
                </div>
                <div>
                  <dt>소재지</dt>
                  <dd>충청남도 서산시 고운로 275-5, 207호(동문동,동문프라자)</dd>
                </div>
                <div>
                  <dt>주요 업종</dt>
                  <dd>측지측량업, 지하시설물측량업, 공간영상도화업, 수치지도 제작업, 엔지니어링사업자(지반조사)</dd>
                </div>
              </dl>
              <p className="home-about-note">
                서원공간정보는 공간정보 관련 각종 인증과 특허를 기반으로 한
                <br />
                기술 중심의 전문 기업입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 인증 현황 */}
      <section className="home-section home-cert">
        <div className="container">
          <div className="home-section-header">
            <div>
              <h2 className="home-section-title">인증 현황</h2>
              <p className="home-section-subtitle">
                서원공간정보는 기술력과 신뢰성을 인정받은 다양한 인증을 보유하고
                있습니다.
              </p>
            </div>
            <a href="/about/certification" className="btn-outline">
              자세히 보기
            </a>
          </div>
        </div>

        <div className="carousel carousel--right" ref={certCarouselRef}>
          <div className="carousel-stage" data-stage={certStage}>
            <div className={`carousel-track ${isCertActive ? "is-active" : ""}`}>
              {duplicatedCerts.map((cert, index) => (
                <div className="carousel-item" key={`cert-${index}`}>
                  <div className="cert-card">
                    <img src={cert.image} alt={cert.title} className="cert-thumb" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 특허 현황 */}
      <section className="home-section home-patent">
        <div className="container">
          <div className="home-section-header">
            <div>
              <h2 className="home-section-title">특허 현황</h2>
              <p className="home-section-subtitle">
                공간정보 구축과 데이터 처리 기술에 대한 자체 특허로
                <br />
                차별화된 기술 경쟁력을 확보하고 있습니다.
              </p>
            </div>
            <a href="/about/certification" className="btn-outline">
              자세히 보기
            </a>
          </div>
        </div>

        <div className="carousel carousel--left" ref={patentCarouselRef}>
          <div className="carousel-stage" data-stage={patentStage}>
            <div className={`carousel-track ${isPatentActive ? "is-active" : ""}`}>
              {duplicatedPatents.map((pt, index) => (
                <div className="carousel-item" key={`patent-${index}`}>
                  <div className="patent-card">
                    <img src={pt.image} alt={pt.title} className="patent-thumb" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 협력사 */}
      <section className="home-section home-partners">
        <div className="container">
          <div className="home-section-header">
            <div>
              <h2 className="home-section-title">협력사</h2>
              <p className="home-section-subtitle">
                공공기관, 지자체, 엔지니어링사 및 IT기업과의 협업을 통해
                <br />
                더 넓은 영역의 공간정보 서비스를 제공합니다.
              </p>
            </div>
          </div>

          <div className="partners-grid">
            {PARTNERS.map((partner) => (
              <div className="partner-card" key={partner.id}>
                <div className="partner-logo-wrap">
                  <img src={partner.logo} alt={partner.name} className="partner-logo" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
