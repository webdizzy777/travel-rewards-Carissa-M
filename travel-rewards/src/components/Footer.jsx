import { Link } from "react-router-dom";

function Footer(){
    return(
        <>
            <footer>
                <h3 className="center">Get in touch with us!</h3>
                <p className="center">
                    <address>
                        <span class="material-symbols-outlined purple">
                            phone_in_talk
                        </span> &nbsp;
                        <a href="tel:+3143212222">(314) 321-2222</a>
                        &nbsp; |
                        &nbsp;<span class="material-symbols-outlined purple">
                            map
                        </span>&nbsp;
                        615 222 S Meramec Ave., Suite 202, St. Louis, MO 63105
                        &nbsp; |
                        &nbsp;<span class="material-symbols-outlined purple">
                            alternate_email
                        </span>&nbsp;
                        <a href="mailto:admin@milesandsmiles.com">admin@milesandsmiles.com</a>
                    </address>
                </p>
                <p className="center"><Link to='/dashboard'>Dashboard</Link> | <Link to='/about'>About Us</Link></p>
            </footer>
        </>
    );
}

export default Footer;