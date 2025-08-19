import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from './section.module.css';
import { Typography } from "@mui/material";
import AlbumCard from "../Cards/Albums/AlbumCard";
import Carousel from "../Carsouels/Carousel";

const Section = ({ title, fetchUrl, type = "album", showToggle = true, filteredData = null }) => {
    const [items, setItems] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [loading, setLoading] = useState(true);

    // Fetch data from API or use filteredData if provided
    useEffect(() => {
        const fetchData = async () => {
            if (!filteredData) {
                try {
                    const response = await axios.get(fetchUrl);
                    setItems(response.data);
                } catch (err) {
                    console.error(`Error fetching ${type === "album" ? "albums" : "songs"}:`, err);
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        };
        fetchData();
    }, [fetchUrl, filteredData, type]);

    const handleToggle = () => setShowAll((prev) => !prev);

    const dataToRender = filteredData || items;

    return (
        <div className={styles.section} data-testid="section">
            <div className={styles.header}>
                <Typography
                    variant="h6"
                    className={styles.title}
                    data-testid="section-title"
                >
                    {title}
                </Typography>
                {showToggle && (
                    <Typography
                        variant="subtitle2"
                        onClick={handleToggle}
                        sx={{
                            color: "#34C94B",
                            cursor: "pointer",
                            fontWeight: 600,
                            userSelect: "none"
                        }}
                    >
                        {showAll ? 'Collapse' : 'Show All'}
                    </Typography>
                )}
            </div>

            {loading ? (
                <Typography
                    variant="body1"
                    className={styles.loading}
                    data-testid="loading-message"
                >
                    Loading...
                </Typography>
            ) : (
                <>
                    {showAll && showToggle ? (
                        // Grid View
                        <div className={`${styles.grid} ${styles.wrap}`} data-testid="album-grid">
                            {dataToRender.map((item) => (
                                <AlbumCard
                                    key={item.id}
                                    image={item.image}
                                    name={item.title}
                                    follows={type === "album" ? item.follows : undefined}
                                    likes={type === "song" ? item.likes : undefined}
                                    type={type}
                                    data-testid={`album-card-${item.id}`}
                                />
                            ))}
                        </div>
                    ) : (
                        // Carousel View
                        <div className={styles.carousel} data-testid="album-carousel">
                            <Carousel
                                data={dataToRender}
                                renderItem={(item) => (
                                    <AlbumCard
                                        key={item.id}
                                        image={item.image}
                                        name={item.title}
                                        follows={type === "album" ? item.follows : undefined}
                                        likes={type === "song" ? item.likes : undefined}
                                        type={type}
                                        data-testid={`album-card-${item.id}`}
                                    />
                                )}
                            />
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Section;
