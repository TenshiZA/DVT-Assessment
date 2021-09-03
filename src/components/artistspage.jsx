import React, { Component, useEffect, useState } from 'react';
import Artist from './artist';
import Navbar from './navbar';

class ArtistsPage extends Component {

    searchArtists() {

        fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=" + this.props.match.params.searchTerm)
            .then(res => res.json())
            .then(result => {
                console.log(result)
                this.setState({
                isLoaded: true,
                items: result.data
                });
            })
            .catch(error => {
            this.setState({
                isLoaded: true,
                error
            });
            })

     }

    constructor(props){
        super(props);

        console.log(this.props,"the props");
        console.log(this.props.match.params.searchTerm,"the term");
        this.searchArtists();
        
    }

    state = { 
        searchTerm : this.props.match.params.searchTerm,
        items : []
     }

   

    componentWillMount() {
        this.unlisten = this.props.history.listen((location, action) => {
          console.log("on route change");         

          this.searchArtists();

          this.setState ({
            searchTerm : this.props.match.params.searchTerm,
          })
        });
      }
      componentWillUnmount() {
          this.unlisten();
      }


    
    render() { 
        return (

            <div>
                <Navbar ></Navbar>
                {this.state.items.map( artist => <Artist id={artist.artist.id} numOfFans={artist.rank} Picture={artist.artist.picture_medium} artistName={artist.artist.name} key={artist.id}>{artist}</Artist>)}
            </div>

          );
    }
}
 
export default ArtistsPage;