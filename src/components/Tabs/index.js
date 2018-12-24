import React, { useState } from "react";

// components
import NewsList from "../NewsList";
import ImageList from "../ImageList";

// Each tab has a numeric index from zero. The active tab state is
// held in `activeTab`. When a tab is clicked we update our state
// using `setActiveTab`.

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <ul className="nav nav-tabs nav-fill mb-4">
        <li className="nav-item">
          <div
            className={`nav-link ${activeTab === 0 && "active"}`}
            onClick={() => setActiveTab(0)}
          >
            News Stories
          </div>
        </li>
        <li className="nav-item">
          <div
            className={`nav-link ${activeTab === 1 && "active"}`}
            onClick={() => setActiveTab(1)}
          >
            Our Brand
          </div>
        </li>
        <li className="nav-item">
          <div
            className={`nav-link ${activeTab === 2 && "active"}`}
            onClick={() => setActiveTab(2)}
          >
            Contact Us
          </div>
        </li>
        <li className="nav-item">
          <div
            className={`nav-link ${activeTab === 3 && "active"}`}
            onClick={() => setActiveTab(3)}
          >
            About Us
          </div>
        </li>
      </ul>
      <RenderTabContent index={activeTab} />
    </>
  );
};

// {
//   {
//     0: <NewsList />,
//     1: <ImageList />,
//     2: <br />,
//     3: <br />
//   }[activeTab]
// }

// We pass the state to the component and it uses a switch statement to
// render the appropriate tab content.

const RenderTabContent = ({ index }) => {
  switch (index) {
    case 0:
      return <NewsList />;
    case 1:
      return <ImageList />;
    case 2:
      return <h1>Tab 3</h1>;
    case 3:
      return <h1>Tab 4</h1>;
    default:
      return null;
  }
};

export default Tabs;
