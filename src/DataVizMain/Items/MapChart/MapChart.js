import React, {useState} from 'react';
import useLoadJsonData from "../Shared/LoadData/useLoadJsonData";
import {Dimmer, Grid, Header, Loader, Segment,Menu, Dropdown} from "semantic-ui-react";
import * as CONSTANTS from "../Shared/Constants";
import MapMarks from "./MapMarks";
import useLoadData from "../Shared/LoadData/useLoadData";

const MapChart = () => {

    const mapDataURL = "https://raw.githubusercontent.com/cartdeco/Australia-json-data/master/aus25fgd_r.topojson";
    const tempDataURL ="/data/tempCity.csv";

    const dataFormat = [
        {var:"temp", fun: d => parseFloat(d)},
        {var:"lat", fun: d => parseFloat(d)},
        {var:"lang", fun: d => parseFloat(d)}
    ];
    const ChartTitle= "Temperature over the continent";

    const options = [
        {key:1,text:'1995', value:'1995'},
        {key:2,text:'1996', value:'1996'},
        {key:3,text:'1997', value:'1997'},
        {key:4,text:'1998', value:'1998'},
        {key:5,text:'1999', value:'1999'},
        {key:6,text:'2000', value:'2000'},
        {key:7,text:'2001', value:'2001'},
        {key:8,text:'2002', value:'2002'},
        {key:9,text:'2003', value:'2003'},
        {key:10,text:'2004', value:'2004'},
        {key:11,text:'2005', value:'2005'},
        {key:12,text:'2006', value:'2006'},
        {key:13,text:'2007', value:'2007'},
        {key:14,text:'2008', value:'2008'},
        {key:15,text:'2009', value:'2009'},
        {key:16,text:'2010', value:'2010'},
        {key:17,text:'2011', value:'2011'},
        {key:18,text:'2012', value:'2012'},
        {key:19,text:'2013', value:'2013'},
        {key:20,text:'2014', value:'2014'},
        {key:21,text:'2015', value:'2015'},
        {key:22,text:'2016', value:'2016'},
        {key:23,text:'2017', value:'2017'},
        {key:24,text:'2018', value:'2018'},
        {key:25,text:'2019', value:'2019'},
        {key:26,text:'2020', value:'2020'}
    ]
    const mapData = useLoadJsonData(mapDataURL);
    const tempData = useLoadData(tempDataURL,dataFormat);

    const[selectedYear, setSelectedYear] = useState("2020");

    if (!mapData || !tempData){
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


    const yearHandler = (event, {value}) =>{
        console.log(value);
        setSelectedYear(value.toString());
    }

    //data classification
    let annualData = [];
    for (let i =1995; i <= 2020; i++){
        annualData.push(
            {
                year:i.toString(),
                data:tempData.filter(d=> d.year === i.toString())
                    .map(d=> ({city:d.city,temp:d.temp,lat:d.lat,lang:d.lang}))
            }
        )
    }
    let selectYearData = annualData.map(d => (d.year === selectedYear)? d.data:null).filter(d=> d!=null)[0];

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
                        <Dropdown
                            options={options}
                            onChange={yearHandler}
                            search
                            selection
                            placeholder='Select Year'
                             />
                    </Grid.Row>
                    <Grid.Row>

                <svg width={CONSTANTS.SVG_WIDTH} height={CONSTANTS.SVG_HEIGHT}>
                    <MapMarks land={mapData} tempPoint={selectYearData}/>
                </svg>
                </Grid.Row>
            </Grid>

        </>
    );
};

export default MapChart;
