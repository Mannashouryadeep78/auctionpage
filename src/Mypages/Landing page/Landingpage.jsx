import React from "react";
import "./Landingpage.css"
import { Link } from "react-router-dom";

export default function Landingpage() {
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
              <Link className="in" to="/signin">
                SIGN IN
              </Link>
          </ul>
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
        <div className="login">
          <div className="registration">
            <span className="welcome">Welcome!!</span> <br />
            <span className="New">New?? Fill up the details to register</span>
          </div>
          <form className="details">
            <label for="fname">First name:</label>
            <input type="text" id="fname" name="fname" />
            <br />
            <br />
            <label for="lname">Last name:</label>
            <input type="text" id="lname" name="lname" />
            <br />
            <br />
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" />
            <br />
            <br />
            <label for="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" />
            <br />
            <br />
            <label for="country">Choose your Country</label>
            <select name="country" id="country">
              <option value="Country" selected>
                Country
              </option>
              <option value="India">India</option>
              <option value="Srilanka">Srilanka</option>
              <option value="Nepal">Nepal</option>
              <option value="America">America</option>
            </select>
            <br />
            <br />
            <label for="username">Username</label>
            <input type="text" id="username" name="username" />
            <br />
            <br />
            <label for="pwd">Password:</label>
            <input type="password" id="pwd" name="pwd"></input>
            <br />
            <br />
            <label for="cnfpwd">Confirm Password:</label>
            <input type="password" id="cnfpwd" name="cnfpwd"></input>
            <br />
            <br />
            <label for="button"></label>
            <Link to="/signin">
            <input
              type="button"
              class="button"
              value="Register"
              id="Register"
            />
              </Link>
          </form>
        </div>
      </div>
    </>
  );
}
