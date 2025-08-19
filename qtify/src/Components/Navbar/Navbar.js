import React from "react";
import { AppBar, Toolbar,Box } from "@mui/material";
import Logo from "./Logo";
import Search from "./Search";
import ButtonComponent from "./ButtonComponent";


const Navbar = () => {
    return(
        <>
        <AppBar position="static"
         sx={{ backgroundColor: "#34C94B",
               padding:'10px 0' }}
           >   
            <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems:"center", flexWrap: "wrap" }}>
            <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
                    <Logo />
                </Box>
                <Search />
                <ButtonComponent  text="Give Feedback"/>
            </Toolbar>
        </AppBar>
        
        </>
    )
}
export default Navbar;