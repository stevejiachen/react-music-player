import React, {Component} from 'react';
import { connect }  from 'react-redux';
import { startSetPlaying } from '../actions/playingActions'

class Playing extends Component {
  constructor(props) {
    super(props);
    this.state ={
      timeLeft:30
    }
  }

  componentDidMount(){
    setInterval(()=>{
      this.setState((prevState)=>({
        timeLeft: prevState.timeLeft - 1
      }))
    }, 1000);

    var i =0;
    const loopSong = () => {
      i = i % 4 + 1;
      this.props.dispatch(startSetPlaying(i))

      this.setState({timeLeft:30});
      setTimeout(loopSong,30000);
    }
    loopSong();
  }

  render(){

    const { artist_name, image_url, track_id, track_name} = this.props.playing;
    return (
      <div className="playing">
        <section className="playing-infoBar">
          <img className="playing-infoBar__logo" src="./logo.svg" alt="logo"/>
          <h3>Now playing <span className="timeCount">time left:{this.state.timeLeft}</span></h3>
          <p><strong>{artist_name}</strong> - {track_name}</p>
          <p>track id: {track_id}</p>
        </section>

        <section className="playing-img">
          <img className="playing-img" src={image_url} alt=""/>
        </section>


        <section className="playing-control">
          <i className="fa fa-play playing-control__play" aria-hidden="true"></i>
        </section>

      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    playing:state.playing
  }
}


export default connect(mapStateToProps)(Playing)
