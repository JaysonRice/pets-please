import React, { useState, useContext, useEffect } from "react"
import { Button } from "reactstrap"
import { FollowerContext } from "./FollowerProvider"

export default ({ user }) => {
    const { unFollowerUser } = useContext(FollowerContext)

    return (
            <>
        <section className="individualFollowedUser">

                    <p>{user.username}</p>

                <Button size="sm" outline color="danger" onClick={() => {
                    unFollowerUser(user.id)
                }}>x</Button>
            </section>
    </>
    );
};