import React, { useEffect } from "react";

// components
import EditList from "../../components/EditList";

const List = () => {
  // Set the page title and position using the useEffect hook
  useEffect(() => {
    document.title = `Pacific Life • Edit News`;
    window.scrollTo(0, 0);
  });

  return <EditList />;
};

export default List;
