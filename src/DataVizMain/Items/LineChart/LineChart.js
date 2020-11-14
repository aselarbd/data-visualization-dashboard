import React from 'react';
import * as CONSTANTS from '../Shared/Constants';
import useLoadData from "../Shared/useLoadData";
import { Dimmer, Loader,Image, Segment } from 'semantic-ui-react';
import GridLayout from "../Shared/GridLayout/GridLayout";
import {scaleLinear, extent} from 'd3';


const LineChart = () => {

    let data = useLoadData('/data/data.csv');
    if (!data){
        return (
            <div className="svg-skin" >
                <Segment className="loading-text">
                    <Dimmer active inverted>
                        <Loader size='large'>Loading... !!!</Loader>
                    </Dimmer>
                    <Image src='/images/wireframe/paragraph.png' />
                </Segment>
            </div>

        );
    }

    const margin = { top: 30, right: 30, bottom: 30, left: 30 };
    const innerHeight = CONSTANTS.SVG_HEIGHT - margin.top - margin.bottom;
    const innerWidth = CONSTANTS.SVG_WIDTH - margin.left - margin.right;

    const xValue = d => d.date;
    const yValue = d => d.value;

    const xScale = scaleLinear()
        .domain(extent(data, xValue ))
        .range([0, innerWidth])
        .nice();

    const yScale = scaleLinear()
        .domain(extent(data, yValue ))
        .range([0, innerHeight]);



    console.log(data);

    return (
        <>
            <svg width={CONSTANTS.SVG_WIDTH} height={CONSTANTS.SVG_HEIGHT}>
                <g transform={`translate(${margin.left},${margin.top})`}>
                    <GridLayout
                        xScale={xScale}
                        yScale={yScale}
                        innerHeight={innerHeight}
                        innerWidth={innerWidth}
                    />
                </g>
            </svg>

        </>
    );
};

export default LineChart;
