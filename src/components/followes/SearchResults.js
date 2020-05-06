import React, { useState, useContext, useEffect } from "react"
import { Modal, ModalHeader, ModalBody, Button, ModalFooter } from "reactstrap"
import { UserContext } from "../profiles/UserProvider"

export const SearchResults = ({ searchTerms }) => {
    const { users, UnFollowUser } = useContext(UserContext)
    // const { customers } = useContext(CustomerContext)
    // const { locations } = useContext(LocationContext)

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
            const subset = users.filter(user => user.username.toLowerCase().includes(searchTerms) && user.id !== parseInt(currentUserId))
            setFiltered(subset)
        } else {
            setFiltered([])
        }
    }, [searchTerms, users])

    return (
        <div className="searchResults">
            <h3>Results</h3>
            <div className="animals">
                {
                    filteredUsers.map(user => <div
                        className="fakeLink href"
                        onClick={() => {
                            // const location = locations.find(l => l.id === user.locationId)
                            // const customer = customers.find(c => c.id === user.customerId)

                            setUser({ user })
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
                    Follow User?
                    <Button onClick={toggle} outline color="primary">Yes</Button>
                    <Button onClick={toggle} outline color="danger">No</Button>
                </ModalBody>
            </Modal>

        </div>
    )
}