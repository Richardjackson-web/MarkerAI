import React, { useState} from "react";
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import Google from '../assets/google.png';
import Apple from '../assets/apple.png';
import Signimg from '../assets/signup.png'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import axios from '../axios';



function Signup(){

    const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
      };

      const [formData, setFormData] = useState({
            fullName: "",
            email: "",
            password: "",
            conPassword: "",

        });

        const [message, setMessage] = useState("");

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
                ...formData,
                [name] : value,
            });
        };

        const handleSubmit = async (e) => {
            e.preventDefault();

            try{
                await axios.get('');

                const response = await axios.post('', formData);

                setMessage(response.data.message);
            } catch (error){
                setMessage(error.response?.data?.message || 'An error occured.');
            }
        };
      

    return(
        <>
            <div className="md:flex flex-row">
                <div className="basis-1/2">
                    {/* <div className="flex my-6 items-center flex-shrink-0 text-white md:mr-72 mr-52">
                        <img src={Logo} className="w-100 h-100 mx-auto mr-2" alt="Logo" />
                        <span className="font-lexend text-blue1000-0">MARKER AI</span>
                    </div> */}
                    <div className="my-6 text-center">
                        <h3 className="font-lexend text-2xl">Create Your Account</h3>
                    </div>
                    <div className="flex justify-center items-center">
                        <form className="text-center" onSubmit={handleSubmit}>
                            <div class="mt-2">
                                <input placeholder="Full Name" type="text" name="fullName" id="fullName" 
                                value={formData.fullname} onChange={handleChange} required autocomplete="given-name" className="block rounded-lg font-DMSans bg-white-0 border-blue400-0 px-3 py-3 mb-6 w-96 text-base text-tert-0 outline outline-1 -outline-offset-1 outline-blue400-0 placeholder:font-DMSans placeholder:text-blue500-0 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue400-0 sm:text-sm/6" />
                            </div>
                            <div class="mt-2">
                                <input placeholder="Email" type="email" name="email" id="email" value={formData.email} onChange={handleChange} required autocomplete="given-name" className="block rounded-lg font-DMSans bg-white-0 border-blue400-0 px-3 py-3 mb-6 w-96 text-base text-tert-0 outline outline-1 -outline-offset-1 outline-blue400-0 placeholder:font-DMSans placeholder:text-blue500-0 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue400-0 sm:text-sm/6" />
                            </div>
                            <div class="mt-2 relative">
                                <input placeholder="Password" type={passwordVisible ? "text" :"password"} name="password" id="password" value={formData.password} onChange={handleChange} required autocomplete="given-name" className="block rounded-lg font-DMSans bg-white-0 border-blue400-0 px-3 py-3 mb-6 w-96 text-base text-tert-0 outline outline-1 -outline-offset-1 outline-blue400-0 placeholder:font-DMSans placeholder:text-blue500-0 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue400-0 sm:text-sm/6" />
                                <div onClick={togglePasswordVisibility}>
                                {passwordVisible ? (
                                    <FaRegEye className="absolute top-4 right-3 text-blue500-0 hover:cursor-pointer" />
                                ) : (
                                    <FaRegEyeSlash className="absolute top-4 right-3 text-blue500-0 hover:cursor-pointer"/>
                                )}
                                </div>
                            </div>
                            <div class="mt-2 relative">
                                <input placeholder="Confirm Password" type={passwordVisible ? "text" :"password"} name="conPassword" id="conPassword" value={formData.conPassword} onChange={handleChange} required autocomplete="given-name" className="block rounded-lg font-DMSans bg-white-0 border-blue400-0 px-3 py-3 mb-6  w-96 text-base text-tert-0 outline outline-1 -outline-offset-1 outline-blue400-0 placeholder:font-DMSans placeholder:text-blue500-0 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue400-0 sm:text-sm/6" />
                                <div onClick={togglePasswordVisibility}>
                                {passwordVisible ? (
                                    <FaRegEye className="absolute top-4 right-3 text-blue500-0 hover:cursor-pointer" />
                                ) : (
                                    <FaRegEyeSlash className="absolute top-4 right-3 text-blue500-0 hover:cursor-pointer"/>
                                )}
                                </div>
                            </div>
                            <button type="submit" className="text-white-0 text-center font-lexend bg-blue1000-0 px-16 mt-2.5 py-2 rounded-lg md:w-96">Sign Up</button>
                        </form>
                        {message && <p>{message}</p>}
                    </div>
                    <div className="my-3 text-center">
                        <small className="font-DMSans">Already have an account? <Link to="/signin"><a href="" className="text-blue1000-0">Sign In</a></Link></small>
                        <p className="mt-3 font-DMSans">Or</p>
                    </div>
                    <div className="md:flex mb-16 text-center justify-center items-center">
                        <div>
                            <button className="inline-flex text-sm md:mr-4 text-blue1000-0 border-blue500-0 border-2 rounded-xl px-12 py-2 font-DMSans"><img src={Google} width={15} alt="" className="mt-1 mr-2" /> Sign Up with Google</button>
                        </div>
                        <div className="mt-3 md:mt-0">
                            <button className="inline-flex text-sm md:ml-4 text-blue1000-0 border-blue500-0 border-2 rounded-xl px-14 py-2 font-DMSans"><img src={Apple} width={19} alt="" className="mt-0.5" />Sign Up with Apple</button>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block basis-1/2 mt-12">
                    <img src={Signimg} className="" width={500} height={500} alt="" />
                </div>
            </div>
        
        </>
    )
}




export default Signup