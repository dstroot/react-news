import React from "react";

// components
import ImageItem from "../../components/ImageItem";
import data from "./images.json";

const ImageList = () => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col">
          <h1 className="display-6 mb-2 mt-4">All Logos</h1>
        </div>
      </div>
      <div className="row">
        {data.map(item => (
          <ImageItem image={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ImageList;
