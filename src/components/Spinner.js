import './Spinner.css';
import React, { Component } from 'react'

export default class Spinner extends Component {
  render() {
    return (
        <>
        <div className="center-body">
        <div className="loader-line-3">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
            <div className="bar4"></div>
            <div className="bar5"></div>
            <div className="bar6"></div>
        </div>
        </div>
        </>
    )
  }
}
