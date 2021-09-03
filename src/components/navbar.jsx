import React, { Component } from 'react';
import SearchBar from './searchbar';

class Navbar extends Component {
    state = {  }
    render() { 
        return (
            <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">
                    Deezer
                    </a>
                    <SearchBar />
                </div>
            </nav>
        </div>
          );
    }
}
 
export default Navbar;