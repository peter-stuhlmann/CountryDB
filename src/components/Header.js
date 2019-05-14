import React, { Component } from 'react';
import AppContext from './AppContext';

export default class Header extends Component {
  
  filterCountry = React.createRef();
  languagePreference = React.createRef();

  render() {
    return (
      <AppContext.Consumer>
        {context =>
          <header className="header">

            <div className="filter">
              <label htmlFor="search">Search country:</label>
              <input name="search" type="text" ref={this.filterCountry} onChange={() => {context.filterResults(this.filterCountry)}} placeholder={`for example ${context.chosenCountry}`} />
            </div>
            
            <div className="language">
              <label htmlFor="language">Language:</label>
              <select ref={this.languagePreference} onChange={() => context.choseLanguage(this.languagePreference)}>                <option value="en" selected>EN</option>
                <option value="es">ES</option>
                <option value="de">DE</option>
                <option value="fr">FR</option>
                <option value="ja">JA</option>
                <option value="it">IT</option>
                <option value="br">BR</option>
                <option value="pt">PT</option>
                <option value="nl">NL</option>
                <option value="hr">HR</option>
                <option value="fa">FA</option>
              </select>
            </div>

          </header>
        }
      </AppContext.Consumer>
    );
  }

}