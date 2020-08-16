import React from "react"
import { Link } from "gatsby"
import "./layout.css"
import { IdentityContextProvider } from "react-netlify-identity-widget"

const Layout = ({ children }) => {
  return (
    <IdentityContextProvider url="https://fem-jamstack-auth.netlify.app">
      <header>
        <Link to="/">JAMstack app</Link>
      </header>
      <main>{children}</main>
    </IdentityContextProvider>
  )
}

export default Layout
