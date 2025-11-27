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
import cert19 from "../../assets/images/about/cert19.png";
import cert20 from "../../assets/images/about/cert20.png";
import cert21 from "../../assets/images/about/cert21.png";
import cert22 from "../../assets/images/about/cert22.png";
import cert23 from "../../assets/images/about/cert23.png";
import cert24 from "../../assets/images/about/cert24.png";
import cert25 from "../../assets/images/about/cert25.png";
import cert26 from "../../assets/images/about/cert26.png";
import cert27 from "../../assets/images/about/cert27.png";


// public/certifications/cert1.png 식으로 저장했다고 가정
const certifications = [
  {
    id: 1,
    title: "측량업등록증",
    desc: "공공측량, 지하시설물측량 등",
    img: cert1,
  },
  {
    id: 2,
    title: "엔지니어링사업자신고증 (토질/지질)",
    desc: "엔지니어링사업자 신고",
    img: cert2,
  },
  {
    id: 3,
    title: "기업부설연구소 인정서",
    desc: "연구개발 전담 조직",
    img: cert3,
  },
  {
    id: 4,
    title: "중소기업 확인서",
    desc: "중소기업 현황 인증",
    img: cert4,
  },
  {
    id: 5,
    title: "벤처기업 확인서",
    desc: "기술성/사업성 평가",
    img: cert5,
  },
  {
    id: 6,
    title: "소프트웨어사업자 확인서",
    desc: "SW사업 수행 자격",
    img: cert6,
  },
  {
    id: 7,
    title: "안전보건경영시스템 (ISO 45001)",
    desc: "안전보건경영 국제표준",
    img: cert7,
  },
  {
    id: 8,
    title: "인증서 8",
    desc: "",
    img: cert8,
  },
  {
    id: 9,
    title: "인증서 9",
    desc: "",
    img: cert9,
  },
  {
    id: 10,
    title: "인증서 10",
    desc: "",
    img: cert10,
  },
  {
    id: 11,
    title: "인증서 11",
    desc: "",
    img: cert11,
  },
  {
    id: 12,
    title: "인증서 12",
    desc: "",
    img: cert12,
  },
  {
    id: 13,
    title: "인증서 13",
    desc: "",
    img: cert13,
  },
  {
    id: 14,
    title: "인증서 14",
    desc: "",
    img: cert14,
  },
  {
    id: 15,
    title: "인증서 15",
    desc: "",
    img: cert15,
  },
  {
    id: 16,
    title: "인증서 16",
    desc: "",
    img: cert16,
  },
  {
    id: 17,
    title: "인증서 17",
    desc: "",
    img: cert17,
  },
  {
    id: 18,
    title: "인증서 18",
    desc: "",
    img: cert18,
  },
  {
    id: 19,
    title: "인증서 19",
    desc: "",
    img: cert19,
  },
  {
    id: 20,
    title: "인증서 20",
    desc: "",
    img: cert20,
  },
  {
    id: 21,
    title: "인증서 21",
    desc: "",
    img: cert21,
  },
  {
    id: 22,
    title: "인증서 22",
    desc: "",
    img: cert22,
  },
  {
    id: 23,
    title: "인증서 23",
    desc: "",
    img: cert23,
  },
  {
    id: 24,
    title: "인증서 24",
    desc: "",
    img: cert24,
  },
  {
    id: 25,
    title: "인증서 25",
    desc: "",
    img: cert25,
  },
  {
    id: 26,
    title: "인증서 26",
    desc: "",
    img: cert26,
  },
  {
    id: 27,
    title: "인증서 27",
    desc: "",
    img: cert27,
  },
];


const Certification = () => {
  return (
    <div className="cert-page">
      <div className="cert-hero">
        <h1 className="certification-title">주요 인증현황</h1>
        <div className="certification-title-line"></div>
        <p>
          서원공간정보의 신뢰성과 전문성을 보여주는 각종 인증·등록·확인서입니다. 
        </p>
      </div>

      <div className="cert-grid">
        {certifications.map((cert) => (
          <div className="cert-card" key={cert.id}>
            <div className="cert-image-wrapper">
              <img src={cert.img} alt={cert.title} className="cert-image" />
            </div>
            <div className="cert-info">
              <h2>{cert.title}</h2>
              {cert.desc && <p>{cert.desc}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certification;
