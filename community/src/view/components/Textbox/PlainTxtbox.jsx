import '../componentStyle.css'
export default function PlainTxtbox(props){
    return (
        <>
            <input 
                ref={props.refProp&&props.refProp} 
                className="txtbox" 
                type={props.type?props.type:"text"} 
                placeholder={props.placeholder?props.placeholder:""}
            />
        </>
    )
}