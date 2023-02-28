import React, { Component } from 'react'
import User from './User'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import AdvancedExample from './Pagination';
import Child from './Child';
export default class App extends React.PureComponent  {
  constructor()
  {
     super();
  }
  prarentfunction(data)
        {
          console.log(data)
           return data
        }
    
  render() {
    return (
     <div>
     <h1>{this.prarentfunction()}</h1>
       <Child c={this.prarentfunction}/>
     </div>
    )
  }
}
