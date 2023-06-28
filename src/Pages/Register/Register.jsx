import  { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../Sheared/SocialLogin/SocialLogin';
import Navbar from '../Sheared/Navbar/Navbar';
import useAxiosSecure from '../../hooks/useAxiosSecure';


const Register = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const { register, updateUserProfile, verification } = useContext(AuthContext)
    const navigate = useNavigate()
    const [axiosSecure] = useAxiosSecure()

    const handleRegisterForm = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;


        setError('')
        setSuccess('')

        if (password !== confirm) {
            alert('confirm password not match')
            return;
        }

        else if (password.length < 8) {
            setError('Should contain at last 8 characters')
            return;
        }

        else if (!/(?=.*\d)/.test(password)) {
            setError('Should contain at last one digit')
            return;
        }

        else if (!/(?=.*[A-Z])/.test(password)) {
            setError('Should contain at last one upper case')
            return;
        }

        else if (!/(?=.*[a-z])/.test(password)) {
            setError('Should contain at last one lower case')
            return;
        }

        register(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                userVerification(loggedUser)
                updateUserProfile(loggedUser, name)
                    .then(() => {

                        axiosSecure.post('/users', { name: name, email: email })
                            .then(res => {
                                if (res.data.insertedId) {
                                    form.reset()
                                    navigate('/')

                                    Swal.fire({
                                        title: 'Success!',
                                        text: 'Register successful',
                                        icon: 'success',
                                        confirmButtonText: 'Cool'
                                    })
                                }
                            })


                    })
                    .catch(error => setError(error))
            })
            .catch(error => {
                setError(error)
            })

    }

    const userVerification = (user) => {
        verification(user)
            .then(() => {
                alert('Check your email')
                return
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero py-16 bg-base-200 mt-6">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="card flex-shrink-0 md:w-[500px] shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleRegisterForm}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" name='name' required className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name='email' required className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name='password' required className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"> Confirm Password</span>
                                    </label>
                                    <input type="password" placeholder="confirm password" name='confirm' required className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <p className='text-danger'>{error}</p>
                                    <p className='text-success'>{success}</p>
                                    <button className="btn btn-primary">Register</button>
                                </div>
                                <div className='form-control'>
                                    <p className='mt-3 text-center'>Already Have An Account ? <Link to='/login' className='text-decoration-none text-primary'>Login</Link></p>
                                    <SocialLogin setError={setError}></SocialLogin>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;