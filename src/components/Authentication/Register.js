import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Routes/UserContext';


const Register = () => {

    const {registerForm} = useContext(AuthContext);


    const handleRegister =(e)=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const imgUrl = form.image.value;

        registerForm(email, password)
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
            // ..
          });
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Registation now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <input type="text" placeholder="name" className="input input-bordered" name='name' />
                        </div>
                        <div className="form-control">
                            <input type="email" placeholder="email" className="input input-bordered" name='email' />
                        </div>
                        <div className="form-control">
                            <input type="password" placeholder="password" className="input input-bordered" name='password' />
                        </div>
                        <div className="form-control">
                        <input type="text" placeholder="Image URL" className="input input-bordered" name='image' />
                        </div>
                 
                        <div className="form-control mt-6">
                            <button className="btn btn-success">Register</button>
                        </div>
                        <div className='text-center mt-3'>
                            <small className='text-small'>Have an Account? <Link className='font-medium label-text-alt link link-hover' to='/login'>Login?</Link></small>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;