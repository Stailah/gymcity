import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        {/*The Best Fitness Club in town*/}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: "210px" }}
            animate={{ left: ["203px", "9px", "203px"] }}
            transition={{ duration: 3, loop: Infinity }}
          ></motion.div>
          <span>The best fitness club in town</span>
        </div>

        {/*Hero Heading*/}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div className="description">
            <span>
              In here we will help you to shape your body and build your
              routine.
            </span>
          </div>
        </div>

        {/*Figures*/}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={120} start={60} delay="2" preFix="+" />
            </span>

            <span>expert coaches</span>
          </div>
          <div>
            <span>
              <NumberCounter end={1350} start={800} delay="2" preFix="+" />
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={30} start={10} delay="2" preFix="+" />
            </span>
            <span>fitness plans</span>
          </div>
        </div>

        {/*Hero Buttons*/}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div
          className="heart-rate"
          initial={{ right: "-1rem" }}
          animate={{ right: "4rem" }}
          transition={transition}
          exit={{ right: "-1rem" }}
        >
          <img id="pulsating-image" src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/*Hero Buttons*/}
        <img src={hero_image} alt="" className="hero-image" />

        {/*Calories*/}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
