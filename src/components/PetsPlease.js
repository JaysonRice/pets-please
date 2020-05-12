import React, { useState } from "react"
import Dashboard from "./Dashboard"
import Auth from "./auth/Auth"

export default () => {
    const [activeUser, setActiveUser] = useState(localStorage.getItem("pets_please_user") || "")

return activeUser ? <Dashboard setActiveUser={setActiveUser} />: <Auth setActiveUser={setActiveUser} />

}