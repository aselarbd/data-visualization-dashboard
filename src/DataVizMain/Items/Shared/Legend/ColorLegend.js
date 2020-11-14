import React from 'react';

const ColorLegend = ({colorScale, tickSpacing = 20,tickRadius = 10,tickTextOffset = 20}) => {
    return (
        colorScale.map((value, i) =>
            <g  key={i} className="tick" transform={`translate(0,${i * tickSpacing})`}>
                <circle fill={value.color} r={tickRadius} />
                <text x={tickTextOffset} dy=".32em">
                    {value.name}
                </text>
            </g>
        )
    );
};

export default ColorLegend;
