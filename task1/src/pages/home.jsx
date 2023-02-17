import React from "react";
import NavBar from "../components/NavBar";
import { Searchicon, Arrow } from "../assets";
import "./home.css";



const Home = () => {
    return (
        <>
            <div>
                {" "}
                <NavBar />
            </div>
            <div className="content-container">
                <div className="hero-text">
                    <h1>Find your ideal home</h1>
                    <p>
                        Search from more than 19 million of inspected appartments,
                        <br /> houses, cottages, villas, manors and mansions
                    </p>
                </div>
                <div className="search-bar box">
                    <img src={Searchicon} alt="" />

                    <input type="text" placeholder="Search for address" />

                    <button>Search</button>
                </div>

                <div className="results">
                    <div className="box">
                        <h5>Calabasas, CA</h5>
                        <p>$1.5k+ / 2 Beds / Appt. ... 3 more </p>
                        <img src={Arrow} alt="" />
                    </div>
                    <div className="box">
                        <h5>Long Beach, CA</h5>
                        <p>$2.0k+ / 1 Bed / Appt.  ... 3 more </p>
                        <img src={Arrow} alt="" />
                    </div>
                    <div className="box">
                        <h5>Calabasas, CA</h5>
                        <p>$2.5k+ / 2 Beds / Appt.  ... 3 more </p>
                        <img src={Arrow} alt="" />
                    </div>
                </div>
            </div>
            <div className="footer"></div>
        </>
    );
};

export default Home;
