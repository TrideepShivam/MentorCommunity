import { Link } from 'react-router-dom';
import PlainTxtbox from './components/Textbox/PlainTxtbox'
import './style/signIn.css'
import IndexButton from './components/Buttons/IndexButton';
import { useRef, useState } from 'react';
import Msg from './components/MsgBox/Msg';


function Signin(){
    //messegebox state
    const [msg,setMsg] = useState({
        isOpen:false,
        status:"info",
        message:"Message"
    })

    const userEmail = useRef()
    const userPwd= useRef()

    const handleSubmit = (e)=>{
        // console.log(userEmail.current.value+" and "+userPwd.current.value)
        const pushNotification=userEmail.current.value + " and " + userPwd.current.value
        setMsg({
            ...msg,
            isOpen:true,
            status:"info",
            message:pushNotification
        })
    }
//in this function return we have used attribute refProp instead of ref beacause
//ref is reserved keyword which can not be used in the props so name is changed.
    return(
        <div className="form">
            <img width="60" height="60" src="https://img.icons8.com/external-basicons-solid-edtgraphics/60/0093ff/external-Teacher-teachers-basicons-solid-edtgraphics-16.png" alt="external-Teacher-teachers-basicons-solid-edtgraphics-16"/>
            <div className="formContainer" >
                <div className="changableForm">
                    {msg.isOpen&&<Msg 
                        setMsg={setMsg}
                        data={msg}
                    />}
                    <PlainTxtbox refProp={userEmail} type="email" placeholder="Email"/>
                    <PlainTxtbox refProp={userPwd} type="password" placeholder="Password"/>
                    <Link className="anchor" to="/ForgotPassword">Forgot Password</Link>
                    <IndexButton value="Sign in" onClick={handleSubmit}/>
                    <p>Don't have an account? &nbsp;<Link className="anchor" to="/Signup">Signup</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Signin;