import React from "react"

export default ({pet}) => (
    <section className="MyPet">
        <img className="MyPet__picture" src={pet.petpic.url} alt=""/>
        <h3 className="MyPet__name">{pet.name}</h3>
    </section>
)