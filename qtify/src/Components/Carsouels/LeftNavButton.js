import React,{forwardRef} from "react";
import leftArrow from "../../assests/left-Carousel.svg";
 import styles from "./leftNavButton.module.css";

const LeftNavButton=forwardRef((props, ref)=>(
    <div ref={ref} className={`swiper-button-prev-custom ${styles.left}`}>
        <img src={leftArrow} alt="previous"  />
    </div>
));
export default LeftNavButton;