import React from 'react';
import ColorLegend from "./ColorLegend";

const Legend = ({innerWidth,colorLegendTitle, tickRadius,
                    colorScale, tickTextOffset=12, tickSpacing=22, onHover, hoveredValue, faceOpacity}) => {
    return (
        <g transform={`translate(${innerWidth + 60}, 60)`}>
            <text
                x={35}
                y={-25}
                className="axis-label"
                textAnchor="middle"
            >
                {colorLegendTitle}
            </text>
            <ColorLegend
                tickSpacing={tickSpacing}
                tickTextOffset={tickTextOffset}
                tickRadius={tickRadius}
                colorScale={colorScale}
                onHover={onHover}
                hoveredValue={hoveredValue}
                faceOpacity={faceOpacity}
            />
        </g>
    );
};

export default Legend;
