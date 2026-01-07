import { useEffect } from "react";

export default function Location() {
  useEffect(() => {
    const KAKAO_KEY = import.meta.env.VITE_KAKAO_MAP_KEY;

    if (!KAKAO_KEY) {
      console.error("❌ Kakao Map Key is missing");
      return;
    }

    // 중복 로드 방지
    if (document.querySelector('script[data-kakao="true"]')) {
      if (window.kakao?.maps) initMap();
      return;
    }

    function initMap() {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        if (!container) return;

        const position = new window.kakao.maps.LatLng(36.783768, 126.450442);
        const map = new window.kakao.maps.Map(container, {
          center: position,
          level: 3,
        });

        const marker = new window.kakao.maps.Marker({ position });
        marker.setMap(map);

        const info = new window.kakao.maps.InfoWindow({
          content: `
            <div style="padding:8px 12px; font-size:14px;">
              <b>서원공간정보</b><br />
              서산시 고운로 275-5<br />
              동문프라자 207호
            </div>
          `,
        });
        info.open(map, marker);
      });
    }

    const script = document.createElement("script");
    script.dataset.kakao = "true";
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_KEY}&autoload=false`;
    script.async = true;

    script.onload = initMap;
    script.onerror = () => {
      console.error("❌ Failed to load Kakao Map SDK");
    };

    document.head.appendChild(script);
  }, []);

  return (
    <div className="location-page">
      <h1 className="location-title">오시는 길</h1>
      <div
        id="map"
        style={{
          width: "100%",
          height: "450px",
          borderRadius: "10px",
          marginTop: "24px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
        }}
      />
    </div>
  );
}
