import React from "react"


export default function Pet(props){
  return(
            <ol>
                <li>Breed: {props.breed}</li>
                <li>Name: {props.name}</li>
            </ol>
        )

}

