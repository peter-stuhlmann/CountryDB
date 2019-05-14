import React, { Component } from 'react';
import AppProvider from './AppProvider';
import AppContext from './AppContext';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import CountryList from './CountryList';

export default class App extends Component {

  constructor(props) {
    super()
    
    this.state = {
      results: null,
      searchTerm: "germany",
      name: "",
      region: "",
      subregion: "",
      translations: "",
      flag: "",
      search: (searchTerm = "germany") => {
        fetch(`https://restcountries.eu/rest/v2/all`)
      .then(response => response.json())
      .then(data => this.setState({ results: data }));

      }
    }
  }

  componentDidMount() {
    {this.state.search()}
  }

  render() {

    return ( 
      this.state.results &&

      <AppProvider>
  
        <Header />

        <AppContext.Consumer>
          {context =>
            context.results &&
            <div className="content">

              <aside>
                <ul>
                  <CountryList />
                </ul>
              </aside>

              <main>
                <Main />
              </main>
            </div>
          }
        </AppContext.Consumer>


        <Footer />

      </AppProvider>
    )
  }

}
