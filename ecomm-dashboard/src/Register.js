import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

function Register()
{

    const [name, setName]=useState("")
    const [password, setPassword]=useState("")
    const [email, setEmail]=useState("")
    const navigate = useNavigate()

    async function signup()
    {
        let item={name,password,email}
        console.warn(item)

        let result = await fetch('http://localhost:8000/api/register',{
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-type": 'application/json',
                "Accept": 'application/json'
            }
        })

        swal("Success!",'Inscription terminée',"success");

        result = await result.json()
        localStorage.setItem("user-info",JSON.stringify(result))
        navigate("/add")

    }

    return (
        <div className="col-sm-6 offset-sm-3">
            <h1>Register page</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="nom" />
            <br />
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="email" />
            <br />
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="mot de passe" />
            <br />
            <button onClick={signup} className="btn btn-primary">S'inscrire</button>
        </div>
    )
}

export default Register;