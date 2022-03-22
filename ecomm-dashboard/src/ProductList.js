import Header from './Header'
import React, { useState, useEffect} from 'react';
import {Table, Card, Button} from 'react-bootstrap';

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
            

           

                        {
                            data.map((item) => 
                                <Card style={{ width: '18rem', margin: '1rem' }}>
                                    <Card.Img variant="top" src={item.file_path} />
                                    <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.description}
                                    </Card.Text>
                                    <Card.Text>
                                        <h5>{item.price}</h5>
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            )
                        }
                   
        </div>
    )
}

export default ProductList;