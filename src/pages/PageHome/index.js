import React from "react";
import HeroWash from "../../components/HeroWash";

const PageHome = () => {
  return (
    <>
      <HeroWash
        image="https://www.pacificlife.com/content/dam/paclife/crp/images/brand/Brand_hero.jpg"
        tagline="You. Protected."
        line1="Our mission is protecting your financial future."
        line2="We’ve fulfilled that promise for 150 years."
      />
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="display-1">Hi There!</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageHome;
