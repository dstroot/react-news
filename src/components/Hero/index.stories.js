import React from "react";
import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import Hero from "../Hero";
import logo from "../Hero/media/PacificLife_BrandIcon_White.png";
import image from "../Hero/media/2.jpg";

const stories = storiesOf("Hero", module);
stories.addDecorator(withKnobs);

stories.add("show Hero", () => (
  <Hero
    logo={logo}
    bgimage={image}
    tagline={text("Tagline", "You. Protected.")}
    line1={text("Line 1", "Our mission is protecting your financial future.")}
    line2={text("Line 2", "We’ve fulfilled that promise for 150 years.")}
  />
));
// .addWithInfo('External', `This is .`, () => (
//   <Hero
//     logo={logo}
//     bgimage={text(
//       'Background Image',
//       'https://www.pacificlife.com/content/dam/paclife/crp/images/brand/Brand_hero.jpg'
//     )}
//     tagline={text('Tagline', 'You. Protected.')}
//     line1={text('Line 1', 'Our mission is protecting your financial future.')}
//     line2={text('Line 2', 'We’ve fulfilled that promise for 150 years.')}
//   />
// ));
