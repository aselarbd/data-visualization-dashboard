import { useState, useEffect } from 'react';
import { csv } from 'd3';

const useLoadData = (csvUrl, dataFormat) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const row = d => {
            for(let i=0; i< dataFormat.length; i++){
                d[dataFormat[i].var] = dataFormat[i].fun(d[dataFormat[i].var]);
            }
            return d;
        };
        csv(csvUrl,row).then(setData);
    }, []);

    return data;
};

export default useLoadData;