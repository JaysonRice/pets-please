import React, { useContext } from "react"
import { FollowerContext } from "./FollowerProvider"
import { Button } from "reactstrap"

export const FollowUserForm = (selectedUser, toggleFollower) => {
    const { followUser } = useContext(FollowerContext)
    const currentUserId = localStorage.getItem('pets_please_user')

    const constructNewRelationship = () => {
        followUser({
            followedUserId: selectedUser.id,
            userId: parseInt(currentUserId)
        })
        .then(toggleFollower)
    }

return (
    <form className="followUserForm">

        <Button type="submit"
            onClick={
                evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewRelationship()
                }
            }
            outline block className="followUserButton" color="primary">
            Yes
            </Button>
            <Button type="submit"
            onClick={
                evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                }
                
            }
            outline block className="followUserButton" color="danger">
            No
            </Button>
        </form>
)
}