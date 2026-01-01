import { useParams } from "react-router-dom";
import news from "../../data/news.json";

export default function NewsDetail() {
  const { id } = useParams();
  const item = news.find(n => n.id === Number(id));

  if (!item) return <div className="container">해당 뉴스가 없습니다.</div>;

  return (
    <div className="container news-detail">
      
      <h1>{item.title}</h1>
      <p className="news-detail-date">{item.date}</p>   {/* ★ 수정 */}

      <div className="news-detail-divider"></div>       {/* ★ 추가 */}

      {item.image && (
        <img src={item.image} alt={item.title} className="news-detail-image" />
      )}

      <div className="news-content">
        {item.content}
      </div>
    </div>
  );
}
