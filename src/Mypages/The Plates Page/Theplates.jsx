import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Theplates() {
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
        </div>
        <div>
        <Swiper
      spaceBetween={100}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className='slide1'></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='slide2'></div>
      </SwiperSlide>
    </Swiper>
        </div>
      <div>
        <Link to="/signin">
            <input
              type="button"
              class="button"
              value="BID"
              id="BID"
            />
              </Link>
      </div>
    </>
  )
}
