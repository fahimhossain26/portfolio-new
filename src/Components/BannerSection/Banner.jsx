import React from 'react';
import vediobg from '../../assets/bannerVedio.mp4';
import imgs from '../../assets/img.png';
import { ReactTyped } from "react-typed";
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <div>

            {/* <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">

    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div> */}


            <div className="relative w-full h-screen overflow-hidden">
                <video
                    className="absolute top-1/2 left-1/2 w-auto min-w-full min-h-full max-w-none transform -translate-x-1/2 -translate-y-1/2"
                    autoPlay
                    loop
                    muted
                >
                    <source src={vediobg} type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-black bg-opacity-50"></div>


             

                {/* <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
                    <h1 className="text-4xl md:text-6xl font-bold">Welcome to Our Website</h1>
                    <p className="text-lg md:text-2xl mt-4">Your awesome tagline goes here</p>

                </div> */}

<div className="relative z-10 flex    flex-col lg:flex-row    items-center justify-center h-full text-white text-center ">

    <div className=''>
      <h1 className="text-5xl font-bold mt-40 lg:mt-10"> Hi There! <span className='animate-pulse'> 👋🏻</span> <br />I'm <span className='text-orange-400'>  Ismail Hossain Fahim </span></h1>

      <h2 className='text-3xl'><ReactTyped strings={["Jr. Font-End Developer ", "React Developer ", "Wordpress CMS Developer "]} typeSpeed={60}   backSpeed={60} loop /></h2>
      {/* <ReactTyped
      strings={[
        "Search for products",
        "Search for categories",
        "Search for brands",
      ]}
      typeSpeed={40}
      backSpeed={50}
      attr="placeholder"
      loop
    >
      
    </ReactTyped> */}
      
      <p className="py-6 max-w-xl">As a Full-Stack developer, I enjoy tackling new challenges and continuously expanding my skillset.</p>
      <Link to='https://drive.google.com/file/d/17DyjID8VMUQ6QJaXdfFk4J7Ux3vMKbCp/view?usp=sharing'><button  className="btn btn-primary">Download CV</button></Link>
    </div>

    <img src={imgs} className="  rounded-lg shadow-4xl mt-20  max-w-6xl max-h-2xl"  />

  </div>

              

            

                

               








            </div>


        </div>
    );
};

export default Banner;