import React, { useState, useEffect } from 'react';
// import { setProduct } from 'react';
import axios from 'axios';

function Members(url) {
    // const url = 'https://scientific-hisser-019.notion.site/signed/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff756d325-87d9-4f74-9b16-73aa7e3a63ba%2Fteams.json?table=block&id=422c39ed-dfaf-4265-b03c-d4989c6b6ca5&spaceId=2b8cd7ac-5ad8-4bee-a2fb-f6914a0e6375&name=teams.json&cache=v2'
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios
            .get(url)
            .then(response => {
                setData(response.data);
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setLoading(false);
            });
    }, [url]);

    // if (product) {
    return { data, loading, error };

}

export default Members
