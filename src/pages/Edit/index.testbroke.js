import React from "react";
import renderer from "react-test-renderer";
import Edit from "../Edit";

describe("Edit", () => {
  it("it should render", () => {
    const component = renderer.create(<Edit />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
