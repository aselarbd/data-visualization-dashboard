import React from 'react';

const XDataValues = ({xScale, innerHeight, tickFormat, axisOffset=10}) => {
    return (
        xScale.ticks().map(tickValue => (
            <g className="tick" key={tickValue} transform={`translate(${xScale(tickValue)},0)`}>
                <text
                    style={{ textAnchor: 'middle' }}
                    dy=".71em"
                    y={innerHeight + axisOffset}
                >
                    {tickFormat(tickValue)}
                </text>
            </g>
        ))
    );
};

export default XDataValues;
