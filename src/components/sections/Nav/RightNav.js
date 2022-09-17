import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  
  @media (max-width: 1000px) {
    flex-flow: column nowrap;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 40vw;
    padding-top: 3
    .5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
        <nav className="main-header main-menu" id="main-menu">
          <span id="close-menu-button" 
          className="menu-icon jam-close icon__icon"><svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="-6 -6 24 24" 
          fill="currentColor"
          width="40" 
          height="40" 
          preserveAspectRatio="xMinYMin" 
          ><path d="M7.314 5.9l3.535-3.536A1 1 0 1 0 9.435.95L5.899 4.485 2.364.95A1 1 0 1 0 .95 2.364l3.535 3.535L.95 9.435a1 1 0 1 0 1.414 1.414l3.535-3.535 3.536 3.535a1 1 0 1 0 1.414-1.414L7.314 5.899z"></path></svg>
          </span> 
              <ul>
                  <li><NavLink to="/" exact="true">Home</NavLink></li>
                  <li><NavLink to="/aboutMe" exact="true">About Me</NavLink></li>
                  <li><NavLink to="/demos" exact="true">Demos</NavLink></li>
              </ul>
        </nav> 
    </Ul>
  )
}

export default RightNav