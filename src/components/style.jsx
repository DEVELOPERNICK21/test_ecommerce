import react from 'react'
import './style.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Menu from './Menu/menu'


const Header = () => {
    return (
        <main>
            <div className="headArea">
                <h3>Food's Resturant</h3>
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