import React from "react";
import "./Signinpage.css";
import { Link } from "react-router-dom";
export default function Signin() {
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
        </div>
      </div>
      <div className="flexbox1">
        <div className="slogan">
          <span className="bestplace">Best Place to Bid.</span>
          <br />
          <br />
          <span className="welcometo">
            Welcome to our world of excitement, anticipation, and winning! Our
            auction-themed landing page is your gateway to an extraordinary
            experience, where treasures await the highest bidder. Get ready to
            immerse yourself in the thrill of the auction, where every click is
            a chance to own something special.
          </span>
          <br />
          <br />
          <span className="readyto">Ready to make your move?</span>
          <br />
          <span className="ourlanding">
            Our landing page features a dedicated bidding section where you can
            place your bids with ease. The process is simple and secure,
            ensuring that every bid is recorded accurately.
          </span>
          <br />
          <br />
          <img src={require("./trade.png")} id="trade" />
        </div>
        <div className="loginn">
          <div className="registration">
            <span className="welcome">Welcome!!</span> <br />
            <span className="New">just one step ahead!</span>
          </div>
          <form className="details">
            
            <label for="username">Username</label>
            <input type="text" id="username" name="username" />
            <br />
            <br />
            <label for="pwd">Password:</label>
            <input type="password" id="pwd" name="pwd"></input>
            <br />
            <br />
            <label for="button"></label>
            <Link to={"/homepage"}>
             <input
              type="button"
              class="button"
              value="Sign In"
              id="Sign In"
            />
              </Link>  
          </form>
        </div>
      </div>
    </>
  );
}
