import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
            

            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-blue-600">Get in Touch</h1>
      <p className="py-6">
      I'm currently available to take on new projects, so feel free to send me a message about 
      anything you'd like to discuss. You can contact me anytime, 24/7
      </p>
      <div>
      <Link to='https://www.facebook.com/ismailhf26'>  <button className="btn btn-success rounded-full px-5 ml-10 hover:bg-blue-500 hover:animate-bounce"> <FaFacebook className='text-4xl'></FaFacebook></button></Link>
<Link to='https://www.linkedin.com/in/ismail-hossain-fahim-2026-ihf26/'>  <button className="btn btn-success rounded-full px-5 ml-5  hover:bg-blue-500 hover:animate-bounce"> <FaLinkedin className='text-4xl'></FaLinkedin></button></Link>
<Link to='https://github.com/fahimhossain26'>  <button className="btn btn-success rounded-full px-5 ml-5  hover:bg-blue-500 hover:animate-bounce"> <FaGithub className='text-4xl'></FaGithub> </button></Link>
      </div>
    </div>
    <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone number</span>
          </label>
          <input type="number" placeholder="number" className="input input-bordered" required />
          
        </div>
        <div className=" mt-6">
          <button className="btn btn-primary px-10">Contact</button>
        </div>
      </form>
    </div>
  </div>
</div>


        </div>
    );
};

export default Contact;