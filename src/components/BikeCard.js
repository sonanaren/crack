import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const BikeCard = (props) => {
    const bike = props.bike;

    return(
        <div className="card-container">
            <div className="desc">
                <h2>
                    <Link to={`/show-bike/${bike._id}`}>
                        { bike.name }
                    </Link>
                </h2>
                <h3>{bike.author}</h3>
                <p>{bike.description}</p>
            </div>
        </div>
    )
};

export default BikeCard;