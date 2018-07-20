import React from 'react'
import axios from 'axios'

export default function House(props){
    let bob = props.id;
    let noMoreHouse = function deleteHouse(id){
        axios.delete(`http://localhost:3501/houses/delete/${id}`).then(
            (results)=>console.log(results))
    }

    return(
        <div>
            <p>{props.name} {props.id}</p>
            <button onClick={()=>noMoreHouse(props.id)}>delete</button>
        </div>
    )
}

