import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-danger">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Student</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Add Student</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/DeleteStudent">Delete Student</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/SearchStudent">Search student</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/ViewAll">View All</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>


    </div>
  )
}

export default NavBar