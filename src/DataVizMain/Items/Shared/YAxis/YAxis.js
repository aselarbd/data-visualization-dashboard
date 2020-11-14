import React from 'react';
import YDataValues from "./YDataValues";

const YAxis = ({yScale, innerHeight,tickFormat, yAxisValuesOffset=10, yLabelOffset=10, yAxisTitle}) => {
    return (
        <>
            <YDataValues
                tickFormat={tickFormat}
                axisOffset={yAxisValuesOffset}
                yScale={yScale}
            />
            <text
                className="axis-label"
                transform={`translate(${-yLabelOffset},${innerHeight / 2}) rotate(-90)`}
                textAnchor="middle"
            >
                {yAxisTitle}
            </text>
        </>
    );
};

export default YAxis;
