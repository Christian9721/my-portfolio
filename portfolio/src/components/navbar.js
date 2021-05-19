import '../css/responsivenavbar.css';
import ProfilePic from '../images/profile.jpg';
import {Link, NavLink} from 'react-router-dom';
import React, { useEffect } from 'react';

let btn;
let sidebar;

function timeout(delay) {
  return new Promise( res => setTimeout(res, delay) );
}

async function ChangeMenuState(e)
{
  sidebar.classList.toggle("active");

  if(btn.classList.contains("bx-menu")){
    btn.classList.replace("bx-menu" , "bx-menu-alt-right");
    await timeout(200);
    sidebar.setAttribute("style", "clip-path: polygon(0 0, 100% 0, 100% 7%, 97% 9%, 98% 91%, 100% 93%, 100% 100%, 0 100%)");
  }else{
    btn.classList.replace("bx-menu-alt-right", "bx-menu");
    await timeout(200);
    sidebar.removeAttribute("style", "clip-path: polygon(0 0, 100% 0, 100% 7%, 97% 9%, 98% 91%, 100% 93%, 100% 100%, 0 100%)");
  }
  e.preventDefault();

  
}
function SearchBar(){
  let sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("active");
}

function NavBar(props)
{   
    useEffect(() => {
      btn = document.querySelector("#btn");
      sidebar = document.querySelector(".sidebar");

      console.log(btn);
    }, []);  

        return (
            <div>
              <div className="sidebar">
                <div className="logo_content">
                  <div className="logo">
                  <div className="iconmenu"/>
                    <div className="logo_name">Portfolio</div>
                  </div>
                  <i className="bx bx-menu" id="btn" onClick={ChangeMenuState}/>
                </div>
                <ul className="nav_list">
                  <li>
                    <i className="bx bx-search" onClick={SearchBar}/>
                    <input type="text" placeholder="Search..." />
                    <span className="tooltip">Search</span>
                  </li>

                  <li>
                  <NavLink  to="/main">
                      <i className="bx bx-user" />
                      <span></span>
                      <span className="links_name">User</span>
                  </NavLink >
                    <span className="tooltip">User</span>
                  </li>
                  <li>
                  <NavLink  to="/featured">
                      <i className="bx bx-rocket" />
                      <span></span>
                      <span className="links_name">Featured</span>
                  </NavLink >
                    <span className="tooltip">Featured</span>
                  </li>
                  <li>
                  <NavLink  to="/skills">
                      <i className="bx bx-cube-alt" />
                      <span className="links_name">Skills</span>
                  </NavLink >
                    <span className="tooltip">Skills</span>
                  </li>                
                  <li>
                  <NavLink  to="/more">
                      <i className="bx bxl-youtube" />
                      <span className="links_name">More</span>
                  </NavLink >
                    <span className="tooltip">More</span>
                  </li>
                  <li>
                  <NavLink  to="/contact">
                      <i className="bx bx-phone" />
                      <span className="links_name">Contact</span>
                  </NavLink >
                    <span className="tooltip">Contact</span>
                  </li>       
                </ul>
                <div className="profile_content">
                  <div className="profile">
                    <div className="profile_details">
                      <img src={ProfilePic} alt="ProfilePic" />
                      <div className="name_job">
                        <div className="name">Christian Avila</div>
                        <div className="job">Software Developer</div>
                      </div>
                    </div>
                    <i className="bx bx-log-out" id="log_out" />
                  </div>
                </div>
              </div>              
            </div>
        );
}

export default NavBar;