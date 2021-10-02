import React from 'react';
import '../sass/Header.scss';
import { AiOutlineSearch } from 'react-icons/ai';



class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchValue: '' };
  }
  handleSearch = (event) => {
    // seting search value
    this.setState({ searchValue: event.target.value.toLowerCase() });
    // filtering card
    this.props.filterData(event.target.value);
  };
  handleGithub = () => {
    window.open('https://github.com/fatihccetin', '_blank');
  };
  
  render() {
    return (
      <div className="header" >
        <div className="logo" >
           <img src="https://picsum.photos/200/300?random=2" alt="" />
        </div>
        <div className="search-bar">
          <input
            className="search-input"
            value={this.state.searchValue}
            onChange={this.handleSearch}
            type="search"
          />
          <div className="search-icon">
            <AiOutlineSearch color="#fed34d" size="2rem" />
          </div>
        </div>
        <div className="profil">
          <img
            src="https://picsum.photos/200/300?random=1"
            alt="profil"
            onClick={this.handleGithub}
          />s
        </div>
       
      </div>
    );
  }
}

export default Header;
