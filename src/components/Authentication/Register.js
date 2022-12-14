import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Routes/UserContext';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {

    const navigate = useNavigate();

    const { registerForm, updateProfileUser, googleProvider, facebookProvider } = useContext(AuthContext);
    const provider = new GoogleAuthProvider();
    const providerFacebook = new FacebookAuthProvider();

    const [error, setError] = useState('');

    //google login popup
    const handleGoogleProvider = () => {
        googleProvider(provider)
            .then(result => {
                const user = result.user;
                navigate('/')
                console.log(user);
                toast.success("Registation Successfull")
            })
            .catch(error => {
                setError('already use an email account')
                toast.error("Registation failed")
            })
    }
    // facebook login popup
    const handleFacebook = () => {
        facebookProvider(providerFacebook)
            .then(result => {
                const user = result.user;
                navigate('/')
                console.log(user);
                toast.success("Registation Successfull")
            })
            .catch(error => {
                setError('already use an email account')
                toast.error("Registation failed")
            })
    }
    // manual registation user 
    const handleRegister = (e) => {
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
                updateProfileUser(name, imgUrl)
                    .then(() => {
                        navigate('/')
                        toast.success("Registation Successfull")
                    })
                    .catch((error) => {
                        setError('already use an email account')
                        toast.error("Registation failed")
                    })
            })
            .catch((error) => {
                setError('already use an email account')
                toast.error("Registation failed")
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
                        <p><small className='text-red-500 py-2'>{error}</small> </p>
                        <div className="form-control">
                            <input type="text" placeholder="Full Name" className="input input-bordered" name='name' />
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
                        <hr />
                        <div className='flex justify-center items-center text-center'>
                            <Link onClick={handleGoogleProvider} className='bg-slate-100 p-3 shadow-lg rounded-full text-xl'><FaGoogle /></Link>
                            <Link onClick={handleFacebook} className='bg-slate-100 p-3 shadow-lg rounded-full text-xl ml-2'><FaFacebook /></Link>
                        </div>
                        <ToastContainer />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;