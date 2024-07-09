// @ts-nocheck
import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error('Failed to fetch');
                }

                const responseData = await response.json();
                setData(responseData);
                setIsLoading(false);
                setError(null);
            } catch (error) {
                setError(error.message);
                setIsLoading(false);
            }
        };

        setTimeout(() => {
            fetchData();
        }, 2000);

    }, [url]);

    return { data, isLoading, error };
};

export default useFetch;
