import "./history.css";

export default function History() {
  const historyData = [
    {
      year: "2019",
      items: [
        "법인 설립 (2019.11)",
        "사업자등록 (2019.11)",
      ],
    },
    {
      year: "2020",
      items: [
        "초경량비행장치사업 등록 (2020.1)",
        "지하시설물측량업 등록 (2020.1)",
        "소프트웨어사업자 등록 (2020.2)",
        "벤처기업인증 (2020.2)",
        "기업부설연구소 인정 (2020.2)",
        "일반측량업 등록 (2020.3)",
        "공간정보산업협회 입회 (2020.3)",
        "공공측량업 등록 (2020.10)",
        "수치지도제작업 등록 (2020.10)",
        "건설기술용역 등록 (2020.12)",
      ],
    },
    {
      year: "2021",
      items: [
        "영상처리업 등록 (2021.1)",
        "공간영상도화업 등록 (2021.8)",
      ],
    },
    {
      year: "2022",
      items: ["한국LPG사업관리원 협력사 등록 (2022.01)"],
    },
    {
      year: "2023",
      items: ["수치도화기 판매 (2023.01)"],
    },
    {
      year: "2024",
      items: ["측지측량업 등록 (2024.03)"],
    },
    {
      year: "2025",
      items: ["토질/지질 엔지니어링업자 등록 (2025.05)"],
    },
  ];

  return (
    <div className="history-page">
      <div className="container">
        <h1 className="history-title">회사 연혁</h1>
        <div className="history-title-line"></div>

        <div className="history-content">
          {historyData.map((item, idx) => (
            <div key={idx} className="history-row">
              <div className="history-year">{item.year}</div>

              <ul className="history-list">
                {item.items.map((text, index) => (
                  <li key={index}>{text}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* 희미한 배경 로고 */}
      <div className="history-bg-logo"></div>
    </div>
  );
}
