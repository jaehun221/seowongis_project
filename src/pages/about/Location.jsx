import { useEffect } from "react";

export default function Location() {
  useEffect(() => {
    const script = document.createElement("script");
    const KAKAO_KEY = import.meta.env.VITE_KAKAO_MAP_KEY;
    
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_KEY}&autoload=false`;

    script.async = true;

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");

        // 📍 서원공간정보 위치 좌표 (서산시 고운로 275-5 동문프라자 207호)
        const position = new window.kakao.maps.LatLng(36.783768, 126.450442);

        const options = {
          center: position,
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);

        const marker = new window.kakao.maps.Marker({
          position: position,
        });

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
      ></div>
    </div>
  );
}
