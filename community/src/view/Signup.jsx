import { Link } from 'react-router-dom';
import './style/signIn.css'
import PlainTxtbox from './components/Textbox/PlainTxtbox';
import IndexButton from './components/Buttons/IndexButton';
 
function Signup(){
    return(
        <div className="changableForm">
            <PlainTxtbox type="text" placeholder="First Name"/>
            <PlainTxtbox type="text" placeholder="Last Name"/>
            <PlainTxtbox type="email" placeholder="Enter Email"/>
            <span><input type="checkbox" name="confirmation" value="confirmation"/> Agree Terms and Conditions</span>
            <IndexButton value="Sign Up"/>
            <p>Have an account? <Link className="anchor" to="/Signin">Signin</Link></p>
        </div>
    )
}

export default Signup;