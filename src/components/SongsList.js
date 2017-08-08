import React, {Component} from 'react';
import {Link} from 'react-router';
import '../index.css';
//import 'bootstrap/dist/css/bootstrap.css';
class SongsList extends Component {
    render() {
        let tunes = []
        tunes = this.props.songs.map((song, i)=>{
            return <div className="allSongs"><Link to={"/songs/"+song.id}><img className="thumbnail" src={song.photo}/>{song.title}</Link> <button onClick={()=> this.props.changeSong(i)}> <img className="play" src="./play.png"/> </button></div>
        })
        console.log(this.props.route)
        console.log(this.props.currentsong)
        return (
              <div className="container">
                <div className="homebody" style={{'background-image':`url(${this.props.songs[this.props.currentsong].photo})`}}>
                    <p>  </p>
                </div>
                    <div className="songList">
                        <ul>
                            {tunes}
                        </ul>
                   </div>
            </div>
        )
    }
}
export default SongsList;