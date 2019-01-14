import React from "react";
import renderer from "react-test-renderer";

import NewsArticle from "../NewsArticle";
const story = `## Heading

Here is some content

- List 1
- List 2`;

describe("NewsArticle", () => {
  it("it should render", () => {
    const component = renderer.create(
      <NewsArticle
        date="Dec 12, 2018"
        cutline="This is a cutline"
        headline="This is a headline!"
        story={story}
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
