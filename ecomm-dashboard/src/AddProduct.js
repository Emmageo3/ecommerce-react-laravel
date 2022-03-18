import Header from './Header';
import { useState } from 'react';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

function AddProduct(){

    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [file_path, setFile] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    async function addproduct()
    {
        console.warn(name, file_path, price, description)
        const formData = new FormData();
        formData.append('file_path', file_path);
        formData.append('price', price);
        formData.append('name', name);
        formData.append('description', description);
        let result = await fetch("http://127.0.0.1:8000/api/addProduct", {
            method: 'POST',
            body: formData
        });
        swal("Success!",'Votre produit a été enregistré',"success");
        navigate("/add")
    }
    

    return (
        <div>
            <Header />
            <h1 className='mt-4'>Ajouter un produit</h1>
            <div className='col-sm-6 offset-sm-3 mt-5'>
                <input type="text" onChange={(e)=>setName(e.target.value)} className='form-control' placeholder='nom du produit'/>
                <br />
                <input type="file" onChange={(e)=>setFile(e.target.files[0])} className='form-control' placeholder='fichier'/>
                <br />
                <input type="text" onChange={(e)=>setDescription(e.target.value)} className='form-control' placeholder='description'/>
                <br />
                <input type="number" onChange={(e)=>setPrice(e.target.value)} className='form-control' placeholder='price'/>
                <br />
                <button className='btn btn-primary' onClick={addproduct}>Ajouter le produit</button>
            </div>
        </div>
    )
}

export default AddProduct;