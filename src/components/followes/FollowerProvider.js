import React, { useState, useEffect } from "react"

export const FollowerContext = React.createContext()

export const FollowerProvider = (props) => {
    const [followers, setFollowers] = useState([])

    const getFollowers = () => {
        return fetch("http://localhost:8088/followers?_expand=user")
            .then(res => res.json())
            .then(setFollowers)
    }

    const addFollower = follower => {
        return fetch("http://localhost:8088/followers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(follower)
        })
            .then(getFollowers)
    }

    const deleteFollower = followerId => {
        return fetch(`http://localhost:8088/followers/${followerId}`, {
            method: "DELETE"
        })
            .then(getFollowers)
    }

    useEffect(() => {
        getFollowers()
    }, [])

    return (
        <FollowerContext.Provider value={
            {
                followers,
                addFollower,
                deleteFollower
            }
        }>
            {props.children}
        </FollowerContext.Provider>
    )
}