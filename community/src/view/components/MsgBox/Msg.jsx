import './Msg.css'
import imgSuccess from '../../../assets/success.gif'
import imgInfo from '../../../assets/info.gif'
import imgError from '../../../assets/error.gif'

//props will definitely get setOpen and data object having status and message
export default function Msg(props){
    const closeMsgBox = ()=>{
        props.setMsg(false)
    }
    setTimeout(closeMsgBox, 6000)

    return(
        <div className="msgContainer">
            <img src={
                props.data.status=="success"?imgSuccess:
                props.data.status=="error"?imgError:imgInfo
            } alt={props.data.status} />
            <p>{props.data.message}</p>
        </div>
    )
}