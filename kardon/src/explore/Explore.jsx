import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Explore.css";
import { motion } from "framer-motion";

function Explore() {
  let [db, setDb] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:5700/api/furniture/furniturehome")
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
  return (
    <div className="section1">
      {db &&
        db.map((prod) => (
          <div className="section1-img">
            <motion.img
              src={prod.prodImg_url}
              alt=""
              drag
              dragConstraints={{
                right: 20,
                left: -20,
                top: 5,
                bottom: 1,
              }}
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
              }}
            />
          </div>
        ))}
      <div className="explore">
        <motion.div
          className="box"
          variants={boxVariant}
          animate="visible"
          initial="hidden"
        >
          <h2>
            chair
            <br />
            on the moon
          </h2>
          <p>we select the chair that will make even the moon cozy</p>
          <button>Explore our Collection</button>
        </motion.div>
      </div>
    </div>
  );
}

export default Explore;
