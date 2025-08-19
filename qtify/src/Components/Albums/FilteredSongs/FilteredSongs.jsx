import * as React from 'react';
import "./FilteredSongs.css"
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Slider from "../../Slider/Slider";
import { songs } from "../../../API Calls/ApiCalls";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

let FilteredSongs = () => {
  const [albums, setAlbums] = useState([]);
  const [value, setValue] = React.useState(0);
  const [categoryData, setCategoryData] = useState({
    rock: null,
    pop: null,
    blues: null,
    razz: null,
  });

  useEffect(() => {
    // Fetch top albums when the component mounts
    const fetchTopAlbums = async () => {
      try {
        const data = await songs();
        setAlbums(data);
      } catch (error) {
        console.error('Error fetching top albums:', error);
      }
    };

    fetchTopAlbums();
  }, []); // The empty dependency array ensures that this effect runs only once

  useEffect(() => {
    if (albums.length > 0) {
      categorizeAlbums(albums);
    }
  }, [albums]);

  const categorizeAlbums = (allSongs) => {
    const categorizedData = {
      rock: allSongs.filter((elem) => elem.genre.key === "rock"),
      pop: allSongs.filter((elem) => elem.genre.key === "pop"),
      blues: allSongs.filter((elem) => elem.genre.key === "blues"),
      jazz: allSongs.filter((elem) => elem.genre.key === "jazz"),
    };

    setCategoryData(categorizedData);
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Rock" {...a11yProps(1)} />
          <Tab label="Pop" {...a11yProps(2)} />
          <Tab label="Jazz" {...a11yProps(3)} />
          <Tab label="Blues" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Slider data={albums} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Slider data={categoryData.rock} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Slider data={categoryData.pop} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Slider data={categoryData.jazz} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <Slider data={categoryData.blues} />
      </CustomTabPanel>
    </Box>
  );
}

export default FilteredSongs;
