import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Newsletter.css'


function Newsletter() {
    let [db, setDb] = useState(null);
  useEffect(()=>{
    axios.get('http://localhost:5700/api/furniture/newsletter')
    .then(res=>{
      // console.log(res.data);
      setDb(res.data);
      // console.log(db.res)
    })
    .catch(err=>{
      console.log(err.message);
    })
  }, [db])
  return (
    <div className='newsletter-section'>
       {
        db && db.map(prod=>(
                <div>
                <img src={prod.prodImg_url} alt="newsletter" className='newsletter-img'/></div>
        ))
       }
             <div className='newsletter-title'>
                <h2>join this newsletter</h2>
                <p>stay update on events, collections and exclusive news</p>
                <div className='newsletter-input-button'>
                    <input type="email" placeholder='your email'/>
                    <button className='newsletter-button'>Subscribe</button>
                </div>
                </div>
    </div>
  )
}

export default Newsletter