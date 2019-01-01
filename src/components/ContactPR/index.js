import React from "react";
import SocialMedia from "../SocialMedia";

const ContactPR = () => (
  <>
    <h1 className="display-6">Contact Pacific Life PR</h1>
    <br />
    <address className="">
      <h6 className="mb-0">CONTACT BY EMAIL</h6>
      <a
        className="card-link"
        href="mailto:press@pacificlife.com?Subject=Press%20Inquiry"
        target="_top"
      >
        press@pacificlife.com
      </a>
      <br />
      <br />
      <h6 className="mb-0">FOR NON-MEDIA INQUIRIES</h6>
      <a
        className="card-link"
        href="mailto:press@pacificlife.com?Subject=Press%20Inquiry"
        target="_top"
      >
        contact@pacificlife.com
      </a>
      <br />
      <br />
      <p className="">
        For all other inquiries please visit our{" "}
        <a className="card-link" href="/help" target="_top">
          Help Center
        </a>
        .
      </p>
    </address>
    <h4 className="">Receive e-mail alerts:</h4>
    <p>
      Sign up to receive{" "}
      <a
        className="card-link"
        href="mailto:press@pacificlife.com?Subject=Press%20Inquiry"
        target="_top"
      >
        email alerts
      </a>{" "}
      whenever we post new information to the press site.
    </p>
    <h4 className="">Follow us everywhere:</h4>
    <SocialMedia size="1.5em" color="#414141" />
  </>
);

export default ContactPR;
