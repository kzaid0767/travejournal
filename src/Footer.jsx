import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Footer(){
    return(
        <footer className="appFooter">
            <a href="https://x.com/Kassim_B_Zaid" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands  fa fa-x-twitter"></i>
            </a>
            <a href="mailto:kzaid0767@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fa-light  fa fa-envelope"></i></a>
            <a href="https://www.linkedin.com/in/kassim-zaid-4b2474288/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa fa-linkedin"></i></a>
            <a href="https://github.com/kzaid0767" target="_blank" rel="noopener noreferrer"><i className="fa-brands  fa fa-github"></i></a>
        </footer>
    )
}

export default Footer