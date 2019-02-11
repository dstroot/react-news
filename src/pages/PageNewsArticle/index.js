import React, { useEffect } from "react";

// components
import NewsArticle from "../../components/NewsArticle";

const PageNewsArticle = () => {
  useEffect(() => {
    document.title = `Pacific Life • News`;
    window.scrollTo(0, 0);
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <NewsArticle />
        </div>
      </div>
    </div>
  );
};

export default PageNewsArticle;
