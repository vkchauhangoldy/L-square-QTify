// import { padding } from "@mui/system";
import React from "react";

const MyComponent = () => {
  const myStyle = {
    marginTop: "10px",
    marginBottom: "10px",
    // paddingTop: "1em",
    paddingRight: "3em",
    paddingBottom: "1px",
    paddingLeft: "3em",
    display: "flex",
    // flexDirection: "column",
  };

  const hStyle = {
    display: "flex",
    // flexDirection: "row",
    justifyContent: "center",
    marginBottom: "1em",
  };

  return (
    <div>
      <div>
        <h2 style={hStyle}>Qtify Player</h2>
      </div>
      {/* <h2 style={hStyle}>Qtify Player</h2> */}
      <div style={myStyle}>
        <iframe
          style={myStyle}
          src="https://open.spotify.com/embed/playlist/3bmSu6JA12HZHDji7FCTmm?utm_source=generator"
          width="100%"
          height="172"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Spotify Playlist"
        ></iframe>

        <iframe
          style={myStyle}
          src="https://open.spotify.com/embed/playlist/6lju40L1cgiwMDx1B0R40k?utm_source=generator"
          width="100%"
          height="172"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Spotify Playlist2"
        ></iframe>
      </div>
      <div style={myStyle}>
        <iframe
          style={myStyle}
          src="https://open.spotify.com/embed/playlist/4avZX2P0tgAZNM4fYdNfyO?utm_source=generator"
          width="100%"
          height="172"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Spotify Playlist3"
        ></iframe>

        <iframe
          style={myStyle}
          src="https://open.spotify.com/embed/playlist/3EjLH3id4H4gpw5XYs5WEX?utm_source=generator"
          width="100%"
          height="172"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Spotify Playlist4"
        ></iframe>
      </div>
    </div>
  );
};

export default MyComponent;
