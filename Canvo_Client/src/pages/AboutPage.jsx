import React from "react";
import { Helmet } from "react-helmet";

const AboutPage = () => {
  return (
    <div>
      <Helmet>
        <title>Canvo - About</title>
      </Helmet>
      <h1>About Us</h1>
      <p>
        Welcome to the About Page of our application. Here you can find more
        information about us.
      </p>
    </div>
  );
};

export default AboutPage;
