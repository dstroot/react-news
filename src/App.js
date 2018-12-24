import React from "react";
import { Router } from "@reach/router";

// components
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

// pages
import PageHome from "./pages/PageHome";
import Tabs from "./pages/PageNews";
import PageNewsArticle from "./pages/PageNewsArticle";

import "./scss/main.scss";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <PageHome path="/" />
        <Tabs path="/news" />
        <PageNewsArticle path="/news/article" />
      </Router>
      <Footer />
    </div>
  );
};

export default App;
