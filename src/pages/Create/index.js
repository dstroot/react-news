import React, { useEffect } from "react";

// components
import NewsCreate from "../../components/NewsCreate";

const Create = () => {
  // Set the page title and position using the useEffect hook
  useEffect(() => {
    document.title = `Pacific Life • Create`;
    window.scrollTo(0, 0);
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <NewsCreate />
        </div>
      </div>
    </div>
  );
};

export default Create;
