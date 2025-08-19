import React from "react";
import "./Card.css";
import Logo from "../../UpperSecJSX/Logo";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const Card = (props) => {
  const positionRef = React.useRef({
    x: 0,
    y: 0,
  });
  const popperRef = React.useRef(null);
  const areaRef = React.useRef(null);

  const handleMouseMove = (event) => {
    positionRef.current = { x: event.clientX, y: event.clientY };

    if (popperRef.current != null) {
      popperRef.current.update();
    }
  };

  return (
    <div>
      <Tooltip
        title={props.totalSongs}
        placement="top"
        arrow
        PopperProps={{
          popperRef,
          anchorEl: {
            getBoundingClientRect: () => {
              return new DOMRect(
                positionRef.current.x,
                areaRef.current.getBoundingClientRect().y,
                0,
                0
              );
            },
          },
        }}
      >
        {props.slug ? ( // Check if props.slug is defined
          <Link to={`/music/${props.slug}`}>
            <Box ref={areaRef} onMouseMove={handleMouseMove}>
              <div className="card">
                <img src={props.image} alt={<Logo />} />
                <div className="followers">
                  {props.follows ? (
                    <p>{props.follows} Follows</p>
                  ) : (
                    <p>{props.likes} Likes</p>
                  )}
                </div>
              </div>
              <p className="category">{props.title}</p>
            </Box>
          </Link>
        ) : (
          <Box ref={areaRef} onMouseMove={handleMouseMove}>
            <div className="card">
              <img src={props.image} alt={<Logo />} />
              <div className="followers">
                {props.follows ? (
                  <p>{props.follows} Follows</p>
                ) : (
                  <p>{props.likes} Likes</p>
                )}
              </div>
            </div>
            <p className="category">{props.title}</p>
          </Box>
        )}
      </Tooltip>
    </div>
  );
};

export default Card;
