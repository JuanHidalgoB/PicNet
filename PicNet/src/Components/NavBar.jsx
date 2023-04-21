import React from 'react';
import '../Styles/NavBar.css';
import logo from '../images/LogoPicNet.png'

function NavBar() {
    return (
      <div className="nav">
        <h1 className='font-pacifico text-4xl text-black pl-3 py-5'>PicNet</h1>
        {/* <img src={logo} alt="Logo" /> */}
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
              <a href="/search">Search</a>
          </li>
          <li>
            <a href="/chats">Chats</a>
          </li>
          <li>
            <a href="/create">Create</a>
          </li>
          <li>
            <a href="/profile">Profile</a>
          </li>
          <li>
            <a href="/logout">Log out</a>
          </li>
        </ul>
      </div>
    );
  }
  
  export default NavBar