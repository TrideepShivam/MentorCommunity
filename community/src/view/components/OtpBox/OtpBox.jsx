import { useRef } from 'react'
import './otpBox.css'

//here props will contain a ref value named as props.var used to store the otp
export default function OtpBox(props){
    //created individual refs to target every input value individually
    const otpOne = useRef();
    const otpTwo = useRef();
    const otpThree = useRef();
    const otpFour = useRef();
    
    //handled otp with event and current ref element
    const handleOtp = (e,r)=>{
        //sliced input value from 0 to 1 which produce one character value
        e.target.value = e.target.value.slice(0,1)

        //checked if backspace then do the things is reverse order and
        //if 0-9 pressed then next input will be focused and remove desabled attr
        if(e.keyCode === 8){
            let prevEle = r.current.previousSibling
            if(prevEle){
                prevEle.focus()
                prevEle.select()
                r.current.disabled=true
            }
        }else if(e.keyCode>=47&&e.keyCode<=58){
            let nextEle = r.current.nextSibling
            if(nextEle){
                nextEle.disabled=false
                nextEle.focus()
                nextEle.select()
            }else{
                //here last input filled and store the all refs value in single ref
                //which is provided by the props or the parent element.
                props.var.current = otpOne.current.value+otpTwo.current.value+otpThree.current.value+otpFour.current.value+""
            }
        }
    }
    return(
        <div className="otpContainer">
            <input type="number" ref={otpOne} onKeyUp={(e)=>handleOtp(e,otpOne)}/>
            <input type="number" ref={otpTwo} onKeyUp={(e)=>handleOtp(e,otpTwo)} disabled/>
            <input type="number" ref={otpThree} onKeyUp={(e)=>handleOtp(e,otpThree)} disabled/>
            <input type="number" ref={otpFour} onKeyUp={(e)=>handleOtp(e,otpFour)} disabled/>
        </div>
    )
}
