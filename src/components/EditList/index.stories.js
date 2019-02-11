import React from "react";
import { storiesOf } from "@storybook/react";

// components
import NewsList from "../NewsList";

// NewsList section
storiesOf("NewsList", module)
  .addParameters({
    info: {
      inline: true,
      header: false
    }
  })
  .add("show NewsList", () => <NewsList />);
