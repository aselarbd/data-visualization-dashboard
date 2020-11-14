import React from 'react';

const YDataValues = ({yScale,  tickFormat, axisOffset=10}) => {
    return (
        yScale.ticks().map(tickValue => (
            <g className="tick" key={tickValue} transform={`translate(0,${yScale(tickValue)})`}>
                <text
                    style={{ textAnchor: 'end' }}
                    x={-axisOffset}
                    dy=".32em"
                >
                    {tickFormat(tickValue)}
                </text>
            </g>
        ))
    );
};

export default YDataValues;