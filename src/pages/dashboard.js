import React, { useEffect } from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import Profile from "../components/profile"
import RouteBase from "../components/RouteBase"
import RouteSecret from "../components/RouteSecret"
import RouteLogin from "../components/RouteLogin"
import { navigate } from "gatsby"

const Dashboard = ({ location }) => {
  useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      navigate("/dashboard/login", { replace: true })
    }
  }, [])
  return (
    <Layout>
      <Profile />
      <Router>
        <RouteBase path="/dashboard/base" />
        <RouteSecret path="/dashboard/secret" />
        <RouteLogin path="/dashboard/login" />
      </Router>
      <p>TODO: create a dahsboard</p>
    </Layout>
  )
}

export default Dashboard
