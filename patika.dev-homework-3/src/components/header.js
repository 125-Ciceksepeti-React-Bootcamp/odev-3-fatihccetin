import React from 'react';
import './Header.scss';
import { AiOutlineSearch } from 'react-icons/ai';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchData: '' };
    }
    handleSearch = (event) => {
        // arrow function
        this.setState({ searchData: event.target.value.toLowerCase() });
        // cards filter
        this.props.filterData(event.target.value);
    };
    handleGithub = () => {
        window.open('https://github.com/fatihccetin', '_blank');
    };

    render() {
        return (
            <div className="header">

                <div className="logo" >

                    <img src="../img/logo.jpg" alt="" />
                </div>
                <div className="search-bar">
                    <input
                        className="search-input"
                        value={this.state.searchData}
                        onChange={this.handleSearch}
                        type="search"
                    />
                    <div className="search-icon">
                        <AiOutlineSearch color="#fed34d" size="2rem" />
                    </div>
                </div>
                <div className="avatar">
                    <img
                        src="../img/profil.jpg"
                        alt="profil"
                        onClick={this.handleGithub} />

                </div>

            </div>
        );
    }
}

export default Header;
