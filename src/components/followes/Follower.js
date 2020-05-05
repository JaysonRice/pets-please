import React, { useState, useContext, useEffect } from "react"
import { Button } from "reactstrap"
import { FollowerContext } from "./FollowerProvider"

export default ({follower}) => (
    const { deleteFollower } = useContext(FollowerContext)  

    return (
         <section className="location">
        <>
        <h3>
            {follower.user.username}
        </h3>
        <Button outline color="danger" onClick={() => {
                        deleteFollower(pet.id)
                        toggleEdit()
                    }}>Delete Pet</Button>
    </section>
    </>
)