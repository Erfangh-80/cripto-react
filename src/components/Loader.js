import React from 'react';

// gif
import loading from "../assets/icon/loading.gif"
const Loader = () => {
    return (
        <div>
            <img src={loading} alt="loading" />
            <h1>Loading ....</h1>
        </div>
    );
}; 

export default Loader;