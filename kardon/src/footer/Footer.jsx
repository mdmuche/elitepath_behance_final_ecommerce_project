import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import './Footer.css'
import {AiOutlineCopyright} from 'react-icons/ai'
import {TiSocialInstagram} from 'react-icons/ti'
import {SlSocialFacebook, SlSocialTwitter} from 'react-icons/sl'

function Footer() {
  let [db, setDb] = useState(null)
  
  useEffect(()=>{
     axios.get('http://localhost:5700/api/furniture/footer')
     .then(res=>{
      setDb(res.data);
     })
     .catch(err=>{
      console.log(err.message);
     })
  }, [db])
  return (
    <div className='bottom-section'>
      <div className='footer-logo'>
      <h2>Chair</h2>
      </div>
    <div className='bottom-footer'>
      <div>
        <h2>Informatio</h2>
        <ul>
            <a href="#"><li>About</li></a>
            <a href="#"><li>Inspiration</li></a>
            <a href="#"><li>Maintenance & care</li></a>
            <a href="#"><li>Materials</li></a>
            <a href="#"><li>Configuration</li></a>
        </ul>
      </div>
      <div>
        <h2>Help</h2>
        <ul>
            <a href="#"><li>Contact Us</li></a>
            <a href="#"><li>Track Your Order</li></a>
            <a href="#"><li>Returns & Exchanges</li></a>
            <a href="#"><li>Shoping</li></a>
            <a href="#"><li>Customer Service</li></a>
        </ul>
      </div>
      <div>
        <h2>Contact</h2>
        <p>1238 Faith St Berkeley CA94710,<br />United States</p>
        <p className='footer-num'>+1(603) 555-0123</p>
        <p>info@chaironthemoon.com</p>
        <div>
          <i className='footer-social-instagram'><TiSocialInstagram/></i>
          <i className='footer-social-facebook'><SlSocialFacebook/></i>
          <i className='footer-social-twitter'><SlSocialTwitter/></i>
        </div>
      </div>
      <div>
    <iframe width="296" height="277" id="gmap_canvas" src="https://maps.google.com/maps?q=elitepath%20softwares&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
       
      </div>
    </div>
    <div className='footer-copyright'>
      <p><i><AiOutlineCopyright/></i> 2008-2022 Chair Elitepath, Ph</p>
    </div>
    </div>
  )
}

export default Footer