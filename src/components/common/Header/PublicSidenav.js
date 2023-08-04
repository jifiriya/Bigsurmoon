import React from 'react'
import { Link } from 'react-router-dom'

function PublicSidenav({showMenu, closeSidenav }) {
  return (
    <section className={`sidebar-wrap public ${showMenu ? "show" : "hide"}`}>
      <div className="back-drop" onClick={closeSidenav}></div>
      <div className="sidenav">
        <Link to='/'>Home</Link>
        <Link to='/about-ar'>About AR</Link>
        <Link to='/configurator'>About 3D-Configurator</Link>
        <Link to='/3d-studio'>3D Studio</Link>
        <Link to='/pricing'>Pricing</Link>
        <Link to='/support'>Support</Link>
      </div>
    </section>
  )
}

export default PublicSidenav