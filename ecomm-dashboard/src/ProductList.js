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
            
                <div className='container'>
                    <div className='row'>
                        {
                                data.map((item) => 
                                    <div className='col'>
                                        <Card style={{ width: '18rem'}}>
                                            <Card.Img variant="top" src={"http://localhost:8000/" + item.file_path} />
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
                                    </div>

                                )
                        }
                    </div>
                </div>
                

                       
                   
        </div>
    )
}

export default ProductList;