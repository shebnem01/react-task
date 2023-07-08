import React, { Component } from 'react'

import styles from './/header.module.css'
import Navbar from './navbar'
class Header extends Component {
    static defaultProps={
        title:"header",
    }
  render() {
    return (
      <div><Navbar/></div>
    )
  }
}
export default Header