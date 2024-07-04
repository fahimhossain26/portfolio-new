import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const Navber = () => {
    return (
        <div className="  bg-blue-100 ">
            

            <div className="navbar bg-base-100 max-w-screen-xl mx-auto  bg-blue-100 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
       
        <li><Link to="/about" smooth={true} duration={500}>About</Link></li>
        <li><Link to="/portfolio" smooth={true} duration={500}>portfolio</Link></li>
        <li><Link to="/contact" smooth={true} duration={500}>Contact Us</Link></li>
      </ul>
    </div>
    <a className=" text-2xl font-bold">FAHIM</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1  font-serif text-xl">
    <li className="/"><a>Home</a></li>
       
        <li><Link to="/about" smooth={true} duration={500}>About</Link></li>
        <li><Link to="/portfolio" smooth={true} duration={500}>portfolio</Link></li>
        <li><Link to="/contact" smooth={true} duration={500}>Contact Us</Link></li>
       
    </ul>
  </div>
  <div className="navbar-end">
  <Link to='https://www.linkedin.com/in/ismail-hossain-fahim-2026-ihf26/'>       <button className="btn btn-primary">Hire me <FaArrowRight></FaArrowRight></button>
</Link>
  </div>
</div>
            
        </div>
    );
};

export default Navber;