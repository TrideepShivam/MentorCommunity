import '../style/requestserver.css';

export class RequestServer{
    constructor(id){
        this.parentId=id;
        this.parentId.className="parent";
    }
    wait(){
        let container = document.createElement("div");
        container.className="loadingContainer";
        container.appendChild(document.createTextNode("Loading..."));
        this.parentId.appendChild(container);
    }
}