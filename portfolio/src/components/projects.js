import React, { useEffect } from 'react';

function testVideo(id, event) {
  event.currentTarget.setAttribute("style", "display: none");

  var video = document.getElementById(id);

  video.paused ? video.play() : video.pause();

  event.preventDefault();
}

function Project(props) {

  useEffect(() => {
    document.title = "Portfolio - Featured"
  }, []);

  return (
    <div className="row" style={{ marginTop: "75px" }}>
      <div className={`${props.className}Video`}>
        <video
          id={`trigger${props.className}`}
          loop
          muted
          playsInline
          data-threshold={0}
          poster={props.poster}
          preload="metadata"
          tabIndex={0}
          width={200}
          height={400}
        >
          <source
            src={props.video}
            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
          />
        </video>
        <span id={`first${props.className}Span`}>
          Coverage: {props.coverage}%
        </span>
        <a
          href="#"
          className={`playBut ${props.className}Btn`}
          onClick={testVideo.bind(this, `trigger${props.className}`)}
        >
          <svg
            version="1.1"
            x="0px"
            y="0px"
            width="100px"
            height="100px"
            viewBox="0 0 213.7 213.7"
            enableBackground="new 0 0 213.7 213.7"
            xmlSpace="preserve"
          >
            <polygon
              className="triangle"
              id="XMLID_18_"
              fill="none"
              strokeWidth={7}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              points="
                        73.5,62.5 148.5,105.8 73.5,149.1 "
            />
            <circle
              className="circle"
              id="XMLID_17_"
              fill="none"
              strokeWidth={7}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              cx="106.8"
              cy="106.8"
              r="103.3"
            />
          </svg>
        </a>
        <div className={`MobileObj Mobile${props.className}`}>
            <img src={props.image}></img>
        </div>
      </div>
      <div className={`${props.className}Info`}>
        <h3>{props.appname}</h3>
        <p style={{ marginTop: "10px" }}>
          powered by: <span />
        </p>
        <div>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
