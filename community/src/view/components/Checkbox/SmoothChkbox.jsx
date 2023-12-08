import { useState } from 'react'
import '../componentStyle.css'

export default function SmoothChkbox(props){
    const [checked,setChecked] = useState(false)
    return(
        <div className='checkboxContainer'>
            <input id={props.id} type="checkbox" checked={checked}/>
            <label htmlFor={props.id} onClick={()=>setChecked((checked?false:true))}>
                <div className="outerCheckbox" >
                    <h3>&#10004;</h3>
                </div>&ensp;
                {props.label}
            </label>
        </div>
    )
}