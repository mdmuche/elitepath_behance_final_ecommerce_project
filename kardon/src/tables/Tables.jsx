import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Tables.css'


function Tables() {
  let [db, setDb] = useState(null);
  useEffect(()=>{
    axios.get(`http://localhost:5700/api/furniture/tables`)
    .then(res=>{
      setDb(res.data)
    })
    .catch(err=>{
      console.log(err.message);
    })
  }, [db])
  return (
    <div className='tables-page'>
      <div className='chairs-heading'>
            <ul id="chair-links">
              <li className='focus1'><Link to={'/catalog'}>Chairs</Link></li>
              <li><Link to={'/sofas'}>Sofas</Link></li>
              <li><Link to={'/tables'}>Tables</Link></li>
              <li><Link to={'/lightningpage'}>Lightning</Link></li>
              <li><Link to={'/accessories'}>Accessories</Link></li>
            </ul>
              </div>
      <div className='sofas-grid'>
                  {
                    db && db.map(prod=>(
                      <div>
                      <img src={prod.prodImg_url} alt="" />
                      <div className='flex'>
                  <h2 className='d1'>steve leung</h2>
                  <h2 className='d2'>Tortuga</h2>
                  <p className='d3'>$5600</p>
                  <div className='d4-flex'><p className='d4'>$3500</p><AiOutlineHeart className='d4-flex-icon'/></div>
                  </div>
                  </div>
                    ))
                  }
                  </div>
                  <div className='chairs-btn'>
                <button>load more</button>
              </div>
    </div>
  )
}

export default Tables