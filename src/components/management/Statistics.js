import React from 'react';

const Statistics = () => {

    const renderImages = () =>
        ['sold', 'revenue'].map((imageName, i) =>
            <img className="Statistics-image" key={i} src={`/images/${imageName}.png`}/>);

    return <div>
        <div className="App-shadow"/>
        <div className="Statistics-wrapper">
            {renderImages()}
        </div>
    </div>;
};

export default Statistics;