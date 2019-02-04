import React, { Component } from 'react'

export default class Nav extends Component {
  render() {
    return (
         <nav>
            <div className="nav-wrapper #00695c teal darken-3">
            <a href="#" className="brand-logo left">ArtFolio2.0</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
            </div>
        </nav>
    )
  }
}
