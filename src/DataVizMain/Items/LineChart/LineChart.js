import React,{useState} from 'react';
import * as CONSTANTS from '../Shared/Constants';
import useLoadData from "../Shared/useLoadData";
import { Dimmer, Loader,Image, Segment } from 'semantic-ui-react';
import GridLayout from "../Shared/GridLayout/GridLayout";
import {scaleLinear, extent, scaleTime, timeFormat , format} from 'd3';
import XAxis from "../Shared/XAxis/XAxis";
import YAxis from "../Shared/YAxis/YAxis";
import Lines from "../Shared/Lines/Lines";
import Legend from "../Shared/Legend/Legend";


const LineChart = () => {

    // Things that can come from parent component
    const dataURL ='/data/data.csv'
    const dataFormat = [
        {var:"date",fun: d => new Date(d)},
        {var:"value", fun: d => parseFloat(d)}
        ];
    const dataFilterTypesColors =[
        {name:"New Jersey", type:"NJ", color:"#137B80"},
        {name:"New York", type:"NY", color:"#9A3E25"},
        {name:"Washington", type:"WA", color:"#684664"},
        {name:"Los Angeles", type:"LA", color:"#E25A42"}
    ];
    const filterVariable = "place";

    const xFormat ="%Y";
    const xAxisTitle = "Years";
    const xAxisValuesOffset = 15;
    const xLabelOffset = 60;

    const yAxisValuesOffset =10;
    const yLabelOffset=30;
    const yAxisTitle = "Temperature";
    const yFormat ="";

    const LegendTickRadius = 10;
    const colorLegendTitle = "Cities";
    const LegendTickTextOffset = 20;
    const LegendTickSpacing = 50;

    const faceOpacity = 0.2;


    // Load Data
    let data = useLoadData(dataURL, dataFormat);

    // Interactive Legend
    const [hoveredValue, setHoveredValue] = useState(null);

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

    //data classification
    let dataAndColors = [];
    for (let i =0; i < dataFilterTypesColors.length; i++){
        dataAndColors.push(
            {
                type:dataFilterTypesColors[i].type,
                data:data.filter(d=> d[filterVariable] === dataFilterTypesColors[i].type),
                color:dataFilterTypesColors[i].color
            }
        )
    }


    // Visual tweaks
    const margin = { top: 30, right: 180, bottom: 70, left: 60 };
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

    // Interactive Legend
    const filteredData = dataAndColors.filter(item => item.type === hoveredValue)


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

                    {/* Lines */}
                    <g opacity={hoveredValue ? faceOpacity:1}>
                        <Lines
                            dataAndColors={dataAndColors}
                            yScale={yScale}
                            xScale={xScale}
                            yValue={yValue}
                            xValue={xValue}
                        />
                    </g>
                    <Lines
                        dataAndColors={filteredData}
                        yScale={yScale}
                        xScale={xScale}
                        yValue={yValue}
                        xValue={xValue}
                    />

                    {/*  Legend  */}
                    <Legend
                        innerWidth={innerWidth}
                        colorScale={dataFilterTypesColors}
                        tickRadius={LegendTickRadius}
                        colorLegendTitle={colorLegendTitle}
                        tickTextOffset={LegendTickTextOffset}
                        tickSpacing = {LegendTickSpacing}
                        onHover={setHoveredValue}
                        hoveredValue={hoveredValue}
                        faceOpacity={faceOpacity}
                    />
                </g>
            </svg>

        </>
    );
};

export default LineChart;
