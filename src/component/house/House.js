import React from 'react'

export default function House(props){
    let bob = props.id
    return(
        <div>
            <p>{props.name} {props.id}</p>
            <button onClick={props.delete(bob)}>Delete House</button>
        </div>
    )
}