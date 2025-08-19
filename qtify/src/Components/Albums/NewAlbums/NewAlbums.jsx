import { useEffect, useState } from "react";
import './NewAlbums.css'
import Slider from '../../Slider/Slider'
import { newAlbums } from "../../../API Calls/ApiCalls";

const NewAlbums = () => {

  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    // Fetch top albums when the component mounts
    const fetchTopAlbums = async () => {
      try {
        const data = await newAlbums();
        setAlbums(data);
        // console.log(data);
      } catch (error) {
        console.error('Error fetching top albums:', error);
      }
    };

    fetchTopAlbums();
  }, []); // The empty dependency array ensures that this effect runs only once

  return (
    <div className='onealbum'>
      <div className='tophead'>
        <p>New Albums</p>
        <p className='collapse'>Collapse</p>
      </div>
      <div className='topalbums'>
        <Slider data= {albums}/>
      </div>
    </div>
  )
}

export default NewAlbums