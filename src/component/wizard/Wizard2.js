import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios'


class Wizard2 extends Component{
    constructor(){
        super()
        this.state={
            bob:'meow'
        }

    render(){
        return(
            <div>
                <p>This is Wizard2</p>

                <Link to='/houses/wizard'><button>Proceed</button></Link>
            </div>
            )
        }
    }
}


export default Wizard2