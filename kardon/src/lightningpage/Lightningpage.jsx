import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Lightningpage.css'
import {AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart} from 'react-icons/ai'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import Lightninghome from '../lightninghome/Lightninghome';
import Lightning from '../lightning/Lightning';

//used a class component to implement show and hide nav list items for mobile
class Lightningpage extends Component {
  //nav mobile state
  state = {clicked: false};
  handleClick = () =>{
    this.setState({clicked:
    !this.state.clicked
    })
  }
  render() {
  return (
    <div>
      {/* nav section or 0th section according to binary counting lol... */}
        <header>
          <div className="logo"><Link to={'/'}>Kardon</Link></div>
          <nav>
            <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
              <li><Link to={'/catalog'}>Catalog</Link></li>
              <li><Link to={'/limited'}>Limited Collection</Link></li>
              <li><Link to={'/about'}>About Us</Link></li>
              <li><Link to={'/inspiration'}>Inspiration</Link></li>
              <li><Link to={'/contacts'}>Contacts</Link></li>
            </ul>
          </nav>
          <div className="header-icons">
            <AiOutlineSearch/>
            <AiOutlineHeart/>
            <AiOutlineShoppingCart/>
          </div>
          {/* this was where i targetted my mobile with an id of mobile to set the state when clicked to either hide or show */}
            <div id='mobile' onClick={this.handleClick}>
              <i id='bar' className={this.state.clicked ?
              'fas fa-times' : 'fas fa-bars'}></i>
            </div>
        </header>
        {/* section 1 */}
        <Lightninghome/>
        <Lightning/>
    </div>
  )
}
}

export default Lightningpage