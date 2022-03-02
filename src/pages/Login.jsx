import  {useState} from 'react';
import {
    Link
    } from "react-router-dom";
import  LoginService  from '../services/loginService.js';
export const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);


const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError('');

   let data = await LoginService(name, password);

    if (data.status) {
        setLoading(false);
        localStorage.setItem('token', data.token);


        window.location.href = '/';
    }else{
        setLoading(false);
        setError(data.message);
    }
}

    return(
        <div className=''>   
            <form  onSubmit={ e => handleSubmit(e) }>
            <h1 >Login</h1>
                <label >
                    email:
                    <input id="username" type="text" name="username" value={name} onChange={e => setName(e.target.value)} />
                </label>
                <br />
                <label>
                    password:
                <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value) } />
                </label>
                <br />
                <br />
       {
           loading ?
              <button type="submit" disabled>Loading...</button>
                :   
                <button   type="submit">Login</button>
       }
            {error && <p>{error}</p>}


            </form>

        </div>
    )
}