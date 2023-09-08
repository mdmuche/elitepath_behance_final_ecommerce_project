import React, { Component, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {IoIosRadioButtonOff} from 'react-icons/io'
import './Lightning.css'
import axios from 'axios';
import { AiOutlineHeart } from 'react-icons/ai';

function Lightning() {
  let [db, setDb] = useState(null);
  useEffect(()=>{
     axios.get(`http://localhost:5700/api/furniture/lightning`)
     .then(res=>{
      setDb(res.data);
     })
     .catch(err=>{
      console.log(err.message);
     })
  }, [db])
  return (
    <div className='chairs-page'>
          <div className='chairs-heading'>
            <ul id="chair-links">
              <li className='focus1'><Link to={'/catalog'}>Chairs</Link></li>
              <li><Link to={'/sofas'}>Sofas</Link></li>
              <li><Link to={'/tables'}>Tables</Link></li>
              <li><Link to={'/lightning'}>Lightning</Link></li>
              <li><Link to={'/accessories'}>Accessories</Link></li>
            </ul>
              </div>
              <div className='chairs-page-flex'>
                <div className="arcordion">
                <h5>see all</h5>
                <div>
                <div className='accord-flex'><label htmlFor='first' className='label'>categories</label>
                <input type="radio" id='first'  checked/>
                <span>&#x3e;</span>
                </div>
                  <ul className="categories">
                    <li>chairmama</li>
                    <li>chairmama</li>
                    <li>chairmama</li>
                    <li>chairmama</li>
                    <li>chairmama</li>
                  </ul>
                  </div>
                  <div>
                  <div className='accord-flex'><label htmlFor='second' className='label'>brand</label>
                  <input type="radio" id="second"/>
                <span>&#x3e;</span>
                </div>
                  <ul className="brand">
                    <li>chairmama</li>
                    <li>chairmama</li>
                    <li>chairmama</li>
                    <li>chairmama</li>
                    <li>chairmama</li>
                  </ul>
                  </div>
                  <div className="materials">
                  <div className='accord-flex'><label htmlFor='third' className='label'>materials</label>
                  <input type="radio" id='third'/>
                <span>&#x3e;</span>
                </div>
                <div className='material-lists'>
                    <input type="checkbox" name="fibre" id="fibre" checked />
                    <label htmlFor="fibre">fibre</label>
                    <div></div>
                    <input type="checkbox" name="fibre" id="fibre" />
                    <label htmlFor="fibre">leather</label>
                    <div></div>
                    <input type="checkbox" name="fibre" id="fibre" checked/>
                    <label htmlFor="fibre">wood</label>
                    <div></div>
                    <input type="checkbox" name="fibre" id="fibre" />
                    <label htmlFor="fibre">metal</label>
                    <div></div>
                    <input type="checkbox" name="fibre" id="fibre" />
                    <label htmlFor="fibre">plastic</label>
                    <div></div>
                    <input type="checkbox" name="fibre" id="fibre" />
                    <label htmlFor="fibre">natural fibre</label>
                    <div></div>
                    <input type="checkbox" name="fibre" id="fibre" />
                    <label htmlFor="fibre">glass</label>
                    <div></div>
                    <input type="checkbox" name="fibre" id="fibre" checked/>
                    <label htmlFor="fibre">natural store</label>
                    <div></div>
                    <input type="checkbox" name="fibre" id="fibre" />
                    <label htmlFor="fibre">other material</label>
                    </div>
                  </div>
                  <div className="price-container">
                  <div className='accord-flex'><label htmlFor='fourth' className='label'>price</label>
                  <input type="radio" id='fourth'/>
                <span>&#x3e;</span>
                </div>
                <div className='price-variations'>
                    <div className='price-line'><div className='left-price'><IoIosRadioButtonOff className='price-icon'/></div><div className='right-price'><IoIosRadioButtonOff className='price-icon'/></div></div>
                    <div className="price">
                      <p>$000</p>
                      <p className='price-2'>$1400</p>
                    </div>
                    </div>
                  </div>
                  <div className='color-container'>
                  <div className='accord-flex'><label htmlFor='fifth' className='label'>color</label>
                  <input type="radio" id='fifth'/>
                <span>&#x3e;</span>
                </div>
                  <div className="color">
                    <div className='color-1 white'></div>
                    <div className='color-1 grey'></div>
                    <div className='color-1 lightbrown'></div>
                    <div className='color-1 lightishpink'></div>
                    <div className='color-1 brown'></div>
                    <div className='color-1 redishbrown'></div>
                    <div className='color-1 yellow'></div>
                    <div className='color-1 red'></div>
                    <div className='color-1 pink'></div>
                    <div className='color-1 green'></div>
                    <div className='color-1 blue'></div>
                    <div className='color-1 black'></div>
                  </div>
                  </div>
                  <div className="designers">
                  <div className='accord-flex'><label htmlFor='sixth' className='label'>designers</label>
                  <input type="radio" id='sixth'/>
                <span>&#x3e;</span>
                </div>
                    <ul className='designers-list'>
                    <li>martins</li>
                    <li>martins</li>
                    <li>martins</li>
                    <li>martins</li>
                    <li>martins</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className='chairs-grid'>
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
              </div>
        </div>
  )
}

export default Lightning