import React from "react"
import Login from "./Login"
import Register from "./Register"

export default ({ setActiveUser }) => {
    return (
        <>
            <header className="welcome">
                <h5 className="weldcomeTo">Welcome to</h5>
                <img src="https://res.cloudinary.com/dawhgtkqk/image/upload/v1589296165/bluecropped_bod0er.png" alt="Pets please logo" />
            </header>
            <div className="authContainer">
                <Login setActiveUser={setActiveUser} />
                <Register setActiveUser={setActiveUser} />
            </div>
        </>
    )
}