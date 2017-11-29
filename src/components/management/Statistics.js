import React from 'react';
import './Statistics.css';

const Statistics = () => {

    const renderImages = () =>
        ['sold', 'revenue'].map((imageName, i) =>
            <img className="Statistics-image" key={i} src={`/images/${imageName}.png`}/>);

    return <div className="Statistics-wrapper">
        {renderImages()}
    </div>;
};

export default Statistics;