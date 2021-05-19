import CV from '../css/CV.pdf';
import Banner from '../components/banner'
import {useParams} from 'react-router-dom';
import React, { useEffect } from 'react';

function DownloadCV(){
    console.log('descargando..'); 
}


function MainPortfolio(props)
{        
    useEffect(() => {
        document.title = "Portfolio - Home"
      }, []);

        return (
            <div id="home scene" className="container-fluid home p-0">
               { 
               //<Banner text="WHO I AM?" background="#141414" color="white"/>
                }
            <div className="responsiveGrid">
                <div className="GridHome">
                    <div className="imgGrid">                      
                    </div>
                    <div className="home-text CardHome contentGrid">                    
                        <div className="Card">
                            <h6>I am</h6>
                            <h1>Christian Avila</h1>
                            <p>Frontend Developer</p>
                        </div>                
                    </div>         
                </div>
                    <div className="glassobj" style={{   
                            width: '-webkit-fill-available',
                            height: '35px'
                        }}>
                            <a href = {CV} onClick={DownloadCV} target = "_blank" rel="noreferrer">              
                                <p>Download CV <span className="bx bxs-download"></span></p>             
                            </a>
                    </div>
                    
                </div>
                <div className="footermain">
                    <div className="aboutcontent">                  
                        <ul>
                            <li><strong>SOLID</strong> principles.</li>
                            <li><strong>API REST</strong> Knowledge.</li>
                            <li>Hight <strong>OOP</strong> Knowledge.</li>     
                            <li>Experience using <strong>REGEX</strong></li>
                            <li><strong>DESIGN PATTERNS</strong> knowledge.</li>
                            <li><strong>MULTI-THREADING</strong> Knowledge.</li>
                            <li>Experience with <strong>AGILE METHODOlOGIES</strong> {'&'} <strong>GIT</strong></li>                       
                        </ul>
                    </div>
                </div>       
            </div>            
        );
}

export default MainPortfolio;