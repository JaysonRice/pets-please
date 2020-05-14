import React, { useState, useContext, useEffect } from "react"
import { Modal, ModalHeader, ModalBody } from "reactstrap"
import { UserContext } from "../profiles/UserProvider"
import { FollowUserForm } from "./FollowUser"
import { FollowerContext } from "./FollowerProvider"

export const SearchResults = ({ searchTerms, setTerms }) => {
    const { users } = useContext(UserContext)
    const { usersFollowed } = useContext(FollowerContext)

    const [filteredUsers, setFiltered] = useState([])

    const [selectedUser, setUser] = useState({
        user: {}
    })

    // Toggle details modal
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    const currentUserId = localStorage.getItem('pets_please_user')
    const filteredFollowed = usersFollowed.filter(followedUser => followedUser.userId === parseInt(currentUserId));
    
    useEffect(() => {
        if (searchTerms !== "") {
            const subset = users.filter(user => user.username.toLowerCase().includes(searchTerms) 
            && user.id !== parseInt(currentUserId)
            && filteredFollowed.every(userFollowed => userFollowed.followedUserId !== user.id)
            )
            setFiltered(subset)
        } else {
            setFiltered([])
        }
    }, [searchTerms, currentUserId, users])


    return (
        <div className="searchResults">
            <div className="divLine"></div>
            <div className="usersToFollow">
                {
                    filteredUsers.map(user => <div
                        className="individualUser fakeLink href"
                        onClick={() => {
                            setUser(user)
                            toggle()
                        }}
                    >{user.username}</div>)
                }
                  
            </div>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    {selectedUser.username}
                </ModalHeader>

                <ModalBody>
                    Follow {selectedUser.username}?
                </ModalBody>

                <FollowUserForm key={selectedUser.id} setTerms={setTerms} toggleFollower={toggle} selectedUser={selectedUser}/>

            </Modal>

        </div>
    )
}