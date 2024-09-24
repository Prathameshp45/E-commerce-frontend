import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [name, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('commonUser');
    const [mobileNumber, setMobileNumber] = useState('');

    async function register(payload) {
        try {
            const response = await axios.post('http://localhost:4000/api/auth/register', payload)
            if (response.data.success) {
                alert(response.data.message);
            } else {
                alert(response.data.message);
            }
        } catch (error) {
           
            alert(" registering failed");
        }

    }
   





    const navigate = useNavigate();

    function handleRegister(event) {
        event.preventDefault();
        const payload = { name, email, password,role,mobileNumber };
        // console.log(username, email, password,  role, mobileNumber);

        console.log(payload);
        register(payload);
        localStorage.setItem("pratham ", JSON.stringify(payload));

        navigate('/login')
    }

    return (
        <div>
            <div className="container w-50 formContainer">
                <h3>Register here...</h3>
                <form >
                    <div className='form-group'>
                        <label htmlFor='role'>Role</label>
                        <select className="form-control" id="role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)} required>
                            <option value="admin">Admin</option>
                            <option value="commonUser">Common User</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>User Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter username"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className='form-group mb-3'>
                        <label htmlFor='mobileNumber'>Mobile Number</label>
                        <input
                            type="text"
                            className='form-control'
                            id='mobileNumber'
                            placeholder="Mobile Number"
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)} required />

                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button onClick={handleRegister}
                        className="btn btn-primary">
                        Register
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Register