import React,{useState} from 'react';
import * as CONSTANTS from '../Shared/Constants';
import useLoadData from "../Shared/useLoadData";
import { Dimmer, Loader,Image, Segment,Header,Grid } from 'semantic-ui-react';
import GridLayout from "../Shared/GridLayout/GridLayout";
import {scaleLinear, extent, scaleTime, timeFormat , format} from 'd3';
import XAxis from "../Shared/XAxis/XAxis";
import YAxis from "../Shared/YAxis/YAxis";
import Lines from "../Shared/Lines/Lines";
import Legend from "../Shared/Legend/Legend";


const LineChart = ({dataURL, dataFormat,dataFilterTypesColors, filterVariable, xFormat, xAxisTitle, xAxisValuesOffset,
                       xLabelOffset, yAxisValuesOffset, yLabelOffset, yAxisTitle, yFormat, LegendTickRadius,
                       colorLegendTitle, LegendTickTextOffset, LegendTickSpacing, faceOpacity, marginValues,ChartTitle,
                        xValue, yValue
}) => {


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
    const margin = marginValues;
    const innerHeight = CONSTANTS.SVG_HEIGHT - margin.top - margin.bottom;
    const innerWidth = CONSTANTS.SVG_WIDTH - margin.left - margin.right;

    // Axis values
    const xAxisTickFormat = tickValue => timeFormat(xFormat)(tickValue);

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
            <Grid >
                <Grid.Row>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={1}>
                    </Grid.Column>
                    <Grid.Column width={14}>
                        <Segment className="chart-title nav nav-tabs">
                            <Header as='h2' textAlign='center'>
                                {ChartTitle}
                            </Header>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={1}>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>

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

                </Grid.Row>
            </Grid>
        </>
    );
};

export default LineChart;
