import './sass/App.scss';
import React, { Component } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filteredData: [],
      searchValue: '',
      alert: false,
      alertInfo: '',
      nightMode: 'night',
    };
  }
  timer = () =>
    setTimeout(() => {
      this.setState({ alert: false, alertInfo: '' });
    }, 3000);
 

  handleAlert = (process) => {
    clearTimeout(this.timer());
    this.setState({ alert: true, alertInfo: process });
    this.timer();
  };

  //  header searchbar
  handleSearch = (searchValue) => {
    const filteredData = this.state.data.filter((value) =>
      value.title.toLowerCase().includes(searchValue)
    );
    this.setState({ filteredData, searchValue });
  };
  handleDelete = (id) => {
   
    const data = this.state.data.filter((value) => value.id !== id);
    const filteredData = this.state.data.filter(
      (value) =>
        value.id !== id &&
        value.title.toLowerCase().includes(this.state.searchValue)
    );
    this.setState({ data, filteredData });
    this.handleAlert('Deleted');
  };

  handleEdit = (data) => {
    //shallow copy of items
    const movies = [...this.state.data];
    //finding movie index
    const movieIndex = this.state.data.findIndex(
      (movie) => movie.id === data.id
    );
    

    movies[movieIndex] = data;
    const filteredData = movies.filter((value) =>
      value.title.toLowerCase().includes(this.state.searchValue)
    );
    this.setState({ data: movies, filteredData });
    this.handleAlert('Updated');
  };
  componentDidMount() {
    document.title = 'Movies';
    fetch(`https://api.themoviedb.org/3/list/7110026?api_key=e4efba479801d33ac65e6385c754ca86&language=en-US`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data, filteredData: data.items });
        console.log(data);
      });
    }
    
  render() {
    return (
      <>
      
        <Header
          filterData={this.handleSearch}
         
        />
        <div
          className="App">
          <Card
            data={this.state.filteredData}
            deleteCard={this.handleDelete}
            alert={this.handleAlert}
            handleEdit={this.handleEdit}
            
          />
          {this.state.alert && (
            <div className="alert">{this.state.alertInfo}</div>
          )}
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
