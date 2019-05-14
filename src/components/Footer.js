import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div>
          <p>&copy; <a href="https://peter-stuhlmann-webentwicklung.de/">Peter R. Stuhlmann web development</a>, 2019</p>
          <nav>
            <ul>
              <li><Link to="/">CountryCard</Link></li>
              <li><Link to="/legalnotice">Legal notice</Link></li>
              <li><Link to="/privacypolicy">Privacy policy</Link></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/peter-stuhlmann/">Github</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    );
  }
}