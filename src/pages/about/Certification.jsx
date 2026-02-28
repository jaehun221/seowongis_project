// src/Certification.jsx
import React from "react";
import "./certification.css";
import cert1 from "../../assets/images/about/cert01.png";
import cert2 from "../../assets/images/about/cert02.png";
import cert3 from "../../assets/images/about/cert03.png";
import cert4 from "../../assets/images/about/cert04.png";
import cert5 from "../../assets/images/about/cert05.png";
import cert6 from "../../assets/images/about/cert06.png";
import cert7 from "../../assets/images/about/cert07.png";
import cert8 from "../../assets/images/about/cert08.png";
import cert9 from "../../assets/images/about/cert09.png";
import cert10 from "../../assets/images/about/cert10.png";
import cert11 from "../../assets/images/about/cert11.png";
import cert12 from "../../assets/images/about/cert12.png";
import cert13 from "../../assets/images/about/cert13.png";
import cert14 from "../../assets/images/about/cert14.png";
import cert15 from "../../assets/images/about/cert15.png";
import cert16 from "../../assets/images/about/cert16.png";
import cert17 from "../../assets/images/about/cert17.png";
import cert18 from "../../assets/images/about/cert18.png";
import t01 from "../../assets/images/about/t01.png";
import t02 from "../../assets/images/about/t02.png";
import t03 from "../../assets/images/about/t03.png";
import t04 from "../../assets/images/about/t04.png";
import t05 from "../../assets/images/about/t05.png";
import t06 from "../../assets/images/about/t06.png";
import t07 from "../../assets/images/about/t07.png";
import t08 from "../../assets/images/about/t08.png";
import t09 from "../../assets/images/about/t09.png";
import t10 from "../../assets/images/about/t10.png";


/* ── 인증 및 등록 현황 (Certifications & Registrations) ── */
const certifications = [
  {
    id: 1,
    title: "초경량비행장치사용사업 등록",
    desc: "등록번호: 제2020-6호 (서울지방항공청장, 2020.01.15 등록)",
    img: cert10,
  },
  {
    id: 2,
    title: "측량업등록증",
    desc: "등록번호: 11-000508호 (국토지리정보원장, 2020.01.23 등록)",
    img: cert1,
  },
  {
    id: 3,
    title: "측량업등록증",
    desc: "등록번호: 03-001197호 (충청남도지사, 2020.10.14 등록)",
    img: cert18,
  },
  {
    id: 4,
    title: "측량업등록증",
    desc: "등록번호: 09-0000752호 (국토지리정보원장, 2020.10.19 등록)",
    img: cert2,
  },
  {
    id: 5,
    title: "측량업등록증",
    desc: "등록번호: 08-0001449호 (국토지리정보원장, 2021.01.15 등록)",
    img: cert3,
  },
  {
    id: 6,
    title: "측량업등록증",
    desc: "등록번호: 07-0001117호 (국토지리정보원장, 2021.08.17 등록)",
    img: cert4,
  },
  {
    id: 7,
    title: "측량업등록증",
    desc: "등록번호: 01-0000257호 (국토지리정보원장, 2024.03.21 등록)",
    img: cert5,
  },
  {
    id: 8,
    title: "건설기술용역업 등록증",
    desc: "등록번호: 충남-2-233호 (충청남도지사, 2020.12.21 등록)",
    img: cert17,
  },
  {
    id: 9,
    title: "측량업등록증",
    desc: "등록번호: 05-000086호 (국토지리정보원장, 2025.08.14 등록)",
    img: cert6,
  },
  {
    id: 10,
    title: "엔지니어링사업자 신고증 (토질/지질)",
    desc: "신고번호: 20250528-5G-0600032427 (한국엔지니어링협회, 2025.05.28 신고)",
    img: cert15,
  },
  {
    id: 11,
    title: "중소기업 확인서",
    desc: "확인번호: 0010-2021-175472 (중소벤처기업부, 2021.04.13 확인)",
    img: cert16,
  },
  {
    id: 12,
    title: "벤처기업 확인서",
    desc: "확인번호: 20220210030051 (벤처기업협회, 2022.02.27 ~ 2025.02.26)",
    img: cert8,
  },
  {
    id: 13,
    title: "소프트웨어사업자 확인서",
    desc: "확인번호: B21-2200085 (한국소프트웨어산업협회, 2021.05.10 확인)",
    img: cert11,
  },
  {
    id: 14,
    title: "신용평가등급 확인서",
    desc: "등급: BB+ (한국평가데이터, GCT-2025-14418)",
    img: cert13,
  },
  {
    id: 15,
    title: "기업부설연구소 인정서",
    desc: "인정번호: 제20201111101호 (과학기술정보통신부, 2020.02.25 인정)",
    img: cert7,
  },
  {
    id: 16,
    title: "벤처기업 확인서",
    desc: "벤처기업 인증 갱신",
    img: cert9,
  },
  {
    id: 17,
    title: "소프트웨어사업자 확인서",
    desc: "소프트웨어사업자 확인 갱신",
    img: cert12,
  },
  {
    id: 18,
    title: "안전보건경영시스템 (ISO 45001)",
    desc: "인증번호: OHI050724 (ICR, 2024.04.05 ~ 2027.04.04)",
    img: cert14,
  },
];

