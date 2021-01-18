import "./style.css";
import { ReactComponent as YoutubeImg } from "./Youtube.svg"
import { ReactComponent as LinkedinImg } from "./Linkedin.svg"
import { ReactComponent as InstagramImg } from "./Instagram.svg"



function Footer(){
    return (
           
            <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior

            <div className="footer-icons">
                <a href="http://gabrielveloso.github.io" target="_new">
                    <YoutubeImg></YoutubeImg>
                </a>
                
                <a href="" target="_new"> 
                    <LinkedinImg></LinkedinImg>
                </a>

                <a href="" target="_new">
                    <InstagramImg></InstagramImg>
                </a>

            </div>
            </footer>
            
        
    )
}

export default Footer;