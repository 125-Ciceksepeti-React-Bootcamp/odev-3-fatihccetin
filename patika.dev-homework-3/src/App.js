import './scss/app.scss';
import React, { Component } from 'react';
import Header from './components/header';


class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        filteredData: [],
        searchValue: '',
        alert: false,
        alertInfo: '',
      };
    }

    time = () =>
    setTimeout(() => {
      this.setState({ alert: false, alertInfo: '' });
    }, 3000);
  // pozisyonu sabit olan basit bir divi alert olarak kullanmama olanak sagliyor
  handleAlert = (process) => {
    clearTimeout(this.time());
    this.setState({ alert: true, alertInfo: process });
    this.time();
  };

  render() {
    return (
      <>
        {/* local:{localStorage.getItem('nightMode')}-------state:
        {this.state.nightMode} */}
        <Header
          
        />
        
        
      </>
    );
  }
}

export default App;