import React, { useState, useContext, useEffect } from "react"
import { Button } from "reactstrap"
import { FollowerContext } from "./FollowerProvider"

export default ({ user }) => {
    const { usersFollowed, unFollowerUser } = useContext(FollowerContext)

    const selectedUser = usersFollowed.find(follower => {
        return user.id === follower.followedUserId
    })

    return (
        <>
            <section className="individualFollowedUser">

                <p>{user.username}</p>

                <Button size="sm" outline color="danger" onClick={() => {
                    unFollowerUser(selectedUser.id)
                }}>x</Button>
            </section>
        </>
    );
};