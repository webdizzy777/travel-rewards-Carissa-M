import { Link } from "react-router-dom";

function Footer(){
    return(
        <>
            <footer>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </footer>
        </>
    );
}

export default Footer;