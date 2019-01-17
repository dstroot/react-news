import React from "react";
import HeroWash from "../../components/HeroWash";
import image from "../../components/HeroWash/media/hero.jpg";

const PageHome = () => {
  return (
    <>
      <HeroWash
        image={image}
        tagline="You. Protected."
        line1="Our mission is protecting your financial future."
        line2="We’ve fulfilled that promise for 150 years."
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
