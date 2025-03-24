import { createRoot } from 'react-dom/client'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { AppProvider } from './Cart/ContextAndReducer/cartContext.jsx'
import "react-toastify/dist/ReactToastify.css"
import {ToastContainer} from "react-toastify"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <AppProvider>
    <App />
    <ToastContainer
      position="bottom-left"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      /> 
    </AppProvider>
)
