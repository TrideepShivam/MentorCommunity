import { useRef } from 'react';
import IndexButton from './components/Buttons/IndexButton'
import OtpBox from './components/OtpBox/OtpBox';
import PlainTxtbox from './components/Textbox/PlainTxtbox'
import './style/signIn.css'
 
export default function VarifyOtp(){
    const otp = useRef()
    const handleSubmit = ()=>{
        console.log(otp.current);
    }
    return(
        <div className="mainContainer">
            <div className="form">
                <img width="60" height="60" src="https://img.icons8.com/external-basicons-solid-edtgraphics/60/0093ff/external-Teacher-teachers-basicons-solid-edtgraphics-16.png" alt="external-Teacher-teachers-basicons-solid-edtgraphics-16"/>
                <div className="formContainer" >
                    <PlainTxtbox type="email" placeholder="Email"/>
                    <p className="anchor">Resend OTP</p>
                    <p>Enter OTP</p>
                    <OtpBox var={otp}/>
                    <IndexButton value="Verify" onClick={handleSubmit}/>
                </div>
            </div>
        </div>
    )
}