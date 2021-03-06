import React from "react";
import renderer from "react-test-renderer";
import Hero from "../Hero";

test("Hero renders some content", () => {
  const component = renderer.create(
    <Hero
      logo=""
      bgimage="https://www.pacificlife.com/content/dam/paclife/crp/images/brand/Brand_hero.jpg"
      tagline="You. Protected."
      line1="Our mission is protecting your financial future."
      line2="We’ve fulfilled our promise for 150 years."
    />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
