import React,{useState} from 'react';
import useLoadData from "../Shared/useLoadData";
import {Dimmer, Loader, Segment} from "semantic-ui-react";
import * as CONSTANTS from "../Shared/Constants";
import {pie, arc} from 'd3';



const Arc = ({ data, createArc }) => (
    <g  className="arc">
        <path className="arc" d={createArc(data)} fill={data.color} />
        <text
            transform={`translate(${createArc.centroid(data)})`}
            textAnchor="middle"
            alignmentBaseline="middle"
            fill="black"
            fontSize="10"
        >
            {data.value}
        </text>
    </g>
);


const PieChart = () => {

    // can come from parent component
    const dataURL ='/data/ggComp.csv';
    const dataFormat = [
        // {var:"year",fun: d => new Date(d)},
        {var:"value", fun: d => parseFloat(d)}
    ];
    const dataFilterTypesColors =[
        {name:"Carbon Monoxide", type:"CO", color:"#9A3E25"},
        {name:"Nitrogen Oxides", type:"NOX", color:"#7C715E"},
        {name:"Sulphur Oxides", type:"SOX", color:"#6BBBA1"},
        {name:"VOC", type:"VOC", color:"#E3BA22"}
    ];

    const dataColorMapping ={
        CO:"#9A3E25",
        NOX:"#7C715E",
        SOX:"#6BBBA1",
        VOC:"#E3BA22"
    };

    const filterVariable = "place";

    const innerRadius = 10;
    const outerRadius = 100;


    const LegendTickRadius = 10;
    const colorLegendTitle = "Gases";
    const LegendTickTextOffset = 20;
    const LegendTickSpacing = 50;

    const margin = { top: 30, right: 150, bottom: 30, left: 30 };

    const[selectedYear, setSelectedYear] = useState(2014);

    let data = useLoadData(dataURL, dataFormat);

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
    let annualData = [];
    for (let i =1990; i <= 2014; i++){
        annualData.push(
            {
                year:i,
                data:data.filter(d=> d.year === i.toString())
                    .map(d=> ({type:d.gas,value:d.value,color:dataColorMapping[d.gas]}))
            }
        )
    }

    let pieData = annualData.map(d => (d.year === selectedYear)? d.data:null).filter(d=> d!=null);


    const createPie = pie()
        .value(d => d.value)
        .sort(null);

    const createArc = arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius);

    const d1 = createPie(pieData[0])

    const innerHeight = CONSTANTS.SVG_HEIGHT - margin.top - margin.bottom;
    const innerWidth = CONSTANTS.SVG_WIDTH - margin.left - margin.right;

    console.log(pieData[0]);
    console.log(d1);

    return (
        <>
            <svg width={CONSTANTS.SVG_WIDTH} height={CONSTANTS.SVG_HEIGHT}>
                <g transform={`translate(${innerRadius},${outerRadius})`}>
                    {
                        d1.map((d,i)=>
                            <Arc
                                key={i}
                                data={d}
                                createArc={createArc}
                            />

                        )
                    }
                </g>
            </svg>
        </>
    );
};

export default PieChart;
