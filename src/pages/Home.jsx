import "../index.css";
import mainImg from "../assets/images/main/main.png";

// Dynamically import all certification images
const certificationImageModules = import.meta.glob('../assets/images/home/인증/*.png', { eager: true, as: 'url' });
const CERTIFICATIONS = Object.entries(certificationImageModules).map(([path, url], index) => {
  const fileName = path.split('/').pop().replace(/\.(png|jpg|jpeg|gif|svg)$/, '');
  return {
    id: index + 1,
    title: fileName,
    image: url,
  };
});

// Dynamically import all patent images
const patentImageModules = import.meta.glob('../assets/images/home/특허/*.png', { eager: true, as: 'url' });
const PATENTS = Object.entries(patentImageModules).map(([path, url], index) => {
  const fileName = path.split('/').pop().replace(/\.(png|jpg|jpeg|gif|svg)$/, '');
  return {
    id: index + 1,
    title: fileName,
    image: url,
  };
});

// 협력사 로고 import - 파일 존재 시 추가
// import partnerA from "../assets/images/home/partners/partner-a.png";
// import partnerB from "../assets/images/home/partners/partner-b.png";
// import partnerC from "../assets/images/home/partners/partner-c.png";
// import partnerD from "../assets/images/home/partners/partner-d.png";

const PARTNERS = [
  {
    id: 1,
    name: "공공기관 A",
    logo: null, // 파일 준비 후 추가
  },
  {
    id: 2,
    name: "지자체 B",
    logo: null, // 파일 준비 후 추가
  },
  {
    id: 3,
    name: "엔지니어링사 C",
    logo: null, // 파일 준비 후 추가
  },
  {
    id: 4,
    name: "IT·플랫폼사 D",
    logo: null, // 파일 준비 후 추가
  },
];

export default function Home() {
  // 끊김 없는 무한 롤링을 위해 데이터를 4배로 복제
  const duplicatedCerts = [
    ...CERTIFICATIONS, ...CERTIFICATIONS, ...CERTIFICATIONS, ...CERTIFICATIONS
  ];
  
  const duplicatedPatents = [
    ...PATENTS, ...PATENTS, ...PATENTS, ...PATENTS
  ];

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
            서원공간정보는 항공측량 · 공간데이터 · 정사영상 제작을
            전문으로 합니다.
          </p>
        </div>
      </section>

      {/* 회사 소개 */}
      <section className="home-section home-about">
        <div className="container home-section-inner">
          <div className="home-about-left">
            <h2 className="home-section-title">회사 소개</h2>
            <p className="home-section-subtitle">
              서원공간정보는 공간정보의 기초가 되는 측량과 정밀 데이터 구축을
              통해,
              <br />
              공공·민간 분야의 의사결정을 지원하는 전문 공간정보 기업입니다.
            </p>

            <p className="home-about-body">
              2019년 설립 이후 충청남도 서산을 기반으로 공공측량, 지하시설물
              측량, 수치지도 제작 등
              <br />
              다양한 공간데이터 구축 사업을 수행하며 신뢰성 높은 공간정보
              서비스를 제공하고 있습니다.
              <br />
              축적된 측량 기술력과 정사영상 제작 노하우를 바탕으로, 현장 중심의
              정확한 데이터를 생산합니다.
            </p>

            <div className="home-about-badges">
              <div className="home-about-badge">
                <span className="badge-label">주요 사업</span>
                <ul>
                  <li>공공측량 및 지적·지형 측량</li>
                  <li>지하시설물 측량 및 데이터베이스 구축</li>
                  <li>정사영상(Ortho) 및 공간데이터 제작</li>
                  <li>수치지도 및 공간정보 구축 용역</li>
                </ul>
              </div>
              <div className="home-about-badge">
                <span className="badge-label">핵심 가치</span>
                <ul>
                  <li>정확한 측량 성과와 데이터 품질</li>
                  <li>법·제도 기준을 충족하는 신뢰성</li>
                  <li>공공기관·지자체와의 긴밀한 협업</li>
                  <li>지속적인 기술 개발과 인재 육성</li>
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
                  <dd>㈜서원공간정보</dd>
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
                  <dd>충청남도 서산시 일원</dd>
                </div>
                <div>
                  <dt>주요 업종</dt>
                  <dd>측량업 · 공공측량 · 지하시설물측량 · 수치지도 제작</dd>
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
                서원공간정보는 기술력과 신뢰성을 인정받은 다양한 인증을
                보유하고 있습니다.
              </p>
            </div>
            <a href="/certifications" className="btn-outline">
              자세히 보기
            </a>
          </div>
        </div> 

        {/* Full width carousel */}
        <div className="carousel carousel--right">
          <div className="carousel-track">
            {duplicatedCerts.map((cert, index) => (
              <div className="carousel-item" key={`cert-${index}`}>
                <div className="cert-card">
                  <img src={cert.image} alt={cert.title} className="cert-thumb" />
                </div>
              </div>
            ))}
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
            <a href="/patents" className="btn-outline">
              자세히 보기
            </a>
          </div>
        </div> 

        {/* Full width carousel */}
        <div className="carousel carousel--left">
          <div className="carousel-track">
            {duplicatedPatents.map((pt, index) => (
              <div className="carousel-item" key={`patent-${index}`}>
                <div className="patent-card">
                  <img src={pt.image} alt={pt.title} className="patent-thumb" />
                </div>
              </div>
            ))}
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
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="partner-logo"
                  />
                </div>
                <p className="partner-name">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}