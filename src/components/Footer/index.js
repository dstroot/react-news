import React from "react";
import logo from "./media/logo-horiz.svg";

const Footer = () => {
  const year = new Date(); // evergreen copyright year
  return (
    <div className="container mt-5">
      <footer className="pt-4">
        <div className="row">
          <div className="col-12 col-md">
            <img className="mb-3" src={logo} alt="logo" />
          </div>
          <div className="col-6 col-md">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href="/">
                  Cool stuff
                </a>
              </li>
              <li>
                <a className="text-muted" href="/">
                  Random feature
                </a>
              </li>
              <li>
                <a className="text-muted" href="/">
                  Team feature
                </a>
              </li>
              <li>
                <a className="text-muted" href="/">
                  Stuff for developers
                </a>
              </li>
              <li>
                <a className="text-muted" href="/">
                  Another one
                </a>
              </li>
              <li>
                <a className="text-muted" href="/">
                  Last time
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href="/">
                  Resource
                </a>
              </li>
              <li>
                <a className="text-muted" href="/">
                  Resource name
                </a>
              </li>
              <li>
                <a className="text-muted" href="/">
                  Another resource
                </a>
              </li>
              <li>
                <a className="text-muted" href="/">
                  Final resource
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href="/">
                  Team
                </a>
              </li>
              <li>
                <a className="text-muted" href="/">
                  Locations
                </a>
              </li>
              <li>
                <a className="text-muted" href="/">
                  Privacy
                </a>
              </li>
              <li>
                <a className="text-muted" href="/">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-8">
            <p className="small text-muted">
              Copyright © {year.getFullYear()} Pacific Life Insurance Company,
              all rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
