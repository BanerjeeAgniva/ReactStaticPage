import React from 'react';
import ReactDOM from 'react-dom';
const navbarJSX=(
    <nav>
      <img src="../images/react-icon-small.png" className="nav--icon" />
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
)

export default function Navbar() {
    return (
        navbarJSX
    )
}