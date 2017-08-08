import React, { Component } from 'react';
import './index.css';
import {Link} from 'react-router';
import SC from 'soundcloud';

SC.initialize({
  client_id: '0hH9etIZi7ZfHXZWUk3ZtpVxdu3GyQdS',
  // redirect_uri: 'http://example.com/callback'
});

      SC.get('/tracks', {
        genres: 'all', 
      }).then(function(tracks) {
        console.log(tracks);
      });

console.log(SC.get('/tracks'));


var audio = document.getElementById("songs"); 


      // find all tracks with the genre 'punk' that have a tempo greater than 120 bpm.

class App extends Component {
  constructor(){
    super();
      this.state = {
        currentsong : 0,
        playing: false,
      }
      this.changeSong = this.changeSong.bind(this)
      this.nextSong = this.nextSong.bind(this)
      this.prevSong = this.prevSong.bind(this)
  }

changeSong(songindex){
  this.setState ({currentsong: songindex, playing : true  },()=>{ document.getElementById("songs").play();}) 
}

 play() { 
    audio.play(); 
    this.setState ({ playing : true })
} 

  pause() { 
    audio.pause(); 
    this.setState ({ playing : false})
} 

nextSong(songindex){
   this.setState ({ currentsong: this.state.currentsong + 1, playing: true},()=>{ document.getElementById("songs").play(); console.log("auo")})
    if (this.state.currentsong === this.props.route.songs.length -1 ){
      this.setState({currentsong: 0})
    }
}

prevSong(songindex){
  this.setState({currentsong: this.state.currentsong - 1, playing: true},()=>{ document.getElementById("songs").play();})
    if (this.state.currentsong === 0)
      this.setState({ currentsong: 2})
}
  render() {
    
    const songs = this.props.route.songs
    console.log(this.props.route.songs.length);
    return (
      <div className="App">
          <div className="wrapper">
          <div className="top-bar"> 
            <Link to="/songs">
                <img className="logo" src="../logoo.gif"/> 
                <h4 className="songify"> songify </h4>
           </Link> 
          </div>
          
          {React.cloneElement(this.props.children, { songs: songs, changeSong: this.changeSong, nextSong: this.nextSong, prevSong: this.prevSong , currentsong: this.state.currentsong, playing: this.state.playing})}
          </div>
          <div className="player col-md-8 .col-md-offset-2">
            <audio controls id="songs" src={songs[this.state.currentsong].source}/>
            <button className="changer" onClick={this.prevSong}><img className= "nextprev" src="../left_arrow.png"/></button>
            <button className="changer" onClick={this.nextSong}><img className= "nextprev" src="../right_arrow.png"/></button>
          </div>
      </div>
    );
  }
}


export default App;
