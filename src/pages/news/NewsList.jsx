import { Link } from "react-router-dom";
import news from "../../data/news.json";

export default function NewsList() {
  return (
    <div className="container news-page">
      <h1>NEWS</h1>

      <ul className="news-list">
        {news.map(item => (
          <li key={item.id} className="news-item">
            <Link to={`/news/${item.id}`}>
              <span className="news-title">{item.title}</span>
              <span className="news-date">{item.date}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
