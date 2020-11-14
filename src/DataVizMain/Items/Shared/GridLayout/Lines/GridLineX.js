import React from 'react';

const GridLineX = ({xScale, innerHeight}) => {
    return (
        xScale.ticks().map(tickValue => (
            <g className="tick" key={tickValue} transform={`translate(${xScale(tickValue)},0)`}>
                <line y2={innerHeight} />
            </g>
        ))
    );
};

export default GridLineX;
