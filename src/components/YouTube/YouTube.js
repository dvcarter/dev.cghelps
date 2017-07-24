import React, { Component, PropTypes } from 'react';
import "./YouTube.css";

export default class YouTube extends Component {
    render() {

       let videoSrc = "https://www.youtube.com/embed/" +
           this.props.video + "?autoplay=" +
           this.props.autoplay + "&rel=" +
           this.props.rel +
           "&modestbranding=" +
           this.props.modest;

       return (
               <div className="container">
                <iframe className="player" type="text/html" width="100%"
                        height="400px"
                        src={videoSrc}
                        frameBorder="0"/>
                </div>
        )
    }
}

YouTube.propTypes = {
    video: PropTypes.string,
    autoplay: PropTypes.integer,
    rel: PropTypes.integer,
    modest: PropTypes.integer,
}
