import React from 'react'
import "./Card.css";

function Card(props) {
    return ( 
        <div className="parent-container">
            <div className="image-container">
                <img className='image' src={props.image} alt="image" />
            </div>
            <h1 className='title'>{props.title}</h1>
                <div className='genres'>Genres: {props.genres}</div>
                <div className='link'> <a href={props.link} target="blank">Artist Page</a> </div>
                <div> Spotify Popularity Score: {props.popularity} </div>
        </div>
    );
}
export default Card; 
