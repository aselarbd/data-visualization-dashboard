import React from 'react';
import MapChart from "../Items/MapChart/MapChart";
import YearlyTempAndGreenGas from "./TempCharts/YearlyTempAndGreenGas";

const Temp = () => {
    return (
        <div>
            <MapChart/>
            <YearlyTempAndGreenGas/>
        </div>
    );
};

export default Temp;
