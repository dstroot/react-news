import React, { useState } from "react";
import arrow4 from "./media/download-arrow.svg";

const ImageItem = ({ image }) => {
  const [visible, setVisible] = useState(false);

  // modal close function
  const close = () => {
    setVisible(false);
  };

  return (
    <>
      <ImageModal image={image} visible={visible} close={close} />
      <div className="col-sm-4 mt-4">
        <img
          className="img-fluid"
          src={image.full}
          width="400px"
          height="400px"
          alt={image.alt}
          onClick={() => setVisible(true)}
        />
        <br />
        <p className="lead d-inline">
          <a
            className=""
            href={image.full}
            aria-label="Download Google"
            download
          >
            <img className="mr-2" src={arrow4} width="22px" alt="arrow" />
          </a>
          {image.title}
        </p>
      </div>
    </>
  );
};

var divStyle = {
  display: "block"
};

const ImageModal = ({ image, visible, close }) => {
  if (visible) {
    return (
      <>
        <div class="modal-backdrop fade show" />
        <div
          id="exampleModalLive"
          className="modal fade show"
          tabIndex="-1"
          role="dialog"
          style={divStyle}
        >
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  onClick={close}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img className="img-fluid" src={image.full} alt={image.alt} />
                <div className="mt-4">
                  <h4 className="d-inline">{image.title}</h4>
                  <a
                    className=""
                    href={image.full}
                    aria-label="Download Google"
                    download
                  >
                    <img
                      className="mr-2 float-right"
                      src={arrow4}
                      width="30px"
                      alt="arrow"
                    />
                  </a>
                  <p className="small text-muted">2800x1868 pixels - 0.2 Mb</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default ImageItem;

// <div className="backdrop" style={{ backdropStyle }}>
//   <div className="row">
//     <div className="col">
//       <button
//         type="button"
//         className="close"
//         aria-label="Close"
//         onClick={close}
//       >
//         <span aria-hidden="true">&times;</span>
//       </button>
//       <img className="img-fluid" src={image.full} alt={image.alt} />
//       <br />
//       <h1 className="display-6 d-inline">
//         <a
//           className=""
//           href={image.full}
//           aria-label="Download Google"
//           download
//         >
//           <img className="mr-2" src={arrow4} width="30px" alt="arrow" />
//         </a>
//         {image.title}
//       </h1>
//       <p className="small text-muted">2800x1868 pixels - 0.2 Mb</p>
//     </div>
//   </div>
// </div>

// <div className="col-sm-4 mt-4">
//   <img
//     className="img-fluid"
//     src={image.full}
//     width="400px"
//     height="400px"
//     alt={image.alt}
//     onClick={() => setVisible(true)}
//   />
//   <br />
//   <p className="lead d-inline">
//     <a
//       className=""
//       href={image.full}
//       aria-label="Download Google"
//       download
//     >
//       <img className="mr-2" src={arrow4} width="22px" alt="arrow" />
//     </a>
//     {image.title}
//   </p>
// </div>
