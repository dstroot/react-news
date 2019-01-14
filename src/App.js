import React from "react";
import { Router } from "@reach/router";

// components
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

// pages
import PageHome from "./pages/PageHome";
import Tabs from "./pages/PageNews";
import PageNewsArticle from "./pages/PageNewsArticle";
import ShowArticle from "./components/ShowArticle";

import List from "./pages/List";
import Create from "./pages/Create";
import Edit from "./pages/Edit";

import "./scss/main.scss";

// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSpinner,
  faCheck,
  faCheckCircle,
  faExclamationTriangle,
  faEdit,
  faTrashAlt,
  faPlusSquare
} from "@fortawesome/free-solid-svg-icons";

// library of Font Awesome Icons
library.add(
  faSpinner,
  faCheck,
  faCheckCircle,
  faExclamationTriangle,
  faEdit,
  faTrashAlt,
  faPlusSquare
);

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <PageHome path="/" />
        <Tabs path="/news" />
        <PageNewsArticle path="/news/article" />
        <ShowArticle path="/news/:id" />

        {/* edit routes */}
        <List path="/news/edit" />
        <Create path="/news/create" />
        <Edit path="/news/edit/:id" />
      </Router>
      <Footer />
    </div>
  );
};

export default App;
