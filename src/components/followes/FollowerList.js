import React, { useContext, useState } from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import { FollowerContext } from "./FollowerProvider"
import Follower from "./Follower"
import { UserContext } from "../profiles/UserProvider"
import "./Followers.css"

export default () => {

    const { usersFollowed } = useContext(FollowerContext)
    const {users} = useContext(UserContext)

    const currentUserId = localStorage.getItem('pets_please_user')
    const filteredFollowed = usersFollowed.filter(followedUser => followedUser.userId === parseInt(currentUserId));


    const everyoneYouFollow = filteredFollowed.map(follower => {
        return users.find( user=> user.id === follower.followedUserId)
            })

    return (
        <>
            

            <div className="usersFollowedContainer">
            <h3>Following</h3>
                {
                    everyoneYouFollow.map(user => {

                        return <Follower key={user.id} user={user} />
                    })
                }
            </div>

        </>
    )
}