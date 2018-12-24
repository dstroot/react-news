import React from "react";
import renderer from "react-test-renderer";

import ContactPR from "../ContactPR";

describe("ContactPR", () => {
  it("it should render", () => {
    const component = renderer.create(<ContactPR />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
