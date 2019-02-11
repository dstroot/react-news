import React, { useEffect } from "react";
import Hero from "../../components/Hero";
import logo from "../../components/Hero/media/PacificLife_BrandIcon_White.png";
// import image from "../../components/HeroWash/media/hero.jpg";

const PageHome = () => {
  useEffect(() => {
    document.title = `Pacific Life • Home`;
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Hero
        logo={logo}
        bgimage="https://www.pacificlife.com/content/dam/paclife/crp/images/brand/Brand_hero.jpg"
        tagline="You. Protected."
        line1="Our mission is protecting your financial future."
        line2="We’ve fulfilled our promise for 150 years."
      />
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="display-1 mt-5">Hi There!</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageHome;
