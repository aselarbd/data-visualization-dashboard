import React from 'react';

const GridLineY = ({yScale, innerWidth}) => {
    return (
        yScale.ticks().map((tickValue, index) => (
            <g className="tick" key={index} transform={`translate(0,${yScale(tickValue)})`}>
                <line x2={innerWidth}/>
            </g>

        ))
    );
};

export default GridLineY;
