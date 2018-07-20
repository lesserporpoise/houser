import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios'


class Wizard3 extends Component{
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
    changeHandler1(input){
        this.setState({
            name:input
        })
    }
    changeHandler2(input){
        this.setState({
            address:input
        })
    }
    changeHandler3(input){
        this.setState({
            city:input
        })
    }
    changeHandler4(input){
        this.setState({
            state:input
        })
    }
    changeHandler5(input){
        this.setState({
            zipcode:input
        })
    }
    addHouse(){
        let newHouse = {
                name:this.state.name,
                address:this.state.address,
                city:this.state.city,
                state:this.state.state,
                zipcode:this.state.zipcode
       }
    render(){
        return(
            <div>
                <p>This is Wizard3</p>
                <Link to='/'><button>Cancel</button></Link>
                <Link to='/houses/wizard2'><button>Proceed</button></Link>
            </div>
        )
    }
}


export default Wizard3