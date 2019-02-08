import React, { useEffect } from "react";
import About from "../../components/About";

const PageHome = () => {
  useEffect(() => {
    document.title = `Pacific Life • About`;
    window.scrollTo(0, 0);
  });

  return <About />;
};

export default PageHome;
