import React,{forwardRef} from "react";
import rightArrow from "../../assests/right-Carousel.svg";
import styles from "./rightNavBar.module.css";

const RightNavButton=forwardRef((props,ref)=>(
    <div ref={ref} className={`swiper-button-next-custom ${styles.right} `}>
        <img src={rightArrow} alt="next" />
    </div>
))
export default RightNavButton;