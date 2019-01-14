import React, { useEffect } from "react";

// components
import NewsEdit from "../../components/NewsEdit";

const Edit = ({ id }) => {
  // Set the page title and position using the useEffect hook
  useEffect(() => {
    document.title = `Pacific Life • Edit`;
    window.scrollTo(0, 0);
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <NewsEdit id={id} />
        </div>
      </div>
    </div>
  );
};

export default Edit;
