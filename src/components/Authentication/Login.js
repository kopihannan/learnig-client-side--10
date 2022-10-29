import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Routes/UserContext';

const Login = () => {

    const {loginForm} = useContext(AuthContext);

    const handleLogin=(e)=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        loginForm(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorMessage)
          });
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <input type="text" placeholder="email" className="input input-bordered" name='email' />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="password" className="input input-bordered" name='password' />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-secondary">Login</button>
                        </div>
                        <div className='text-center mt-3'>
                            <small><Link className='font-medium label-text-alt link link-hover' to='/register'>Create an Account?</Link></small>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;