import React from 'react';
import svgfile from '../assets/vector.svg'
import { Element } from 'react-scroll';
import { FaArrowRight, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Skilset from './skilSet/Skilset';
import Education from './Education';


const Myself = () => {
    return (
        <div>
            {/* <Element  name="about" className="section"> */}
            <div className="hero bg-blue-100 min-h-screen  " >
  <div className="hero-content flex-col lg:flex-row-reverse   max-w-screen-xl mx-auto">
    <img
      src={svgfile}
      className="max-w-sm rounded-lg " />



    <div>
      <h1 className="text-5xl font-bold font-serif mb-5 text-blue-600">LET ME INTRODUCE MYSELF</h1>
      <h2 className="text-2xl font-bold font-serif"> Hi, my name is Ismail Hossain Fahim  and I'm from <br /> Dhaka, Bangladesh.</h2>
      <h2 className="text-2xl font-bold font-serif">  Undergraduate  Computer Science and Engineering student </h2>
      <h2 className="text-2xl font-bold font-serif">  As a Font-end developer, I enjoy tackling new challenges and continuously expanding my skillset. </h2>
      <h2 className="text-2xl font-bold font-serif">  I am proficient in Javascript, as well as have knowledge in programming languages such as C and C++ </h2>
      <h2 className="text-2xl font-bold font-serif"> I am passionate about creating responsive and user-friendly web applications using React.js. With a keen eye for design and a focus on improved user experience</h2>

      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>

<Link to='https://www.linkedin.com/in/ismail-hossain-fahim-2026-ihf26/'>       <button className="btn btn-primary">Hire me <FaArrowRight></FaArrowRight></button>
</Link>

<Link to='https://www.facebook.com/ismailhf26'>  <button className="btn btn-success rounded-full px-5 ml-10 hover:bg-blue-500 hover:animate-bounce"> <FaFacebook className='text-4xl'></FaFacebook></button></Link>
<Link to='https://www.linkedin.com/in/ismail-hossain-fahim-2026-ihf26/'>  <button className="btn btn-success rounded-full px-5 ml-5  hover:bg-blue-500 hover:animate-bounce"> <FaLinkedin className='text-4xl'></FaLinkedin></button></Link>
<Link to='https://github.com/fahimhossain26'>  <button className="btn btn-success rounded-full px-5 ml-5  hover:bg-blue-500 hover:animate-bounce"> <FaGithub className='text-4xl'></FaGithub> </button></Link>

    </div>
  </div>
</div>


{/* </Element>  */}




<Skilset></Skilset>
<Education></Education>

        </div>
    );
};

export default Myself;