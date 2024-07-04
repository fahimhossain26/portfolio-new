import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/home/Home";
import Register from "../Components/Register";
import Login from "../Components/Login";
import Myself from "../Components/Myself";
import Project from "../Components/Project/Project";
import Contact from "../Components/Contact";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      // children :[
      
   
  
  

      // ]
    },
    {
      path:'/',
      element:<Home></Home>
  },

    {
      path:'/about',
      element:<Myself></Myself>
    },{
      path:'/portfolio',
      element:<Project></Project>
    },{
      path:'contact',
      element:<Contact></Contact>
    }
    
  ]);


  export default router