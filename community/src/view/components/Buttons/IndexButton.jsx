import '../componentStyle.css'
export default function IndexButton(props){
    return (
        <>
        <input type="button" value={props.value} onClick={props.onClick} className="indexButton"/>
        </>
    )
}