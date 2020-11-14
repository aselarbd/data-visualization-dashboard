import React from 'react';
import { line, curveNatural } from 'd3';

const Line = ({data, yScale,xScale,yValue,xValue,lineColor}) => {
    return (
        <g className="marks">
            <path
                fill="none"
                stroke={lineColor}
                d={line()
                    .x(d => xScale(xValue(d)))
                    .y(d => yScale(yValue(d)))
                    .curve(curveNatural)(data)}
            />
        </g>
    );
};

export default Line;
