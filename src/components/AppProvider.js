import React, { Component } from 'react';
import AppContext from './AppContext';

export default class AppProvider extends Component {

  state = {
    
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}
