import React from 'react';
import Line from "./Line";

const Lines = ({dataAndColors, yScale,xScale,yValue,xValue}) => {
    return (
        dataAndColors.map((data, index) =>
            <Line
                key={index}
                yScale={yScale}
                yValue={yValue}
                xScale={xScale}
                xValue={xValue}
                data={data.data}
                lineColor={data.color}
            />
        )
    );
};

export default Lines;
