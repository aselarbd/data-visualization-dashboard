import React from 'react';
import LineChart from "../../Items/LineChart/LineChart";

const GreenGasAndCO2VYear = () => {

    // ------------------------------------ Greenhouse gas vs CO2 over years chart tweaks -----------------------------------

    // Data URL
    const GG_dataURL ='/data/ggCO2.csv';

    //Data formatting
    const GG_dataFormat = [
        {var:"year",fun: d => new Date(d)},
        {var:"value", fun: d => parseFloat(d)}
    ];

    // Data filtering
    const GG_dataFilterTypesColors =[
        {name:"Carbon Dioxide", type:"CO2", color:"#137B80"},
        {name:"GHG", type:"GHG", color:"#9A3E25"}
    ];
    const GG_filterVariable = "gas";

    // X values
    const GG_xFormat ="%Y";
    const GG_xAxisTitle = "Years";
    const GG_xAxisValuesOffset = 15;
    const GG_xLabelOffset = 60;
    const GG_xValue= d => d.year;

    // Y values
    const GG_yAxisValuesOffset =10;
    const GG_yLabelOffset=50;
    const GG_yAxisTitle = "Gas Emissions (Tonne/Cap)";
    const GG_yFormat ="";
    const GG_yValue=d => d.value;

    // Legend
    const GG_LegendTickRadius = 10;
    const GG_colorLegendTitle = "Gases";
    const GG_LegendTickTextOffset = 20;
    const GG_LegendTickSpacing = 50;

    // Interactivity
    const GG_faceOpacity = 0.2;

    // Layout
    const GG_marginValues ={ top: 30, right: 200, bottom: 70, left: 80 }

    //Title
    const GG_ChartTitle ="Greenhouse gases Vs CO2 over time";


    return (
        <div>
            <LineChart
                dataURL={GG_dataURL}
                dataFormat={GG_dataFormat}
                dataFilterTypesColors={GG_dataFilterTypesColors}
                filterVariable={GG_filterVariable}
                xFormat={GG_xFormat}
                xAxisTitle={GG_xAxisTitle}
                xAxisValuesOffset={GG_xAxisValuesOffset}
                xLabelOffset={GG_xLabelOffset}
                yAxisValuesOffset={GG_yAxisValuesOffset}
                yLabelOffset={GG_yLabelOffset}
                yAxisTitle={GG_yAxisTitle}
                yFormat={GG_yFormat}
                LegendTickRadius={GG_LegendTickRadius}
                colorLegendTitle={GG_colorLegendTitle}
                LegendTickTextOffset={GG_LegendTickTextOffset}
                LegendTickSpacing={GG_LegendTickSpacing}
                faceOpacity={GG_faceOpacity}
                marginValues={GG_marginValues}
                ChartTitle={GG_ChartTitle}
                xValue={GG_xValue}
                yValue={GG_yValue}
            />
        </div>
    );
};

export default GreenGasAndCO2VYear;
