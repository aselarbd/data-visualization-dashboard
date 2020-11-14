import React from 'react';
import LineChart from "../Items/LineChart/LineChart";

const Gas = () => {

    // ------------------------------------ Greenhouse gas over years chart tweaks -----------------------------------

    // Data URL
    const GreenGas_dataURL ='/data/data.csv';

    //Data formatting
    const GreenGas_dataFormat = [
        {var:"date",fun: d => new Date(d)},
        {var:"value", fun: d => parseFloat(d)}
    ];

    // Data filtering
    const GreenGas_dataFilterTypesColors =[
        {name:"New Jersey", type:"NJ", color:"#137B80"},
        {name:"New York", type:"NY", color:"#9A3E25"},
        {name:"Washington", type:"WA", color:"#684664"},
        {name:"Los Angeles", type:"LA", color:"#E25A42"}
    ];
    const GreenGas_filterVariable = "place";

    // X values
    const GreenGas_xFormat ="%Y";
    const GreenGas_xAxisTitle = "Years";
    const GreenGas_xAxisValuesOffset = 15;
    const GreenGas_xLabelOffset = 60;

    // Y values
    const GreenGas_yAxisValuesOffset =10;
    const GreenGas_yLabelOffset=30;
    const GreenGas_yAxisTitle = "Temperature";
    const GreenGas_yFormat ="";

    // Legend
    const GreenGas_LegendTickRadius = 10;
    const GreenGas_colorLegendTitle = "Cities";
    const GreenGas_LegendTickTextOffset = 20;
    const GreenGas_LegendTickSpacing = 50;

    // Interactivity
    const GreenGas_faceOpacity = 0.2;

    // Layout
    const GreenGas_marginValues ={ top: 30, right: 180, bottom: 70, left: 60 }


    return (
        <div>
            <LineChart
                dataURL={GreenGas_dataURL}
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
            />
        </div>
    );
};

export default Gas;
