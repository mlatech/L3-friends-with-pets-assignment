import React from "react"
import Friends from "./Friends"
import data from "./data"
import "./style.css"

export default function FriendsList(){
    let friendsWithPets = data.map(person => {
        return(
            <Friends 
            key={person.id}
            name={person.name}
            age={person.age}
            pets={person.pets}


            />
        )
    })
    return(
        <div>
            {friendsWithPets}
        </div>
    )
}