import React, { useContext } from "react"
import { UserContext } from "../profiles/UserProvider"

export const GetFollowerObjects = () => {
    const currentUserId = localStorage.getItem('pets_please_user')
    const { users } = useContext(UserContext)

    const currentUserInfo = users.find(user => user.id === parseInt(currentUserId))
    
    const followers = currentUserInfo.followers

    //convert follower relationships into user objects
    const followerObjects = followers.map(follower => {
        return users.find(user => user.id === follower.followingId)
    })

    return followerObjects

}

export const GetFollowerIdArray = () => {
    const currentUserId = localStorage.getItem('pets_please_user')
    const { users } = useContext(UserContext)

    const currentUserInfo = users.find(user => user.id === parseInt(currentUserId))
    debugger
    const followers = currentUserInfo.followers

    let followerIds = []

    followers.forEach(follower => {
        followerIds.push(follower.followingId)
    })

    return followerIds
}