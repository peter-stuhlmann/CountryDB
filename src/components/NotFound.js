import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';

export default class NotFound extends Component {
    render() {
      return (
        <React.Fragment>

            <MetaTags>
              <title>Error 404 | CountryDB</title>
              <link rel="shortcut icon" type="image/png" href={require("../assets/img/favicon.png")} sizes="96x96" />
              <meta name="description" content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." />
            </MetaTags>

            <h1>Error 404</h1>
            <p>
              Sorry, this page does not exist (anymore). 
            </p>
            <img src={require("../assets/img/error.png")} alt="Error 404 - Page not found" />
            
        </React.Fragment>
    );
  }
}