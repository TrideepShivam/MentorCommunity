import { Link } from 'react-router-dom';
import './style/signIn.css'
import PlainTxtbox from './components/Textbox/PlainTxtbox';
import IndexButton from './components/Buttons/IndexButton';
import SmoothChkbox from './components/Checkbox/SmoothChkbox';
 
function Signup(){
    return(
    <div className="form">
        <img width="60" height="60" src="https://img.icons8.com/external-basicons-solid-edtgraphics/60/0093ff/external-Teacher-teachers-basicons-solid-edtgraphics-16.png" alt="external-Teacher-teachers-basicons-solid-edtgraphics-16"/>
        <div className="formContainer" >
            <div className="changableForm">
                <PlainTxtbox type="text" placeholder="First Name"/>
                <PlainTxtbox type="text" placeholder="Last Name"/>
                <PlainTxtbox type="email" placeholder="Enter Email"/>
                <SmoothChkbox id="agree" label="Agree Terms and Conditions"/>
                <IndexButton value="Sign Up"/>
                <p>Have an account? <Link className="anchor" to="/Signin">Signin</Link></p>
            </div>
        </div>
    </div>
    )
}

export default Signup;