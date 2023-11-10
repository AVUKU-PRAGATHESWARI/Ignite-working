import React from "react";
import { NewsCard1 } from "../components/Card/Card";
import "../styles/news.css";
const News = () => {
  return (
    <>
      <div className="news-main">
        <h2 className="news-heading">
          Our Top Stories
        </h2>
        <div className="news">
          <NewsCard1 />
          <NewsCard1 />
          <NewsCard1 />
        </div>
      </div>
    </>
  );
};

export default News;
