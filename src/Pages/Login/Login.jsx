import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import SocialLogin from "../Sheared/SocialLogin/SocialLogin";
import webImg from '../../assets/icons/logo.png'

const Login = () => {
    const [error, setError] = useState('')
    const emailRef = useRef();
    const { login, passwordReset } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'

    const handleLoginForm = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        setError('')

        login(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                form.reset()

                navigate(from, { replace: true })

                Swal.fire({
                    title: 'Success!',
                    text: 'Login successful',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })
            .catch(error => setError(error.message))
    }

    const handleForgetPass = () => {
        const email = emailRef.current.value
        passwordReset(email)
            .then(() => {
                alert('Check your email')
                return
            })
            .catch(error => setError(error.message))

    }

    return (
        <div className="hero py-16 bg-base-200 mt-6">
            <div className="hero-content flex-col">
                <div> <img className="w-56 mb-4" src={webImg} alt="" /></div>
                <div className="card flex-shrink-0 w-full md:w-[500px] shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLoginForm}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' ref={emailRef} required className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' required className="input input-bordered" />
                                <label className="label">
                                    <a href="#" onClick={handleForgetPass} className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <p className='text-danger'>{error}</p>
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className='form-control'>
                                <p className='mt-3 text-center'>Do not Have An Account ? <Link to='/register' className='text-decoration-none text-primary'>Register</Link></p>
                                <SocialLogin setError={setError}></SocialLogin>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;