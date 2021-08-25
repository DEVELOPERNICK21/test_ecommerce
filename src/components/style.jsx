import './style.css'
import Logo from './Menu/logo.png'
import {
    BrowserRouter as 
    Link
} from "react-router-dom";


const Header = () => {
    return (
        <main>
            <div className="headArea">
            <div className="Logo_Image">
                <img src={Logo}  height="40rem" width="40rem" />
            </div>
            <div className="name">
                <h3>Food's Resturant</h3>
            </div>
            </div>
            <div className="contentArea">
                <div className="Headinng">
                    <h2>Welcome to food's</h2>
                    <h2> Kitchen</h2>
                </div>
                <div className="buttonArea">

                    <button type="button" id="gtm"  > <Link to="/menu" className="btn btn-primary">GO TO MENU</Link></button>
                </div>
            </div>
        </main>
    );
}


export default Header;