import React from "react";
import renderer from "react-test-renderer";

import LeadNewsItem from "../LeadNewsItem";
const data = {
  id: "1",
  date: "11-14-18",
  image: "",
  headline:
    "Pacific Life Foundation Donates $250,000 to the American Red Cross for Victims of the California Wildfires",
  url:
    "https://www.pacificlife.com/press-releases/pacific-life-foundation-donates--250-000-to-the-american-red-cro.html",
  category: "Company News"
};

describe("LeadNewsItem", () => {
  it("it should render", () => {
    const component = renderer.create(<LeadNewsItem item={data} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
