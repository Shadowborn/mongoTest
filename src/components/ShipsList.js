import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ShipsList(props) {

    const [data, setData] = useState([]);

    useEffect(() => {

        let isSubscribed = true;

        axios.get(
            'http://localhost:5000/ships/',
        ).then(result => {
            console.log(result.data)
            if (isSubscribed) {
                setData(result.data)
            }
        }).catch(error => {
            console.log(error)
        })

        return () => isSubscribed = false

    }, []);

    return (
        <div>
            {data.map(item => (
                <div key={item._id} onClick={() => props.history.push(item.username)}>
                    {/* <a href={item.name}>{item.name}</a> */}
                    <h1>Username: {item.username}</h1>
                    <p>Description: {item.description}</p>
                    <p>Date: {item.date}</p>
                </div>
            ))}
        </div>
    )
}

export default ShipsList;