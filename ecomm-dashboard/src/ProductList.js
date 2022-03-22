import Header from './Header'
import React, { useState, useEffect} from 'react';
import {Table} from 'react-bootstrap';

function ProductList()
{
    const [data, setData]=useState([]);
    useEffect(async () =>{
        let result = await fetch("http://localhost:8000/api/list");
        result = await result.json();
        setData(result)
    }, [])
    console.warn("result", data);
    return (
        <div>
            <Header />
            <h1>Liste des produits</h1>
            <Table className='table'>
                <tr>
                    <td>Id</td>
                    <td>Nom</td>
                    <td>Description</td>
                    <td>Prix</td>
                    <td>Image</td>
                </tr>
                {
                    data.map((item)=>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.price}</td>
                            <td>{item.file_path}</td>
                        </tr>
                    )
                }
            </Table>
        </div>
    )
}

export default ProductList;