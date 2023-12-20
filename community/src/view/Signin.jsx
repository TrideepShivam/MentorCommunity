import { Link } from 'react-router-dom';
import PlainTxtbox from './components/Textbox/PlainTxtbox'
import './style/signIn.css'
import IndexButton from './components/Buttons/IndexButton';
 
function Signin(){
    return(
        <div className="form">
            <img width="60" height="60" src="https://img.icons8.com/external-basicons-solid-edtgraphics/60/0093ff/external-Teacher-teachers-basicons-solid-edtgraphics-16.png" alt="external-Teacher-teachers-basicons-solid-edtgraphics-16"/>
            <div className="formContainer" >
                <div className="changableForm">
                    <PlainTxtbox type="email" placeholder="Email"/>
                    <PlainTxtbox type="password" placeholder="Password"/>
                    <Link className="anchor" to="/ForgotPassword">Forgot Password</Link>
                    <IndexButton value="Sign in"/>
                    <p>Don't have an account? &nbsp;<Link className="anchor" to="/Signup">Signup</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Signin;