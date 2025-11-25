import "../index.css";
import mainImg from "../assets/images/main/main.png"; // 네가 실제 넣을 이미지 경로에 맞게 수정!

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="home-hero">
        <img src={mainImg} alt="서원공간정보 메인 이미지" className="home-hero-img" />

        <div className="home-hero-text">
          <h1>정확한 데이터로<br />더 나은 공간정보를 만듭니다</h1>
          <p>서원공간정보는 항공측량 · 공간데이터 · 정사영상 제작을 전문으로 합니다.</p>
        </div>
      </section>
    </div>
  );
}
