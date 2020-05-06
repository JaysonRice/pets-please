import React, { useContext, useRef, useState } from "react"
import { FollowerContext } from "./FollowerProvider"



export const FollowUserForm = (selectedUser, toggle) => {
    const { followUser } = useContext(FollowerContext)
    const currentUserId = localStorage.getItem('pets_please_user')

    const constructNewRelationship = () => {
        followUser({
            followedUserId: selectedUser.id,
            userId: parseInt(currentUserId)
        })
        .then(toggle)
    }

return (
    <form className="addPetForm">

        <button type="submit"
            onClick={
                evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewRelationship()
                }
            }
            className="btn btn-primary">
            Yes
            </button>
            <button type="submit"
            onClick={
                evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    toggle()
                }
                
            }
            className="btn btn-primary">
            No
            </button>
        </form>
)
}