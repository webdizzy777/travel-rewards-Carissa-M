import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { Link } from "react-router-dom";

function Home(){
    return(
        <>
            <Header></Header>
            <main>
                <div className="loginForm">
                    <h1><span className="blackOpaque">Unlock Your Next Destination!</span></h1> 
                    <h2><span className="blackOpaque">Sign In to See Your Rewards</span></h2>
                    <label htmlFor="email"><span className="blackOpaque"><b>Email *</b></span>
                        <br />
                        <input type="email" id ="email" placeholder = "Enter your email"   required />
                    </label>
                    <br /><br />
                    <label htmlFor="password"><span className="blackOpaque"><b>Password *</b></span>
                        <br />
                        <input type="password" id="password" placeholder="Enter your password"  required />
                    </label>
                    <br /><br />
                    <Link to="/dashboard"><button className="logInButton">Login</button></Link>
                    <p><span className="blackOpaque "><a href="#">Forgot Password?</a> or <a href="#">Sign Up</a></span></p>
                </div>
            </main>
            <Footer></Footer>
        </>
    );
}

export default Home;