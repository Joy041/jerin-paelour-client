import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";


const SocialLogin = ({setError}) => {
    const { googleLogin, githubLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'

    const handleGoogleRegister = () => {
        googleLogin()
            .then(() => {
                        navigate(from, { replace: true })

                        Swal.fire({
                            title: 'Success!',
                            text: `Welcome to Jerin's parlour`,
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })

            })
            .catch(error => setError(error.message))
    }

    const handleGithubRegister = () => {
        githubLogin()
            .then(() => {            
                        navigate(from, { replace: true })

                        Swal.fire({
                            title: 'Success!',
                            text: `Welcome to Jerin's parlour`,
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
            })
            .catch(error => setError(error.message))
    }

    return (
        <div>
            <div className="divider"></div>
            <button type="submit" onClick={handleGoogleRegister} className=' btn w-full bg-white text-black font-semibold'>
                <FaGoogle className='me-2'></FaGoogle> Register with Google
            </button>
            <button type="submit" onClick={handleGithubRegister} className='btn w-full bg-white text-black font-semibold mt-4'>
                <FaGithub className='me-2'></FaGithub> Register with Github
            </button>
        </div>
    );
};

export default SocialLogin;