/* ── 특허권 현황 (Patents) ── */
const patents = [
  {
    id: 19,
    title: "특허증",
    desc: "특허 제10-2408570호 (2022.06.09 등록)",
    img: t01,
  },
  {
    id: 20,
    title: "특허증",
    desc: "특허 제10-2477365호 (2022.12.09 등록)",
    img: t02,
  },
  {
    id: 21,
    title: "특허증",
    desc: "특허 제10-2477366호 (2022.12.09 등록)",
    img: t03,
  },
  {
    id: 22,
    title: "특허증",
    desc: "특허 제10-2688744호 (2024.07.23 등록)",
    img: t04,
  },
  {
    id: 23,
    title: "특허증",
    desc: "특허 제10-2688745호 (2024.07.23 등록)",
    img: t05,
  },
  {
    id: 24,
    title: "특허증",
    desc: "특허 제10-2734975호 (2024.11.22 등록)",
    img: t06,
  },
  {
    id: 25,
    title: "특허증",
    desc: "특허 제10-2723146호 (2024.10.24 등록)",
    img: t07,
  },
  {
    id: 26,
    title: "특허증",
    desc: "특허 제10-2737543호 (2024.11.28 등록)",
    img: t08,
  },
  {
    id: 27,
    title: "특허증",
    desc: "특허 제10-2737537호 (2024.11.28 등록)",
    img: t09,
  },
  {
    id: 28,
    title: "특허증",
    desc: "특허 제10-2887855호 (2025.11.13 등록)",
    img: t10,
  },
];


const Certification = () => {
  const [activeTab, setActiveTab] = React.useState("cert");

  return (
    <div className="cert-page">
      <div className="cert-hero">
        <h1 className="certification-title">주요 인증현황</h1>
        <div className="certification-title-line"></div>
        <p>
          ㈜서원공간정보의 신뢰성과 전문성을 보여주는 각종 인증·등록·확인서 및
          특허권입니다.
        </p>
      </div>

      <div className="cert-tabs">
        <button
          className={`cert-tab-btn${activeTab === "cert" ? " cert-tab-btn--active" : ""}`}
          onClick={() => setActiveTab("cert")}
        >
          인증 및 등록 현황
        </button>
        <button
          className={`cert-tab-btn cert-tab-btn--patent${activeTab === "patent" ? " cert-tab-btn--active cert-tab-btn--patent-active" : ""}`}
          onClick={() => setActiveTab("patent")}
        >
          특허권 현황
        </button>
      </div>

      {activeTab === "cert" && (
        <section className="cert-section">
          <div className="cert-section-header">
            <span className="cert-section-badge cert-section-badge--cert">
              인증
            </span>
            <h2 className="cert-section-title">인증 및 등록 현황</h2>
            <p className="cert-section-subtitle">
              측량업, 엔지니어링, 소프트웨어 등 사업 수행에 필요한 공식 인증 및
              등록 현황입니다.
            </p>
          </div>

          <div className="cert-grid">
            {certifications.map((cert) => (
              <div className="cert-card" key={cert.id}>
                <div className="cert-image-wrapper">
                  <img
                    src={cert.img}
                    alt={cert.title}
                    className="cert-image"
                  />
                </div>
                <div className="cert-info">
                  <h2>{cert.title}</h2>
                  {cert.desc && <p>{cert.desc}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {activeTab === "patent" && (
        <section className="cert-section cert-section--patents">
          <div className="cert-section-header">
            <span className="cert-section-badge cert-section-badge--patent">
              특허
            </span>
            <h2 className="cert-section-title">특허권 현황</h2>
            <p className="cert-section-subtitle">
              공간영상정보도화, 수치지도제작, 측지측량 분야의 등록 특허입니다.
            </p>
          </div>

          <div className="cert-grid">
            {patents.map((patent) => (
              <div className="cert-card cert-card--patent" key={patent.id}>
                <div className="cert-image-wrapper cert-image-wrapper--patent">
                  <img
                    src={patent.img}
                    alt={patent.title}
                    className="cert-image"
                  />
                </div>
                <div className="cert-info">
                  <h2>{patent.title}</h2>
                  {patent.desc && <p>{patent.desc}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Certification;
