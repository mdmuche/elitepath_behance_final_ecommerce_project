import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Kardon.css'
import {AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart} from 'react-icons/ai'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import Nowonsale from '../nowonsale/Nowonsale';
import Explore from '../explore/Explore';
import Aboutus from '../Aboutus/Aboutus';
import Newarrivals from '../newarrivals/Newarrivals';
import Newcollection from '../newcollection/Newcollection';
import Limitedcollection from '../limitedcollection/Limitedcollection';
import Inspiration from '../inspiration/Inspiration';
import Newsletter from '../newsletter/Newsletter';
import Footer from '../footer/Footer';

//used a class component to implement show and hide nav list items for mobile
class Kardon extends Component {
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
        <header id='kardon-nav'>
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
        <Explore/>
        {/* section 2 */}
        <Nowonsale/>
        {/* section 3 */}
        <Aboutus/>
        {/* section 4 */}
        <Newarrivals/>
        {/* section 5 */}
        <Newcollection/>
        {/* section 6 */}
        <Limitedcollection/>
        {/* section 6 */}
        <Inspiration/>
        {/* section 7 */}
        <Newsletter/>
        {/* section 8 */}
        <Footer/>
    </div>
  )
}
}

export default Kardon