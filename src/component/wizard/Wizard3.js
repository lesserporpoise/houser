import React, {Component} from 'react'
import {Link} from 'react-router-dom';


class Wizard3 extends Component{
    constructor(){
        super()
        this.state={
            bob:"man",
        }
    }

    render(){
        return(
            <div>
                <p>This is Wizard3</p>
                <Link to='/'><button>Home</button></Link>
                <Link to='/houses/wizard/two'><button>Previous</button></Link>
            </div>
        )
    }
}


export default Wizard3