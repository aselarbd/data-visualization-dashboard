import React from 'react';
import XDataValues from "./XDataValues";

const XAxis = ({xScale, innerHeight,innerWidth, tickFormat, xAxisValuesOffset=10, xLabelOffset=10, xAxisTitle}) => {
    return (
        <>
            <XDataValues tickFormat={tickFormat} axisOffset={xAxisValuesOffset} innerHeight={innerHeight} xScale={xScale}/>
            <text
                className="axis-label"
                x={innerWidth/2}
                y={innerHeight + xLabelOffset}
                textAnchor="middle"
            >
                {xAxisTitle}
            </text>
        </>
    );
};

export default XAxis;
