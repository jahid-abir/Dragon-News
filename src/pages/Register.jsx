import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const { getSignUp, setUser,updateUserProfile } = useContext(AuthContext)
    const [error,setError] = useState('')
    const navigate = useNavigate()
    const handleRegister = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const name = form.get('name')
        if(name.length < 6){
            return setError('Name must be contain 6 character')
        }
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log({ name, photo, email, password })
        getSignUp(email, password)
            .then(result => {
                setUser(result.user)
                updateUserProfile({displayName : name,photoURL:photo})
                .then(()=>{
                    navigate('/')
                })
                .catch(err => console.log(err))
            })
            .catch(err => console.log(err))

    }
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10 ">
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                        {
                            error && <p className='text-xs text-red-600'>{error}</p>
                        }
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered" required />
                    </div>
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
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p>All ready have an account? <Link to='/auth/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;