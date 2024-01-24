import { useRef } from 'react'
import './otpBox.css'
 
export default function OtpBox(props){
    const otpOne = useRef();
    const otpTwo = useRef();
    const otpThree = useRef();
    const otpFour = useRef();
    
    const handleOtp = (e,r)=>{
        e.target.value = e.target.value.slice(0,1)
        if(e.keyCode === 8){
            let prevEle = r.current.previousSibling
            if(prevEle){
                prevEle.focus()
                prevEle.select()
                r.current.disabled=true
            }
        }else{
            let nextEle = r.current.nextSibling
            if(nextEle){
                nextEle.disabled=false
                nextEle.focus()
                nextEle.select()
            }else{
                console.log(otpOne.current.value+otpTwo.current.value+otpThree.current.value+otpFour.current.value+"")
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
