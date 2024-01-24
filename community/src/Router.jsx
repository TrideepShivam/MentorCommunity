import {Navigate, createBrowserRouter} from 'react-router-dom';
import Signin from './view/Signin';
import Signup from './view/Signup';
import Home from './view/Home';
import NotFound from './view/NotFound';
import SigninLayout from './view/layouts/SigninLayout';
import VarifyOtp from './view/VarifyOtp';

const router =  createBrowserRouter([
    {
        path:"/",
        element:<SigninLayout/>,
        children:[
            {
                path:'/',
                element:<Navigate to="/signin"/>
            },
            {
                path:'/signin',
                element:<Signin />
            },
            {
                path:'/signup',
                element:<Signup />
            }
        ]
    },
    {
        path:'/home',
        element:<Home />
    },
    {
        path:'*',
        element:<NotFound />
    },
    {
        path:'/varify',
        element:<VarifyOtp />
    }
])

export default router;