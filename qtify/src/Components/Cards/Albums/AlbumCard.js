import React from "react";
import styles from './AlbumCard.module.css';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
const AlbumCard=({image, name, follows, type, likes})=>{
    return(
       <div className={styles.wrapper}>
        <Card className={styles.card} elevation={2}>
            <Grid container direction="column">
                <Grid item>
                    <CardMedia
                        component="img"
                        image={image}
                        alt={name}
                        className={styles.image}
                        sx={{
                            borderTopLeftRadius: "8px",
                            borderTopRightRadius: "8px",
                        }}
                    />
                </Grid>
                <Grid item
                    sx={{
                        backgroundColor:"#ffffff",
                        padding:"8px",
                        display:"flex",
                        justifyContent:"flex-start",
                        alignItems:"center",
                        borderBottomLeftRadius:"8px",
                        borderBottomRightRadius:"8px",
                    }}>
                        <Chip
                            label={ type=== "album" ? `${follows} Follows`: `${likes} Likes`} 
                            className={styles.chip}
                            size="small"
                            sx={{ backgroundColor: '#000000', color: '#FFFFFF', fontSize:'0.7rem',padding:'0 6px', borderRadius:'4px',fontWeight:500}}
                        />  
                </Grid>
            </Grid>

            </Card> 
           
            <Typography variant="subtitle1" className={styles.albumName}>
                {name}
            </Typography>
         
        </div> 
        
    )
}
export default AlbumCard;