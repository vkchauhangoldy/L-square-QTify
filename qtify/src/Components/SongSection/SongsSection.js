import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './songsSection.module.css';
import { Box, Tab, Tabs } from '@mui/material';
import Section from '../Section/Section';

const SongsSection = () => {
    const [songs, setSongs] = useState([]);
    const [genres, setGenres] = useState([]);
    const [activeTab, setActiveTab] = useState('all');

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    }

    useEffect(() => {
        const fetchSongsAndGenres = async () => {
            try {
                const [songsRes, genresRes] = await Promise.all([
                    axios.get("https://qtify-backend-labs.crio.do/songs"),
                    axios.get("https://qtify-backend-labs.crio.do/genres")
                ]);
                setSongs(songsRes.data);
                setGenres(genresRes.data.data || genresRes.data);
            } catch (err) {
                console.error("Error fetching songs or genres:", err);
            }
        };
        fetchSongsAndGenres();
    }, []);

    const filteredSongs = activeTab === 'all' ? songs : songs.filter(song => song.genre?.key === activeTab.toLowerCase());

    return (
        <div className={styles.wrapper}>
            <Box className={styles.tabContainer}>
                <Tabs
                    value={activeTab}
                    onChange={handleTabChange}
                    variant="scrollable"
                    scrollButtons={false}    // <-- Disabled Scroll Buttons to fix pointer-events Cypress issue
                    allowScrollButtonsMobile={false}
                    className={styles.tabs}
                    TabIndicatorProps={{ style: { backgroundColor: '#34C94B' } }}
                >
                    <Tab label="All" value="all" className={styles.tab} />
                    {genres.map((genre) => (
                        <Tab key={genre.key} label={genre.label} value={genre.label} className={styles.tab} />
                    ))}
                </Tabs>
            </Box>
            <Section
                title="Songs"
                fetchUrl="https://qtify-backend-labs.crio.do/songs"
                type="song"
                showToggle={false}
                filteredData={filteredSongs}
            />
        </div>
    );
};

export default SongsSection;
