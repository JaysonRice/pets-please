export default props => {
    const { addPet } = useContext(PetContext)
    const { petTypes } = useContext(PetTypeContext)
    const name = useRef()
    const petType = useRef()
    const currentUserId = localStorage.getItem('pets_please_user')

    const constructNewPet = () => {
        const petTypeId = parseInt(petType.current.value)
        if (petTypeId === 0) {
            window.alert("Please select a pet type")
        } else {
            followUser({
                name: name.current.value,
                pettypeId: petTypeId,
                userId: parseInt(currentUserId)
            })
                .then(props.toggler)
        }
    }

    return (
        <form className="addPetForm">
            <fieldset>
                <div className="form-group">
                    <label htmlFor="petName">Pet name: </label>
                    <input
                        type="text"
                        id="petName"
                        ref={name}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Pet name"
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Pet type: </label>
                    <select
                        defaultValue=""
                        name="petType"
                        ref={petType}
                        id="petType"
                        className="form-control"
                    >
                        <option value="0">Select an animal</option>
                        {petTypes.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>

            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        constructNewPet()
                    }
                }
                className="btn btn-primary">
                Save Pet
            </button>
        </form>
    )
}