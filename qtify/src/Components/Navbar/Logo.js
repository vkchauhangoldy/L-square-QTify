import React from "react";
import {Box} from "@mui/material";
import logo from  "../../assests/qtify-logo.svg";
export default function Logo() {
    return(
    
       <Box component="img" src={logo} alt="QTify Logo" sx={{height:"40px"}} />
        
    );
};