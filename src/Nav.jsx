import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import globe from "./assets/globe.png"
function Nav(){
    return(
        <nav className="appNav">
            <img src={globe} className="globe" alt="the world globe" />
            <p>my travel journal</p>
        </nav>
    )
}

export default Nav