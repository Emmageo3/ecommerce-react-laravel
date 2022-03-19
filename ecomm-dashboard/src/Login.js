import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import swal from 'sweetalert';

function Login(){

    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("")

    const navigate = useNavigate()
    useEffect( () => {
        if(localStorage.getItem('user-info'))
        {
            navigate("/add")
        }
    }, [])

    async function login()
    {
        console.warn(email, password)
        let item={email,password}
        let result = await fetch("http://localhost:8000/api/login",{
            method:'POST',
            headers: {
                "Content-type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)
        })

        swal("Success!",'Vous etes connecté',"success");
        result = await result.json()
        localStorage.setItem("user-info",JSON.stringify(result))
        navigate("/add")
    }

    return (
        <div>
            <Header />
            <h1>Connexion</h1>
            <div className='col-sm-6 offset-sm-3'>
                <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder='email' className='form-control'/>
                <br />
                <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder='mot de passe' className='form-control'/>
                <br />
                <button className='btn btn-primary' onClick={login}>Se connecter</button>
            </div>
        </div>
    )
}

export default Login; 