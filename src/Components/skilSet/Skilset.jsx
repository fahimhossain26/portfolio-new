import React from 'react';
import { DiMongodb } from 'react-icons/di';
import { FaGithubSquare } from 'react-icons/fa';
import { FaCss3Alt, FaGitAlt, FaHtml5, FaNode, FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from 'react-icons/io';
import { IoLogoFigma } from 'react-icons/io5';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const Skilset = () => {
    return (
        <div >

<div className='flex justify-center mt-10 mb-5 md:ml-5'>
    <h2 className='text-6xl  font-serif'> Professional  <span className='text-blue-500'> Skillset</span></h2>
</div>



            <div className=' sm:max-w-screen-sm  grid grid-cols-2  lg:grid-cols-6 gap-2 px-10  lg:max-w-screen-xl mx-auto '>
                  
                 <div className='w-40 h-32 bg-slate-100 rounded-xl  hover:bg-blue-200  '>
                 <FaHtml5 className='text-orange-300 p-2 w-20 h-20 bg-blue-400 mx-auto mt-5 rounded hover:animate-bounce hover:bg-blue-600 ' />
                 <h2 className='text-center font-serif'>HTML</h2>
                     </div>

                     <div className='w-40 h-32 bg-slate-100 rounded-xl  hover:bg-blue-200  '>
                 <FaCss3Alt  className='text-blue-900 p-2 w-20 h-20 bg-blue-400 mx-auto mt-5 rounded hover:animate-bounce hover:bg-blue-500 ' />
                 <h2 className='text-center font-serif'>CSS</h2>
                     </div>

                     <div className='w-40 h-32 bg-slate-100 rounded-xl  hover:bg-blue-200  '>
                 <RiTailwindCssFill className='text-cyan-300 p-2 w-20 h-20 bg-blue-400 mx-auto mt-5 rounded hover:animate-bounce hover:bg-blue-600 ' />
                 <h2 className='text-center font-serif'>TAILWIND</h2>
                     </div>

                     <div className='w-40 h-32 bg-slate-100 rounded-xl  hover:bg-blue-200  '>
                 <IoLogoJavascript className='text-yellow-400 p-2 w-20 h-20 bg-blue-400 mx-auto mt-5 rounded hover:animate-bounce hover:bg-blue-600 ' />
                 <h2 className='text-center font-serif'>JAVASCRIPT</h2>
                     </div>

                     <div className='w-40 h-32 bg-slate-100 rounded-xl  hover:bg-blue-200  '>
                 <FaReact className='text-cyan-400 p-2 w-20 h-20 bg-blue-400 mx-auto mt-5 rounded hover:animate-bounce hover:bg-blue-600 ' />
                 <h2 className='text-center font-serif'>REACT</h2>
                     </div>

                     <div className='w-40 h-32 bg-slate-100 rounded-xl  hover:bg-blue-200  '>
                 <FaGitAlt className='text-orange-500 p-2 w-20 h-20 bg-blue-400 mx-auto mt-5 rounded hover:animate-bounce hover:bg-blue-600 ' />
                 <h2 className='text-center font-serif'>REACT</h2>
                     </div>


                     <div className='w-40 h-32 bg-slate-100 rounded-xl  hover:bg-blue-200  '>
                 <FaNode className='text-green-400 p-2 w-20 h-20 bg-blue-400 mx-auto mt-5 rounded hover:animate-bounce hover:bg-blue-600 ' />
                 <h2 className='text-center font-serif'>NODE</h2>
                     </div>


                     <div className='w-40 h-32 bg-slate-100 rounded-xl  hover:bg-blue-200  '>
                 <DiMongodb className='text-green-700 p-2 w-20 h-20 bg-blue-400 mx-auto mt-5 rounded hover:animate-bounce hover:bg-blue-600 ' />
                 <h2 className='text-center font-serif'>MONGODB</h2>
                     </div>


                     <div className='w-40 h-32 bg-slate-100 rounded-xl  hover:bg-blue-200  '>
                 <SiExpress  className='text-cyan-400 p-2 w-20 h-20 bg-blue-400 mx-auto mt-5 rounded hover:animate-bounce hover:bg-blue-600 ' />
                 <h2 className='text-center font-serif'>EXPRESS</h2>
                     </div>


                     <div className='w-40 h-32 bg-slate-100 rounded-xl  hover:bg-blue-200  '>
                 <FaGithubSquare className='text-black w-20 h-20 bg-blue-400 mx-auto mt-5 rounded hover:animate-bounce hover:bg-blue-600 ' />
                 <h2 className='text-center font-serif'>GITHUB</h2>
                     </div>


                     <div className='w-40 h-32 bg-slate-100 rounded-xl  hover:bg-blue-200  '>
                 <VscVscode className='text-blue-800 p-2 w-20 h-20 bg-blue-400 mx-auto mt-5 rounded hover:animate-bounce hover:bg-blue-600 ' />
                 <h2 className='text-center font-serif'>VS CODE</h2>
                     </div>


                     <div className='w-40 h-32 bg-slate-100 rounded-xl  hover:bg-blue-200  '>
                 <IoLogoFigma className='text-cyan-400 p-2 w-20 h-20 bg-blue-400 mx-auto mt-5 rounded hover:animate-bounce hover:bg-blue-600 ' />
                 <h2 className='text-center font-serif'>REACT</h2>
                     </div>


               
               

            </div>
            
        </div>
    );
};

export default Skilset;