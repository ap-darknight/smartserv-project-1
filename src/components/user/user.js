import React, { useEffect, useState } from 'react';
import user_back from '../../assets/img/user_back.jpg'
import axios from 'axios';

const User = () => {
    var VectorData = [];
    const [data, setData] = useState({});
    const fetchData = () => {
        return axios.get("https://s3.amazonaws.com/open-to-cors/assignment.json")
        .then(res => {
            console.log(res.data);
            setData(res.data);
        });
    }

    useEffect(() => {
        fetchData();
    }, []);

    for (const obj in data.products) {
        var a = {
            "subcategory": data[`products`][`${obj}`][`subcategory`],
            "title": data[`products`][`${obj}`][`title`],
            "price": data[`products`][`${obj}`][`price`],
            "popularity": data[`products`][`${obj}`][`popularity`]
        }
        VectorData.push(a);
    };
    VectorData.sort((a,b) => a.popularity - b.popularity);

    return (
        <div className="container-fluid p-0 min-vh-100"
            style={{
                backgroundImage: `url(${user_back})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}
        >
            <div className="container">
                <div className="container p-2">
                    <table className="container my-3">
                        <tr className="row text-center">
                            <th className="col alert-info m-auto">SubCategory</th>
                            <th className="col alert-warning d-none d-lg-block m-auto">Title</th>
                            <th className="col alert-success d-none d-lg-block m-auto">Price</th>
                            <th className="col alert-danger m-auto">Popularity</th>
                            
                        </tr>
                        <hr className="m-0" />
                        {VectorData && VectorData.map((obj, i) => {
                            return (
                                <tr className="row text-center">
                                    <th className="col alert-info m-auto">{obj.subcategory}</th>
                                    <th className="col alert-warning d-none d-lg-block m-auto">{obj.title}</th>
                                    <th className="col alert-success d-none d-lg-block m-auto">{obj.price}</th>
                                    <th className="col alert-danger m-auto">{obj.popularity}</th>  
                                </tr>
                            );        
                        })}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default User;