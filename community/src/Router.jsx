import {Navigate, createBrowserRouter} from 'react-router-dom';
import Signin from './view/Signin';
import Signup from './view/Signup';
import Home from './view/Home';
import NotFound from './view/NotFound';
import SigninLayout from './view/layouts/SigninLayout';

const router =  createBrowserRouter([
    {
        path:"/",
        element:<SigninLayout/>,
        children:[
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
        path:'/',
        element:<Navigate to='/signin'/>
    }
])

export default router;