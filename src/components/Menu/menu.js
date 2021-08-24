import react,{useState} from 'react'
import './menu.css'
import first from '../Menu/1.jpg'
import sec from '../Menu/2.jpg'
import thi from '../Menu/3.jpg'
import fou from '../Menu/4.jpg'
import fiv from '../Menu/5.jpg'
import six from '../Menu/6.jpg'

const Menu = () => 
{
     const [addProduct, setAddProduct] = useState(0);

     const increase = () =>
     {
         return(
             setAddProduct(addProduct +1)
         )
     }
     
     const decrease = () =>
     {
             if(addProduct>0)
             {
                 setAddProduct(addProduct -1);
             }else if (addProduct === 0) {
                alert("Minimum Quntity Should be 1");
             } 
         
     }



    return(
    <main>
        <div className="headArea">
             <h3>Food's Resturant</h3>
        </div>
        <div className="cardsArea">
            <div className="card">
                <div className="card_image">
                <img src={first} alt="ImageOfShoe" height="240rem" width="320rem"/>
                </div>
                <div className="card_content">
                <div className="card_details">
                <h3 className="textcard">Hamburger</h3>
                <h2 className="textcard">Price 200</h2>
                <h2 className="textcard">{addProduct}</h2>
                </div>
                <div className="buttonArea">
                <button type="button" className="butPLusMinus" onClick={increase} >+</button>
                <button type="button" className="butPLusMinus" onClick={decrease} >-</button>
            </div>
                </div>
            </div>
            <div className="card">
                <div className="card_image">
                <img src={sec} alt="ImageOfShoe" height="240rem" width="320rem"/>
                </div>
                <div className="card_content">
                <div className="card_details">
                <h3 className="textcard">Hamburger</h3>
                <h2 className="textcard">Price 200</h2>
                </div>
                <div className="buttonArea">
                <button type="button" className="butPLusMinus" >+</button>
                <button type="button" className="butPLusMinus" >-</button>
            </div>
                </div>
            </div>
            <div className="card">
                <div className="card_image">
                <img src={thi} alt="ImageOfShoe" height="240rem" width="320rem"/>
                </div>
                <div className="card_content">
                <div className="card_details">
                <h3 className="textcard">Hamburger</h3>
                <h2 className="textcard">Price 200</h2>
                </div>
                <div className="buttonArea">
                <button type="button" className="butPLusMinus" >+</button>
                <button type="button" className="butPLusMinus" >-</button>
            </div>
                </div>
            </div>
            <div className="card">
                <div className="card_image">
                <img src={fou} alt="ImageOfShoe" height="240rem" width="320rem"/>
                </div>
                <div className="card_content">
                <div className="card_details">
                <h3 className="textcard">Hamburger</h3>
                <h2 className="textcard">Price 200</h2>
                </div>
                <div className="buttonArea">
                <button type="button" className="butPLusMinus" >+</button>
                <button type="button" className="butPLusMinus" >-</button>
            </div>
                </div>
            </div>
            <div className="card">
                <div className="card_image">
                <img src={fiv} alt="ImageOfShoe" height="240rem" width="320rem"/>
                </div>
                <div className="card_content">
                <div className="card_details">
                <h3 className="textcard">Hamburger</h3>
                <h2 className="textcard">Price 200</h2>
                </div>
                <div className="buttonArea">
                <button type="button" className="butPLusMinus" >+</button>
                <button type="button" className="butPLusMinus" >-</button>
            </div>
                </div>
            </div>
            <div className="card">
                <div className="card_image">
                <img src={six} alt="ImageOfShoe" height="240rem" width="320rem"/>
                </div>
                <div className="card_content">
                <div className="card_details">
                <h3 className="textcard">Hamburger</h3>
                <h2 className="textcard">Price 200</h2>
                <h2 className="textcard">1</h2>
                </div>
                <div className="buttonArea">
                <button type="button"  className="butPLusMinus" >+</button>
                <button type="button" className="butPLusMinus" >-</button>
            </div>
                </div>
            </div>
        </div>
     </main>
    );
}


export default Menu;