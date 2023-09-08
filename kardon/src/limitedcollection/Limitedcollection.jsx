import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../images/furniture.png";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Limitedcollection.css";
import { AiOutlineHeart } from "react-icons/ai";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";

function Limitedcollection() {
  let [db, setDb] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:5700/api/furniture/limitedcollection")
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
  return (
    <div className="section2">
      <div className="allproduct-flex">
        <h2>Limited Collection</h2>
        <Link to={"/allproduct"}>
          <h3>view all product</h3>
        </Link>
        <Link to={"/allproduct"}>
          <i class="fa-solid fa-circle-arrow-right"></i>
        </Link>
      </div>
      <Container>
        <Row className="">
          {db &&
            db.map((prod) => (
              <Col className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
                <Swiper spaceBetween={50} slidesPerView={1}>
                  <SwiperSlide>
                    <Link title="view product">
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
                  </SwiperSlide>
                </Swiper>
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
}

export default Limitedcollection;
