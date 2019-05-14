import React, { Component } from 'react';
import AppContext from "./AppContext";
import Country from "./Country"

export default class CountryList extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {context =>
          <aside>
            {context.results.map(country =>                         
              <li id={country.name}>
                <strong>{country.name}</strong><br />
                <span>{country.region}</span>
              </li>
            )}
          </aside>
        }
      </AppContext.Consumer>
    )
  }
}