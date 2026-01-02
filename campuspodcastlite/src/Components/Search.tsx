import React from 'react'
import "../Styles/Search.css"

export default function Search() {
  return (
    <section className="search-section">
        <img id="magnifying-glass" src="search.svg"></img>
        <input type="text" className="search-input border" placeholder="Search podcasts, authors or categories.." />
    </section>
  )
}
