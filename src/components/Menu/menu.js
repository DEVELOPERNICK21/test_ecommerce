import {useState} from 'react'
import './menu.css'
import Logo from '../Menu/logo.png'
import {
    BrowserRouter as 
    Link
  } from "react-router-dom";
  import CardData from "./data"

const Menu = (props) => 
{
     const [addProduct, setAddProduct] = useState(0);
    //  const [showItem, setShowItem] = useState(false);

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

    //  const qtyShoe = () =>
    //  {
    //      setShowItem(true);
    //  }

    return(
    <main>
 <div className="menuheadArea">
            <div className="menuLogo_Image">
                <img src={Logo}  height="40rem" width="40rem" />
            </div>
            <div className="menuName">
                <h3>Food's Resturant</h3>
            </div>             
            <div className="cart">
            <button type="button" id="cartbut"  > <Link to="/checkout" className="btn btn-primary">Cart </Link></button> 
            </div>           
            </div>
        <div className="cardsArea">
        {CardData.map((val) => {
           return(
            <div className="card">
                <div className="card_image">
                <img src={val.cardImage} alt="ImageOfShoe" height="240rem" width="320rem"/>
                </div>
                <div className="card_content">
                <div className="card_details">
                <h3 className="textcard">{val.productName}</h3>
                <h2 className="textcard">{val.produtPrice}</h2>
                {/* {qtyShoe ? <h2 className="textcard">{addProduct}</h2> : null}   */}
                <h2 className="textcard">{addProduct}</h2>   
                
                </div>
                 <div className="buttonArea">
                    <button type="button" className="butPLusMinus" onClick={increase} >+</button>
                    <button type="button" className="butPLusMinus" onClick={decrease} >-</button>
                </div> 
              
                </div>
            </div>
            );
        })}
        </div>
     </main>
    );
}


export default Menu;