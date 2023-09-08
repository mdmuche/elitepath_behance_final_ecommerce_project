import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "./Newcollection.css";
import { motion } from "framer-motion";

function Newcollection() {
  let [db, setDb] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:5700/api/furniture/newcollection")
      .then((res) => {
        // console.log(res.data);
        setDb(res.data);
        // console.log(db.res)
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [db]);
  const boxVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 1,
        when: "beforeChildren",
      },
    },
  };
  // const listVariant = {
  //   hidden: {
  //     x: -10,
  //     opacity: 0,
  //   },
  //   visible: {
  //     x: 0,
  //     opacity: 1,
  //     staggerChildren: 0.2,
  //   },
  // };
  return (
    <div className="section5">
      {db &&
        db.map((prod) => (
          <div>
            <div className="new-heading">
              <h1>new collection</h1>
            </div>
            <div className="span-button">
              <h2>
                <span className="ted ted-havkin">ted</span>
                <em className="emphasis">by</em>
                <span className="ted-havkin">
                  <em>havkin</em>
                </span>
              </h2>
              <button className="new-button">shop now</button>
            </div>
            <p className="p-rect">rectangular steel and store table</p>
            <motion.div
              className="box"
              variants={boxVariant}
              animate="visible"
              initial="hidden"
            >
              {/* <div> */}
              <img className="new-img" src={prod.prodImg_url} alt="" />
              {/* </div> */}
            </motion.div>
          </div>
        ))}
    </div>
  );
}

export default Newcollection;
