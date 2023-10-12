import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Error from './Components/Error.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([ // Import components that are used in routes
{
path: "/",
element: <App />,
errorElement: <Error />,
children: [ // children are nested routes with a route
{
element: <Home />,
index: true // index route does not need any path
},
{
path: "about", // path can be defined relative to the parent path
element: <About />,
},
{
path: "contact",
element: <Contact />,
},
]
}
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
);
