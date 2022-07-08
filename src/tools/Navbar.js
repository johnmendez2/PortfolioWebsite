import { Link, useMatch, useResolvedPath } from "react-router-dom"
import React, { useState } from "react";
import AnimatedPage from "./AnimatedPage";
import "./Navbar.css"

export default function Navbar() {


  return (

      <nav className="nav">
          <Link to="/" className="animated">
          &lt;JohnMendez/&gt;
      </Link>
      <ul>
      <CustomLink to="/" id="logo1">Home</CustomLink>
      <CustomLink to="/projects" id="logo1">Projects</CustomLink>
        <CustomLink to="/contact" id="logo1">Contact Information</CustomLink>
      </ul>

    </nav>

  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}