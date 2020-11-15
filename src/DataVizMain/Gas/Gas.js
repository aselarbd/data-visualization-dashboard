import React from 'react';
import MultipleGreenGasVYear from "./GreenGasCharts/MultipleGreenGasVYear";
import GreenGasAndCO2VYear from "./GreenGasCharts/GreenGasAndCO2VYear";

const Gas = () => {


    return (
        <div>
            <MultipleGreenGasVYear/>
            <GreenGasAndCO2VYear/>
        </div>
    );
};

export default Gas;
