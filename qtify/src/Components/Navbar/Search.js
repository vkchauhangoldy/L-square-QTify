import React from "react";
import { InputBase, Box, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';



const Search = () => {
    return(
       <Box 
        sx={{display:"flex", 
            alignItems:"center", 
            backgroundColor:"#FFFFFF", 
            borderRadius:"8px", 
            paddingLeft:" 12px", 
            width:"400px", 
            maxWidth:"100%"}} 
       >
       
        <InputBase 
            placeholder="Search a album of your choice" 
            sx={{  ml: 1, flex: 1, color: '#121212',  fontFamily:"poppins"}} />
        <Box
            sx={{
            width: '1px',
            height: "40px",
            backgroundColor: '#121212',
            margin: '0 10px',
            }}
        />
         <IconButton>
        <SearchIcon sx={{color:"#121212"}} />
        </IconButton>
           
       </Box>

    )
}
export default Search;