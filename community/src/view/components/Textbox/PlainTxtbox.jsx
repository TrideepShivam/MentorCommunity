import '../componentStyle.css'
export default function PlainTxtbox(props){
    return (
        <>
        <input className="txtbox" type={props.type} placeholder={props.placeholder}/>
        </>
    )
}