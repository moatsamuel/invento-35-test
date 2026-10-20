import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MealDb from "./MealDb"
import {ProductsProvider} from "./context/ProductContext.jsx"
import { createBrowserRouter, RouterProvider } from "react-router";

const route = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/meals", element: <MealDb />}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ProductsProvider>
      <App />
    </ProductsProvider> */}
    {/* <MealDb /> */}


     <ProductsProvider>
      <RouterProvider router={route} />
    </ProductsProvider>


  </StrictMode>,
)
