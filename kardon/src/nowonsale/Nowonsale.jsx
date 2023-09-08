import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../images/furniture.png";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Nowonsale.css";
import { AiOutlineHeart } from "react-icons/ai";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";

function Nowonsale() {
  let [db, setDb] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:5700/api/furniture/nowonsale")
      .then((res) => {
        // console.log(res.data);
        setDb(res.data);
        // console.log(db.res)
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [db]);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 4,
    },
  };
  const boxVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 3,
      },
    },
  };
  return (
    <div className="section2">
      <motion.div
        className="box"
        variants={boxVariant}
        animate="visible"
        initial="hidden"
      >
        <div className="allproduct-flex">
          <h2>Now on sale</h2>
          <Link to={"/allproduct"}>
            <h3>view all product</h3>
          </Link>
          <Link to={"/allproduct"}>
            <i class="fa-solid fa-circle-arrow-right"></i>
          </Link>
        </div>
      </motion.div>
      <Swiper spaceBetween={50} slidesPerView={1}>
        <SwiperSlide>
          <Container>
            <Row className="">
              {db &&
                db.map((prod) => (
                  <Col className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
                    <Link title="view product" to={`/productpage/${prod._id}`}>
                      <motion.div
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
                      >
                        <Image
                          className=""
                          variant="top"
                          src={prod.prodImg_url}
                        ></Image>
                      </motion.div>
                    </Link>
                    <div className="flex">
                      <h2 className="d1">steve leung</h2>
                      <h2 className="d2">Tortuga</h2>
                      <p className="d3">$5600</p>
                      <div className="d4-flex">
                        <p className="d4">$3500</p>
                        <AiOutlineHeart className="d4-flex-icon" />
                      </div>
                    </div>
                  </Col>
                ))}
            </Row>
          </Container>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Nowonsale;
