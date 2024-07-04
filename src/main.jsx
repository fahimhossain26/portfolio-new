import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './Routs/Routs.jsx';
import FirebaseProvider from './Provider/FirebaseProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
    <RouterProvider router={router} />
    </FirebaseProvider>
   {/* <RouterProvider router={router} /> */}
  </React.StrictMode>,
)
