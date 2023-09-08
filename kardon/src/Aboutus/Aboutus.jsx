import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Aboutus.css'

function Aboutus() {
  let [db, setDb] = useState(null);
  useEffect(()=>{
    axios.get('http://localhost:5700/api/furniture/about')
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
    <div className='section3'>
      {
        db && db.map(prod=>(
                  //  <img src={prod.prodImg_url} alt="" />

                <img className='img-box' 
                src={prod.prodImg_url} 
                alt=""
                 />
        ))}
        <div className=''>
                 <h1>Home comes first</h1>
                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Illo molestiae omnis corporis architecto blanditiis <br /> numquam fuga ipsum delectus! Voluptatibus ullam <br /> sunt earum in voluptates illum nesciunt quam obcaecati <br /> totam iste excepturi iure, modi impedit nisi quae illo <br /> minima accusantium ipsam.</p>
                 <div className='header-icon'><h2>Read about us</h2><Link to={'/allproduct'}><i class="fa-solid fa-circle-arrow-right"></i></Link></div>
             </div>
    </div>
  )
}

export default Aboutus