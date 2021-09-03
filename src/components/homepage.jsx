import React, { Component } from 'react';
import Navbar from './navbar';

class HomePage extends Component {
    state = {  }
    render() { 
        return (

            <div>
                <Navbar />
                <div className="welcome">Welcome to my DVT assement using the Deezer API. Please use the search box top right to get started.</div>
            </div>

          );
    }
}
 
export default HomePage;