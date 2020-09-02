import React from "react"

import { withAuthenticationRequired, useAuth0 } from "@auth0/auth0-react"

import AppointmentButton from "../components/appointment/AppointmentButton"
import Header from "../components/header/Header"
import Home from "./Home"

function Profile() {
  const { user } = useAuth0()
  return (
    <>
      <Header />

      <h1>
        Bem vinda de volta,
        {" "}
        {user.name}
      </h1>

      <AppointmentButton />
    </>
  )
}

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <Home />,
})
