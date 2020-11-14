import { useState, useEffect } from 'react';
import { csv } from 'd3';

const useLoadData = (csvUrl) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        csv(csvUrl).then(setData);
    }, []);

    return data;
};

export default useLoadData;