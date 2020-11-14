import React from 'react';
import * as CONSTANTS from '../Shared/Constants';
import useLoadData from "../Shared/useLoadData";
import { Dimmer, Loader,Image, Segment } from 'semantic-ui-react';
import GridLayout from "../Shared/GridLayout/GridLayout";
import {scaleLinear, extent, scaleTime, timeFormat , format} from 'd3';
import XAxis from "../Shared/XAxis/XAxis";
import YAxis from "../Shared/YAxis/YAxis";


const LineChart = () => {

    // Things that can come from parent component
    const dataFormat = [
        {var:"date",fun: d => new Date(d)},
        {var:"value", fun: d => parseFloat(d)}
        ];
    const xFormat ="%Y";
    const xAxisTitle = "Years";
    const xAxisValuesOffset = 15;
    const xLabelOffset = 50;
    const yAxisValuesOffset =10;
    const yLabelOffset=30;
    const yAxisTitle = "Temperature";
    const yFormat ="";


    // Load Data
    let data = useLoadData('/data/data.csv', dataFormat);
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

    // Visual tweaks
    const margin = { top: 30, right: 30, bottom: 60, left: 60 };
    const innerHeight = CONSTANTS.SVG_HEIGHT - margin.top - margin.bottom;
    const innerWidth = CONSTANTS.SVG_WIDTH - margin.left - margin.right;

    // Axis values
    const xValue = d => d.date;
    const xAxisTickFormat = tickValue => timeFormat(xFormat)(tickValue);

    const yValue = d => d.value;
    const yAxisTickFormat = tickValue => format(yFormat)(tickValue)


    // Axis scales
    const xScale = scaleTime()
        .domain(extent(data, xValue ))
        .range([0, innerWidth])
        .nice();

    const yScale = scaleLinear()
        .domain(extent(data, yValue ))
        .range([innerHeight, 0])
        .nice();



    return (
        <>
            <svg width={CONSTANTS.SVG_WIDTH} height={CONSTANTS.SVG_HEIGHT}>
                <g transform={`translate(${margin.left},${margin.top})`}>

                    {/* Grid Layout of the chart */}
                    <GridLayout
                        xScale={xScale}
                        yScale={yScale}
                        innerHeight={innerHeight}
                        innerWidth={innerWidth}
                    />

                    {/* X axis */}
                    <XAxis
                        innerHeight={innerHeight}
                        innerWidth={innerWidth}
                        xLabelOffset={xLabelOffset}
                        xAxisTitle={xAxisTitle}
                        xScale={xScale}
                        xAxisValuesOffset={xAxisValuesOffset}
                        tickFormat={xAxisTickFormat}
                    />

                    {/*  Y axis   */}
                    <YAxis
                    innerHeight={innerHeight}
                    yAxisValuesOffset={yAxisValuesOffset}
                    yLabelOffset={yLabelOffset}
                    yScale={yScale}
                    yAxisTitle={yAxisTitle}
                    tickFormat={yAxisTickFormat}
                    />

                </g>
            </svg>

        </>
    );
};

export default LineChart;
