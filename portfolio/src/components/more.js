import React, { Component } from 'react';

var live;
var dead;
var atom;


class More extends Component{
    noise = () => {
        let canvas, ctx;
    
        let wWidth, wHeight;
    
        let noiseData = [];
        let frame = 0;
    
        let loopTimeout;
    
    
        // Create Noise
        const createNoise = () => {
            const idata = ctx.createImageData(wWidth, wHeight);
            const buffer32 = new Uint32Array(idata.data.buffer);
            const len = buffer32.length;
    
            for (let i = 0; i < len; i++) {
                if (Math.random() < 0.5) {
                    buffer32[i] = 0xff000000;
                }
            }
    
            noiseData.push(idata);
        };
    
    
        // Play Noise
        const paintNoise = () => {
            if (frame === 9) {
                frame = 0;
            } else {
                frame++;
            }
    
            ctx.putImageData(noiseData[frame], 0, 0);
        };
    
    
        // Loop
        const loop = () => {
            paintNoise(frame);
    
            loopTimeout = window.setTimeout(() => {
                window.requestAnimationFrame(loop);
            }, (1000 / 25));
        };
    
    
        // Setup
        const setup = () => {
            wWidth = window.innerWidth;
            wHeight = window.innerHeight;
    
            canvas.width = wWidth;
            canvas.height = wHeight;
    
            for (let i = 0; i < 10; i++) {
                createNoise();
            }
    
            loop();
        };
    
    
        // Reset
        let resizeThrottle;
        const reset = () => {
            window.addEventListener('resize', () => {
               /* window.clearTimeout(resizeThrottle);*/
    
                resizeThrottle = window.setTimeout(() => {
                    window.clearTimeout(loopTimeout);
                    setup();
                }, 200);
            }, false);
        };
    
    
        // Init
        const init = (() => {
            canvas = document.getElementById('noise');
            ctx = canvas.getContext('2d');
    
            setup();
        })();
    };

    OnMeasurement(){
        var rand = Math.floor(Math.random()*2);
        if(rand===1){
            live.setAttribute('style','opacity:0');
            dead.setAttribute('style','opacity:1');
        }
        else{
            dead.setAttribute('style','opacity:0');
            live.setAttribute('style','opacity:1');
        }
        atom.classList.remove('atom-before');
        atom.classList.add('atom-after');
    }
    OnLeaveMeasurement(){
        live.setAttribute('style','opacity:1');
        dead.setAttribute('style','opacity:1');
        atom.classList.add('atom-before');
        atom.classList.remove('atom-after');
    }

    componentDidMount(){

        document.title = "Portfolio - More";

        live = document.getElementById('live');
        dead = document.getElementById('dead');
        atom = document.getElementById('atom');

        if(this.isMobile())
          return;
        this.noise();
    }

    isMobile() {
      const toMatch = [
          /Android/i,
          /webOS/i,
          /iPhone/i,
          /iPad/i,
          /iPod/i,
          /BlackBerry/i,
          /Windows Phone/i
      ];
  
      return toMatch.some((toMatchItem) => {
          return navigator.userAgent.match(toMatchItem);
      });
  }


render(){

    const ul = [];
    const il = [];

    for (let j = 1; j <= 19; j++) {
        il.push(<span key={j} />);
    }

    for(let i = 1; i<=36; i++)
    {
        ul.push(
            <div className="plane" key={i}>
                {il}
            </div>
        );       
    }

    return(
      <div className="root-cat">
          <div>
        <div className="row px-2 mb-2" style={{color: 'white'}}>
          <h3>COMING SOON</h3>
        </div>
        <main role="main" className="main-content" id="main-content">          
          <div className="advice-atom"> 
            <p id="advice-atom-msg">Hover On The Atom</p>                         
          </div>
          <div className="catbox" id="main-line">
            <div style={{height: '-webkit-fill-available', position: 'absolute'}}> 
              <div>
                <img className="live" src={this.props.live} id="live" />
                <div className="liveafter" />
              </div>
              <img className="dead" src={this.props.dead} id="dead" />
            </div>      
            <div className="atom atom-before" id="atom" onMouseOver={this.OnMeasurement}  onMouseOut={this.OnLeaveMeasurement}>
              <div>
                <div />
              </div>
              <div>
                <div />
              </div>
              <div>
                <div />
              </div>
              <div>
                <div />
              </div> 
            </div>
            <div>
              <img className="top" src={this.props.bx_top}/>
              <img className="bottom" src={this.props.bx_bottom} />
              <img className="middle" src={this.props.bx_front} /> 
            </div>                            
          </div>
          <div style={{position: 'relative', display: 'contents'}}>
            <div className="infochannel">
              <h4><span id="js-rotating">Quantum computing</span><a href="https://www.youtube.com/c/MayenStudios" className="btn btn-dark">TUTORIALS</a></h4>
            </div>
          </div>
          <canvas id="noise" className="noise" style={{pointerEvents: 'none'}} />
          <div className="vignette" style={{pointerEvents: 'none'}} />
        </main>
        <div>
          <div style={{position: 'relative', top: '-80px', pointerEvents: 'none'}}>
            <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
              <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
              </defs>
              <g className="parallax">
                <use xlinkHref="#gentle-wave" x={48} y={0} fill="#141414" /> 
                <use xlinkHref="#gentle-wave" x={48} y={3} fill="#141414c9" />
                <use xlinkHref="#gentle-wave" x={48} y={5} fill="#1414148c" />
                <use xlinkHref="#gentle-wave" x={48} y={7} fill="#fff0" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      </div>
    )
    /*
    <div>
            <div className="sphere">
                {ul}
            </div>
        </div>
    */
}
}
export default More;