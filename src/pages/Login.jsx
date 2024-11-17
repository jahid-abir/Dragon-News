import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';


const Login = () => {
    const {getLogIn,setUser} = useContext(AuthContext)
    const [error,setError] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    const handleLogin = (e) =>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        getLogIn(email,password)
        .then(result =>{
            setUser(result.user)
            e.target.reset()
            navigate(location?.state ? location.state : '/')
        })
        .catch(err => {
            setError(err.message)
        })
    }
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10 ">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    {
                        error && <p className='text-red-600'>{error}</p>
                    }
                </form>
                <p>All ready have an account? <Link to='/auth/register'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;