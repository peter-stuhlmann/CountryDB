import React, { Component } from 'react';
import AppContext from "./AppContext";

export default class CountryList extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {context =>
          <aside>
            {context.results.map(country =>                         
              <li onClick={context.handleClick} className={country.name}>
                <strong className={country.name}>{country.name}</strong><br />
                <span className={country.name}>{country.region}</span>
              </li>
            )}
          </aside>
        }
      </AppContext.Consumer>
    )
  }
}