import { Outlet } from "react-router-dom";
import img from '../../assets/back.png'
import '../style/signIn.css';

export default function SigninLayout(){
    return(
        <div className="mainContainer">
            <div id="leftSideContainer" className="sideContainer">
                <h3 className="title">Mentor' Community</h3>
                <p>A community where pathways are guided by the industry personnal to the interested folks.</p>
                    <div><img width="95%" src={img}/></div>
            </div>
            <div id="rightSideContainer" className="sideContainer">
                <div className="form">
                    <img width="60" height="60" src="https://img.icons8.com/external-basicons-solid-edtgraphics/60/0093ff/external-Teacher-teachers-basicons-solid-edtgraphics-16.png" alt="external-Teacher-teachers-basicons-solid-edtgraphics-16"/>
                    <div className="formContainer" >
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    )
}