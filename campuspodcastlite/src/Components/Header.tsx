import React from 'react'
import "../Styles/Header.css"
import Search from './Search'

export default function Header() {
  return (
    <section className="header-container">
        <div className="header-logo row">
            <span id="headerlogo">
                <img src="headphone.svg"></img>
            </span>
            <div className="logo-text">
                <h1>Campus Podcast Lite</h1>
                <h2>University Podcast Network</h2>
            </div>
        </div>
        <div className="header-search">
            <Search />
        </div>
    </section>
  )
}
