import React from 'react';
import LineChart from "../Items/LineChart/LineChart";
const RainfallVsGreenGasYearly = () => {

    // ------------------------------------ Greenhouse gas vs Temp over years chart tweaks -----------------------------------

    // Data URL
    const GG_dataURL ='/data/ggRainComp.csv';

    //Data formatting
    const GreenGas_dataFormat = [
        {var:"year",fun: d => new Date(d)},
        {var:"value", fun: d => parseFloat(d)}
    ];

    // Data filtering
    const GreenGas_dataFilterTypesColors =[
        {name:"Carbon Monoxide", type:"CO", color:"#9A3E25"},
        {name:"Nitrogen Oxides", type:"NOX", color:"#7C715E"},
        {name:"Sulphur Oxides", type:"SOX", color:"#6BBBA1"},
        {name:"VOC", type:"VOC", color:"#E3BA22"},
        {name:"Rainfall", type:"Rainfall", color:"#005D6E"}
    ];
    const GreenGas_filterVariable = "gas";

    // X values
    const GreenGas_xFormat ="%Y";
    const GreenGas_xAxisTitle = "Years";
    const GreenGas_xAxisValuesOffset = 15;
    const GreenGas_xLabelOffset = 60;
    const GreenGas_xValue= d => d.year;

    // Y values
    const GreenGas_yAxisValuesOffset =10;
    const GreenGas_yLabelOffset=50;
    const GreenGas_yAxisTitle = "";
    const GreenGas_yFormat ="";
    const GreenGas_yValue=d => d.value;

    // Legend
    const GreenGas_LegendTickRadius = 10;
    const GreenGas_colorLegendTitle = "Gases";
    const GreenGas_LegendTickTextOffset = 20;
    const GreenGas_LegendTickSpacing = 50;

    // Interactivity
    const GreenGas_faceOpacity = 0.2;

    // Layout
    const GreenGas_marginValues ={ top: 30, right: 200, bottom: 70, left: 80 }

    //Title
    const GreenGas_ChartTitle ="Greenhouse gases vs Rainfall Comparison over time";


    return (
        <div>
            <LineChart
                dataURL={GG_dataURL}
                dataFormat={GreenGas_dataFormat}
                dataFilterTypesColors={GreenGas_dataFilterTypesColors}
                filterVariable={GreenGas_filterVariable}
                xFormat={GreenGas_xFormat}
                xAxisTitle={GreenGas_xAxisTitle}
                xAxisValuesOffset={GreenGas_xAxisValuesOffset}
                xLabelOffset={GreenGas_xLabelOffset}
                yAxisValuesOffset={GreenGas_yAxisValuesOffset}
                yLabelOffset={GreenGas_yLabelOffset}
                yAxisTitle={GreenGas_yAxisTitle}
                yFormat={GreenGas_yFormat}
                LegendTickRadius={GreenGas_LegendTickRadius}
                colorLegendTitle={GreenGas_colorLegendTitle}
                LegendTickTextOffset={GreenGas_LegendTickTextOffset}
                LegendTickSpacing={GreenGas_LegendTickSpacing}
                faceOpacity={GreenGas_faceOpacity}
                marginValues={GreenGas_marginValues}
                ChartTitle={GreenGas_ChartTitle}
                xValue={GreenGas_xValue}
                yValue={GreenGas_yValue}
            />
        </div>
    );
};

export default RainfallVsGreenGasYearly;
