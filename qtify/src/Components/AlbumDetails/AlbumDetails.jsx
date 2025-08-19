import React from 'react'
import './AlbumDetails.css'

const AlbumDetails = (props) => {
    return (
        <div className='albumDetails'>
            <img src={props.image} alt="kunalborkar2001@gmail.com" />
            <div className='albumContent'>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <p>2022</p>
                <ul>
                    <li>75 songs |</li>
                    <li>3hrs 45 min |</li>
                    <li>100 Follows</li>
                </ul>
                <div className='albumButtons'>
                    <button className='shuffleButton'>Shuffle</button>
                    <button className='libraryButton'>Add to library</button>
                </div>
            </div>

        </div>
    )
}

export default AlbumDetails