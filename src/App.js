import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import Header from './component/header/Header'
import route from './route'
// import newHouse from './ducks/reducer'
// import oldHouse from './ducks/reducer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>This is App</p>
        {route}
        <Header/>
        {/* <button onClick={newHouse("boat")}></button>
        <button onClick={oldHouse("meow")}></button> */}
      </div>
    );
  }
}
function mapStateToProps(state){
  return state;
}

// export default connect(mapStateToProps,{oldHouse,newHouse})(App);
export default App;
