import react from 'react'
import './style.css'

const Header = () => 
{
    return(
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
                <button type="button" id="gtm" >GO TO MENU</button>
            </div>
        </div>
     </main>
    );
}


export default Header;