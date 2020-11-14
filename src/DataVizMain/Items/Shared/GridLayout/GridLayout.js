import React from 'react';
import GridLineX from "./Lines/GridLineX";
import GridLineY from "./Lines/GridLineY";

const GridLayout = ({xScale,yScale, innerHeight, innerWidth}) => {
    return (
        <>
            <GridLineX xScale={xScale} innerHeight={innerHeight}/>
            <GridLineY innerWidth={innerWidth} yScale={yScale}/>
        </>
    );
};

export default GridLayout;
