import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pagesize = 12;
  state ={
    progress:0
  }
  setprogress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
     
     <div>
        <Router>
        <Navbar/>
        <LoadingBar
        height={5}
        color='#f11946'
        progress={this.state.progress}
       
      />
        <Routes>
          <Route path="/" element={<News setprogress={this.setprogress}   pagesize={this.pagesize} key= "general" category = "general" country = "in" />} />
          <Route path="/business" element={<News setprogress={this.setprogress}   pagesize={this.pagesize} key= "business" category = "business" country = "in" />} />
          <Route path="/entertainment" element={<News setprogress={this.setprogress}   pagesize={this.pagesize} key= "entertainment" category = "entertainment" country = "in" />} />
          <Route path="/health" element={<News setprogress={this.setprogress}   pagesize={this.pagesize} key= "health" category = "health" country = "in" />} />
          <Route path="/science" element={<News setprogress={this.setprogress}   pagesize={this.pagesize} key= "science" category = "science" country = "in" />} />
          <Route path="/sports" element={<News setprogress={this.setprogress}   pagesize={this.pagesize} key= "sports" category = "sports" country = "in" />} />
          <Route path="/technology" element={<News setprogress={this.setprogress}   pagesize={this.pagesize} key= "technology" category = "technology" country = "in" />} />          
        </Routes>
     
    </Router>
     
     </div>
     
      
    )
  }
}

