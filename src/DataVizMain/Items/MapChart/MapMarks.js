import { geoPath, geoMercator, scaleLinear, format } from 'd3';
import React from 'react';


const projection = geoMercator().scale(700);
const path = geoPath(projection);

const MapMarks = ({land, tempPoint}) => {

    const colorScale = scaleLinear()
        .domain([0, 80])
        .range(['#F2DA57', '#BD2D28' ]);

    const textFormat = format(".4n");

    return(
        <g className="maps" transform={`translate(${-1700},${-350})`}>
            {
                land.features.map((feature,index) =>(
                    <path key={index} d={path(feature)}/>
                ))
            }
            {
                tempPoint.map((d,i)=>{
                    const [x, y] = projection([d.lang,d.lat]);
                    return <circle key={i} cx={x} cy={y} r={10} fill={colorScale(d.temp)} >
                        <title>{textFormat(d.temp)}</title>
                    </circle>
                } )
            }
        </g>
    );
}

export default MapMarks;