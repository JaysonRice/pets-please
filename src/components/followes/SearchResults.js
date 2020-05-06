import React, { useState, useContext, useEffect } from "react"
import { Modal, ModalHeader, ModalBody, Button, ModalFooter } from "reactstrap"
import { UserContext } from "../profiles/UserProvider"
import { FollowUserForm } from "./FollowUser"

export const SearchResults = ({ searchTerms }) => {
    const { users } = useContext(UserContext)

    const [filteredUsers, setFiltered] = useState([])

    const [selectedUser, setUser] = useState({
        user: {}
    })

    // Toggle details modal
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    const currentUserId = localStorage.getItem('pets_please_user')

    useEffect(() => {
        if (searchTerms !== "") {
            const subset = users.filter(user => user.username.toLowerCase().includes(searchTerms) 
            && user.id !== parseInt(currentUserId) )
            setFiltered(subset)
        } else {
            setFiltered([])
        }
    }, [searchTerms, users])


    return (
        <div className="searchResults">
            <p>Results</p>
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

                <FollowUserForm key={selectedUser.id} toggle={toggle} {...selectedUser}/>

            </Modal>

        </div>
    )
}