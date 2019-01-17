import React from "react";

const HeroWash = ({ image, tagline, line1, line2 }) => {
  const divHero = {
    /* Image with a color wash */
    backgroundImage: `linear-gradient(to top, rgba(0, 142, 215, 0.9), rgba(0, 142, 215, 0.4)), url(${image})`,

    /* Set height relative to width */
    height: "40vw",

    /* Position and center the image to scale nicely on all screens */
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative"
  };

  // place the text on the hero image - center text, viewport wide, at the bottom
  const heroText = {
    textAlign: "center",
    position: "absolute",
    bottom: "5vw",
    width: "100vw",
    color: "white"
  };

  const textBig = {
    fontSize: `calc(32px + 1.5vw + 0.5vmin)`,
    marginBottom: "0",
    fontWeight: "500"
  };

  const textSmall = {
    marginTop: "-0.5vw",
    marginBottom: "0",
    fontSize: `calc(8px + 1.5vw + 0.5vmin)`,
    fontWeight: "300"
  };

  return (
    <div style={divHero}>
      <div style={heroText}>
        <p style={textBig}>{tagline}</p>
        <p style={textSmall}>{line1}</p>
        <p style={textSmall}>{line2}</p>
      </div>
    </div>
  );
};

export default HeroWash;
