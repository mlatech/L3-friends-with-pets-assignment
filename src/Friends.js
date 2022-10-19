import React from "react"
import Pet from "./Pet"


export default function Friends(props){
    let petsOnly = props.pets.map(pet =>{
        return(
            <Pet 
            key={pet.id}
            name={pet.name}
            breed={pet.breed}
            />
        )
    })
    return(
        <div className="container">
        <h2 className="name">{props.name} </h2>
        <h3 className="age">{props.age} years old </h3>
        <h3 className="pets">Pets:</h3>
        <div>{petsOnly}</div>
        <div>

        </div>
        </div>
        


    )
}