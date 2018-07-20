import React, {Component} from 'react';
import House from '../house/House';
import {Link} from 'react-router-dom';
import axios from 'axios'

class Dashboard extends Component{
    constructor(){
        super()
        this.state={
            houseList:[]
        }
        this.deleteHouse = this.deleteHouse.bind(this);
        this.readHouses = this.readHouses.bind(this);
    }
    

    componentDidMount(){
        axios.get('http://localhost:3501/houses').then(
            (results)=>this.setState({houseList:results.data}))
    }
    deleteHouse(id){
        axios.delete(`http://localhost:3501/houses/delete/${id}`).then(
        (results)=>console.log(results));
    }
    readHouses(){
        axios.get('http://localhost:3501/houses').then(
            (results)=>{console.log(results.data);this.setState({houseList:results.data})});
    }

    render(){
        let houseListCopy = Object.assign([],this.state.houseList);
        return(
            <div>
                <p>This is Dashboard</p>
                <Link to='/wizard'><button>Add New Property</button></Link>
                <div>
                {houseListCopy.map((val,i)=><div key={i}><House name={val.name} id={val.id} delete={this.deleteHouse} reload={this.readHouses}/></div>)}
                </div>
                <button onClick={()=>this.readHouses()}>Show Houses</button>
            </div>
        )
    }
}


export default Dashboard