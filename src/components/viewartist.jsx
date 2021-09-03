import React, { Component, useEffect, useState } from 'react';
import Navbar from './navbar';
import Track from './track';
import Album from './album';

class ViewArtistPage extends Component {

    loadTopTracks(){

        fetch("https://cors-anywhere.herokuapp.com/" + (this.state.items.tracklist).slice(0,-1) )
        .then(res => res.json())
        .then(result => {
            console.log(result)
            this.setState({           
            topTracks: result.data
            });
        })
        .catch(error => {
        this.setState({          
            error
        });
        })

    }

    loadAlbums(){

        fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + this.props.match.params.artist_id + "/albums")
        .then(res => res.json())
        .then(result => {
            console.log(result)
            this.setState({           
            albums: result.data
            });
        })
        .catch(error => {
        this.setState({          
            error
        });
        })

    }

    getArtistInfo() {

        //let fakeinfo = JSON.parse('{"id":27,"name":"Daft Punk","link":"https:\/\/www.deezer.com\/artist\/27","share":"https:\/\/www.deezer.com\/artist\/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1630682440&utm_medium=web","picture":"https:\/\/api.deezer.com\/artist\/27\/image","picture_small":"https:\/\/cdns-images.dzcdn.net\/images\/artist\/f2bc007e9133c946ac3c3907ddc5d2ea\/56x56-000000-80-0-0.jpg","picture_medium":"https:\/\/cdns-images.dzcdn.net\/images\/artist\/f2bc007e9133c946ac3c3907ddc5d2ea\/250x250-000000-80-0-0.jpg","picture_big":"https:\/\/cdns-images.dzcdn.net\/images\/artist\/f2bc007e9133c946ac3c3907ddc5d2ea\/500x500-000000-80-0-0.jpg","picture_xl":"https:\/\/cdns-images.dzcdn.net\/images\/artist\/f2bc007e9133c946ac3c3907ddc5d2ea\/1000x1000-000000-80-0-0.jpg","nb_album":32,"nb_fan":4092016,"radio":true,"tracklist":"https:\/\/api.deezer.com\/artist\/27\/top?limit=50","type":"artist"}');

       /* this.setState({
            isLoaded: true,
            items: fakeinfo
            });*/


        fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + this.props.match.params.artist_id)
            .then(res => res.json())
            .then(result => {
                console.log(result)
                this.setState({
                isLoaded: true,
                items: result
                });

                this.loadTopTracks(); //load the top tracks
                this.loadAlbums(); //load the albums
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
        console.log(this.props.match.params.artist_id,"the term");

        this.state = { 
            artist_id : this.props.match.params.artist_id,
            items : '',
            topTracks : [],
            albums : []
         }


       this.getArtistInfo();
        
    } 
   

    componentWillMount() {
        this.unlisten = this.props.history.listen((location, action) => {
          console.log("on route change");         

          this.getArtistInfo();

          this.setState ({
            artist_id : this.props.match.params.artist_id,
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

                <div className="v_ArtistTrackHolder">
                <div className="v_Artist">
                <div className="v_ArtistPicture"><img src={this.state.items.picture_xl} ></img></div>
                
                <div className="v_Artist_info">
                    <div className="v_ArtistName">{this.state.items.name}</div>
                    <div className="v_artistNumberOfFans">Fans {this.state.items.nb_fan}k</div>
                </div>
                </div>

                <div className="topTracks">

                    <div className="topTracksTitle">Top Tracks</div>
                    
                    {this.state.topTracks.map( (track,index) => <Track index={index+1} duration={track.duration} title={track.title} id={track.id} key={track.id}>{track.title}</Track>)}


                    

                </div>

                </div>

                <div className="clear"></div>

                <div className="Albums">

                        <div class="albumheader">Albums</div>

                        {this.state.albums.map( (album,index) => <Album cover={album.cover_medium} release_date={album.release_date} title={album.title} id={album.id} key={album.id}></Album>)}


                </div>

               
            </div>

          );
    }
}
 
export default ViewArtistPage;