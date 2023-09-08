import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function Productpage() {
  let [prod, setProd] = useState(null);
  let { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5700/api/furniture/single/${id}`)
      .then((res) => {
        setProd(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
  return (
    <div>
      {prod && <img src={prod.prodImg_url} alt="" />}
      <h2>why you no want work</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
        doloribus eum modi fugit quaerat? Officia in voluptas architecto, quam,
        accusantium nesciunt odio sed corporis aperiam ipsam nemo officiis
        praesentium veritatis dolores blanditiis iure autem quod velit
        asperiores ad dolor est? Perspiciatis illo tempore quas dolor unde,
        saepe commodi iure quasi?
      </p>
    </div>
  );
}

export default Productpage;
