import React, { Component } from 'react';
import AppContext from './AppContext';

export default class Country extends Component {
    render() {
        return (
            <AppContext.Consumer>

                {context =>
                    context.results.map(country =>
                        ((country.name == context.chosenCountry) &&
                          <React.Fragment>
                            <h1>{country.name}</h1>
                            <span>TopLevelDomain: {country.topLevelDomain}</span><br />
                            <span>CountryCode: {country.alpha2Code}</span><br /><br />

                            <img src={country.flag} width="200" alt={"Flag of " + country.name} /><br />

                            <h2>Region</h2>
                            <span>Region: {country.region}</span><br />
                            <span>Subregion: {country.subregion}</span><br />

                            <h2>Translations</h2>
                            <span>German: {country.translations.de}</span><br />
                            <span>Spanish: {country.translations.es}</span><br />
                            <span>French: {country.translations.fr}</span><br />
                            <span>Japanese: {country.translations.ja}</span><br />
                            <span>Italian: {country.translations.it}</span><br />
                            <span>Brazilian: {country.translations.br}</span><br />
                            <span>Portuguese: {country.translations.pt}</span><br />
                            <span>Dutch: {country.translations.nl}</span><br />
                            <span>Hungarian: {country.translations.hr}</span><br />
                            <span>Persian: {country.translations.fa}</span><br />
                          </React.Fragment>
                        )
                    )
                }

            </AppContext.Consumer>
            
        )
    }
 }  