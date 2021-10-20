import React from 'react';
import errorImage from '../../image/404/3747371.jpg'
import './NotFound.css'
const NotFound = () => {
    return (
        <div>
            <img className = 'img-notFOund' src={errorImage} alt="" />
        </div>
    );
};

export default NotFound;