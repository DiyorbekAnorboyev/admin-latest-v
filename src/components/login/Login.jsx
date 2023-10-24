import { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom/dist'

const Login = () => {
    const [name, setname] = useState('')
    const [password, setpassword] = useState('')
    const [token, settoken] = useState('')
    const navigate = useNavigate()

    const dataUser = {
        userName: name,
        password: password
    }

    console.log(token);

    // Mirzayev_020

    const handleLogin = async (e) => {
        e.preventDefault()
        await axios.post("https://admin.xaridor.com/api/Account/Login", dataUser)
            .then(res => settoken(res.data.data.token))
            .catch(err => console.log(err))
        await window.localStorage.setItem("token", `${token}`)
        if (token) {
            navigate('/adminpage/products')
        }
    }

    return (
        <div>
            <input type='text' onChange={e => setname(e.target.value)} placeholder='username' />
            <input type='text' onChange={e => setpassword(e.target.value)} placeholder='password' />
            <button onClick={handleLogin}>Submit</button>
        </div>
    )
}

export default Login