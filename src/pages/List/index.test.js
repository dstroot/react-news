import React from "react";
import renderer from "react-test-renderer";
import List from "../List";

describe("List", () => {
  it("it should render", () => {
    const component = renderer.create(<List />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
