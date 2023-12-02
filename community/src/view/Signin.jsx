import { Link } from 'react-router-dom';
import PlainTxtbox from './components/Textbox/PlainTxtbox'
import './style/signIn.css'
import IndexButton from './components/Buttons/IndexButton';
 
function Signin(){
    return(
        <div id="signin" className="changableForm">
            <PlainTxtbox type="email" placeholder="Email"/>
            <PlainTxtbox type="password" placeholder="Password"/>
            <Link className="anchor" to="/ForgotPassword">forgot Password</Link>
            <IndexButton value="Sign in"/>
            <p>Don't have an account? &nbsp;<Link className="anchor" to="/Signup">Signup</Link></p>
        </div>
    )
}

export default Signin;