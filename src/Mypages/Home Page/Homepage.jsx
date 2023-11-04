import React from "react";
import "./Homepage.css"
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Homepage() {
  return (
    <>
      <div className="top">
        <div className="topbar">
          <img
            src={require("./anna-auctions-high-resolution-logo.png")}
            id="logo1"
          />
          <div className="anna">
            <span className="auctions">
              <b>Anna Auctions</b>
            </span>
            <span className="since">Since 1990</span>
          </div>
          <ul className="sign">
              <Link className="in" to="/homepage">
                HOME
              </Link>
          </ul>
        </div>

        <div className="bidding">
        Welcome to our bidding website, where your dreams and desires find their perfect match! Whether you're a seasoned bidder or new to the exciting world of online auctions, you've come to the right place. Our platform offers a seamless and secure way to discover unique items, engage in thrilling bidding wars, and connect with like-minded enthusiasts. <br/>Explore a wide range of products and experiences, from rare collectibles to unforgettable adventures, all just a bid away. <br/>Join us in the exhilarating journey of bidding, where every click brings you closer to your next treasure. Happy bidding!
        </div>

        <div className="pleasekeep">
        *.*.*.*.*.*.*.*.*.*.*.*.*.Please keep sliding for viewing all The Relics present in our website .*.*.*.*.*.*.*.*.*.*.*.*.*.
        </div>
        <div>
        <Swiper
      spaceBetween={150}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
      
        <div className="slide1">
        <ul className>
              <Link className="bones" to="/bone">
                The Bones
              </Link>
          </ul>
        <img id="image1"src={require("./pexels-david-henry-8289477.jpg")}/>
        </div>
        
      </SwiperSlide>
      <SwiperSlide>
      <div className="slide2">
        <ul className>
              <Link className="mummy" to="/mummy">
                The Mummy
              </Link>
          </ul>
            
        <img id="image2"src={require("./pexels-rene-6043362.jpg")}/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="slide3">
        <ul className>
              <Link className="buddha" to="/buddha">
                The Buddha
              </Link>
          </ul>
            
        <img id="image3"src={require("./pexels-kalvin-sainz-1334897.jpg")}/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="slide4">
        <ul className>
              <Link className="doggy" to="/doggy">
                The Stone Dog
              </Link>
          </ul>
            
        <img id="image4"src={require("./pexels-marek-piwnicki-10747679.jpg")}/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="slide5">
        <ul className>
              <Link className="toycar" to="/toycar">
                The Toy Car
              </Link>
          </ul>
            
        <img id="image5"src={require("./pexels-markus-spiske-216363.jpg")}/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="slide6">
        <ul className>
              <Link className="plates" to="/plates">
                The Plates
              </Link>
          </ul>
            
        <img id="image6"src={require("./pexels-meruyert-gonullu-6243342.jpg")}/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="slide7">
        <ul className>
              <Link className="brush" to="/brush">
                The Brush
              </Link>
          </ul>
            
        <img id="image7"src={require("./pexels-monstera-production-6621326.jpg")}/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="slide8">
        <ul className>
              <Link className="holy" to="/holy">
                The Holy
              </Link>
          </ul>
            
        <img id="image8"src={require("./pexels-pixabay-161147.jpg")}/>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
      </div>
    </>
  );
}
