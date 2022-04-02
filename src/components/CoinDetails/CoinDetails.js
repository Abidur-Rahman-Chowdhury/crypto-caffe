import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CoinDetails = () => {
    const { id } = useParams();
    const [coin, setCoin] = useState({});

    useEffect(() => {
        fetch('')
    },[])
    return (
        <div>
            <h1>coin details page</h1>
        </div>
    );
};

export default CoinDetails;