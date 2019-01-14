import React from "react";
import renderer from "react-test-renderer";
import Create from "../Create";

import { advanceTo, clear } from "jest-date-mock";
beforeEach(() => {
  advanceTo(new Date(2018, 5, 27, 0, 0, 0)); // advanceTo to 0 ms.
});

afterEach(() => {
  clear();
});

describe("Create", () => {
  it("it should render", () => {
    const component = renderer.create(<Create />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
