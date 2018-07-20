import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios'


class Wizard extends Component{
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
        axios.post("/houses/add",newHouse).then((response)=>{
            console.log(response)}).catch((err)=>console.log(err))
        }
    render(){
        return(
            <div>
                <p>This is Wizard</p>
                <Link to='/'><button>Cancel</button></Link>
                <input placeholder="name" onChange={(e)=>this.changeHandler1(e.target.value)}/>
                <input placeholder="address" onChange={(e)=>this.changeHandler2(e.target.value)}/>
                <input placeholder="city" onChange={(e)=>this.changeHandler3(e.target.value)}/>
                <input placeholder="state" onChange={(e)=>this.changeHandler4(e.target.value)}/>
                <input placeholder="zipcode" onChange={(e)=>this.changeHandler5(e.target.value)}/>
                <button onClick={()=>this.addHouse()}>Where's Rachel!?!?</button>
                <Link to='/houses/wizard2'><button>Proceed</button></Link>
            </div>
        )
    }
}


export default Wizard