import { useState, useEffect } from 'react';
import { json } from 'd3';
import { feature } from 'topojson';

const useLoadJsonData = (jsonUrl) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        json(jsonUrl).then(tjd => {

            const {collection} = tjd.objects;
            setData(feature(tjd,collection))
        });
    }, []);

    return data;
};

export default useLoadJsonData;