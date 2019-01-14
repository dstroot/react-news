import React from "react";
import renderer from "react-test-renderer";
import Create from "../Create";

describe("Create", () => {
  it("it should render", () => {
    const component = renderer.create(<Create />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
