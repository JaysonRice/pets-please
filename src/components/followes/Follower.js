import React, { useContext } from "react"
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

                <p className="followedUserName">{user.username}</p>

                <Button size="sm" color="primary" onClick={() => {
                    unFollowerUser(selectedUser.id)
                }}>x</Button>
            </section>
        </>
    );
};