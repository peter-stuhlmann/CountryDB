import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppProvider from './AppProvider';
import AppContext from './AppContext';
import Header from './Header';
import Main from './Main';
import LegalNotice from './LegalNotice';
import PrivacyPolicy from './PrivacyPolicy';
import Footer from './Footer';
import CountryList from './CountryList';
import NotFound from './NotFound';

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

      <Router>
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
                  
                  <Switch>
                    <Route exact path="/" component={ Main } />
                    <Route path="/legalnotice" component={ LegalNotice } />
                    <Route path="/privacypolicy" component={ PrivacyPolicy } />
                    <Route component={ NotFound } />
                  </Switch>
                </main>
              </div>
            }
          </AppContext.Consumer>


          <Footer />

        </AppProvider>
      </Router>
    )
  }

}
