import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../images/furniture.png";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Inspiration.css";
import { AiOutlineHeart } from "react-icons/ai";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";

function Inspiration() {
  let [db, setDb] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:5700/api/furniture/inspiration")
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
    <div className="section6">
      <div className="allproduct-flex">
        <h2>Inspiration</h2>
      </div>
      <Container>
        <Row className="">
          {db &&
            db.map((prod) => (
              <Col className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
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
                          className="inspiration-image"
                          variant="top"
                          src={prod.prodImg_url}
                        ></Image>
                      </motion.div>
                    </Link>
                    <div className="flex">
                      <h2 className="d1">
                        the essential day cabinets <br /> and sideboard
                      </h2>
                      <p className="d2">
                        Lorem, ipsum dolor sit amet <br /> consectetur
                        adipisicing elit. elit <br /> Laboriosam, sapiente!
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </Col>
            ))}
        </Row>
      </Container>
      <button>Sell all</button>
    </div>
  );
}

export default Inspiration;
