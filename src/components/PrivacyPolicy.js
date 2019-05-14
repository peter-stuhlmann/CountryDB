import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';

export default class PrivacyPolicy extends Component {
    render() {
      return (
        <React.Fragment>

          <MetaTags>
            <title>Privacy policy | CountryDB</title>
            <link rel="shortcut icon" type="image/png" href={require("../assets/img/favicon.png")} sizes="96x96" />
            <meta name="description" content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." />
          </MetaTags>

          <h1>Datenschutzerklärung (Privacy Policy)</h1>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </React.Fragment>
    );
  }
}