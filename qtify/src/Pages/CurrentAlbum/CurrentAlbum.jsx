import React, { useState, useEffect } from 'react';
import './CurrentAlbum.css';
import AlbumDetails from '../../Components/AlbumDetails/AlbumDetails';
import { useParams } from 'react-router-dom';
import AlbumTable from '../../Components/AlbumTable/AlbumTable';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { Link } from "react-router-dom";
import { currentAlbum } from '../../API Calls/ApiCalls';
import MusicPlayer from "../../Components/MuiscPlayer/MusicPlayer"

const CurrentAlbum = () => {
    const [albumData, setAlbumData] = useState({});

    const { albumId } = useParams();

    useEffect(() => {
        async function fetchAlbumData() {
            try {
                const data = await currentAlbum(albumId);
                setAlbumData(data);
            } catch (error) {
                console.error("Error fetching album data:", error);
            }
        }

        fetchAlbumData();
    }, [albumId]);

    return (
        <div>
            <Link to="/">
                <div className='backButton'>
                    <ArrowBackRoundedIcon />
                </div>
            </Link>
            {Object.keys(albumData).length > 0 ? (
                // Do something if albumData is an object with properties
                <AlbumDetails title={albumData.title} description={albumData.description} image={albumData.image} totalSongs={albumData.songs ? albumData.songs.length : albumData.artists} />
            ) : (
                // Do something else
                <img src="https://www.adorama.com/alc/wp-content/uploads/2021/05/bird-wings-flying.gif" alt="kunalborkar2001@gmail.com" />
            )}
            {Object.keys(albumData).length > 0 ? (
                <AlbumTable songs={albumData.songs} />
            ) : (
                // Do something else
                <img src="https://www.adorama.com/alc/wp-content/uploads/2021/05/bird-wings-flying.gif" alt="kunalborkar2001@gmail.com" />
            )}
            
            <MusicPlayer />
        </div>
    );
}

export default CurrentAlbum;
