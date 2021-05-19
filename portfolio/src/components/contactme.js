import React, { useEffect } from 'react';

function Contactme()
{
    useEffect(() => {
        document.title = "Portfolio - Contact"
      }, []);

        return(
            <div id="contact" className="container-fluid contact">
                <div className="title">
                <div className="title">
                    <h2>Contact me</h2>
                </div>  
                </div>
                <div className="row" style={{margin: 'auto auto auto 70px', width: '-webkit-fill-available', display: 'block'}}>
                <div>
                    <div className="left-column">
                    <div className="text">
                        <h3>Feel free to contact</h3>
                        <p>You can contact me anytime in the below platform. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, facilis.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item border-0">
                        <span><i className="bx bxs-user" style={{color:'#ffffff'}} aria-hidden="true" /></span>Christian Avila                           
                        </li>
                        <p className="list-group-item border-0"><span><i className="bx bx-mail-send" style={{color:'#ffffff'}} aria-hidden="true" /></span>ravensan9721@gmail.com</p>
                        <p className="list-group-item border-0"><span><i className="bx bxs-phone" style={{color:'#ffffff'}} aria-hidden="true" /></span>+52 6181595214</p>
                        <p className="list-group-item border-0"><span><i className="bx bxl-github " style={{color:'#ffffff'}} aria-hidden="true" /></span>Christian9721</p>
                        <p className="list-group-item border-0"><span><i className="bx bxl-linkedin-square " style={{color:'#ffffff'}} aria-hidden="true" /></span>christian-avila-9a83691aa</p>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        )
}

export default Contactme;