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
                <Outlet/>
            </div>
        </div>
    )
}