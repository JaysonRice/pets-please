import React, { useContext } from "react"
import { FollowerContext } from "./FollowerProvider"
import Follower from "./Follower"
import { UserContext } from "../profiles/UserProvider"
import "./Followers.css"

export default () => {

    const { usersFollowed } = useContext(FollowerContext)
    const { users } = useContext(UserContext)

    const currentUserId = localStorage.getItem('pets_please_user')
    // Get followerIds of everybody you follow
    const filteredFollowed = usersFollowed.filter(followedUser => followedUser.userId === parseInt(currentUserId));
    // Take those Ids and use them to find the objects of the people you follow
    const everyoneYouFollow = filteredFollowed.map(follower => {
        return users.find(user => user.id === follower.followedUserId)
    })
    const everyoneYouFollowSorted  = everyoneYouFollow.sort((Beginning, End) => {
        let nameA = Beginning.username
        let nameB = End.username
        if (nameA < nameB) {
            return -1
        }
        if (nameA > nameB) {
            return 1
        }
        return 0
    }
    )

    return (
        <>


            <div className="usersFollowedContainer">
                <h5>Following</h5>
                {
                    everyoneYouFollowSorted.map(user => {

                        return <Follower key={user.id} user={user} />
                    })
                }
            </div>

        </>
    )
}