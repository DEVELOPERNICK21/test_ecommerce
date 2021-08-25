import react from 'react'
import './thank.css'
import Logo from '../Menu/logo.png'

const Thank = () => 
{
    return(
    <main>
 <div className="headArea">
            <div className="Logo_Image">
                <img src={Logo} alt="Logo IMage of fork and spoon" height="40rem" width="40rem" />
            </div>
            <div className="name">
                <h3>Food's Resturant</h3>
            </div>
            </div>        <div className="contentArea">
            <div className="Headinng">
                <h2>Check Out</h2>
                <h2>Thank You for your order</h2>
            </div>
        </div>
     </main>
    );
}


export default Thank;