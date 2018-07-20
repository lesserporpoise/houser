import React, {Component} from 'react'
import {Link} from 'react-router-dom';


class Wizard2 extends Component{
    constructor(){
        super()
        this.state={
            name:"",
            address:"",
            city:"",
            state:"",
            zipcode:0
        }
    }

    render(){
        return(
            <div>
                <p>This is Wizard2</p>
                <Link to='/wizard'><button>Cancel</button></Link>
                <Link to='/houses/wizard/three'><button>Proceed</button></Link>
            </div>
        )
    }
}


export default Wizard2