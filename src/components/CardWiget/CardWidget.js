import cart from "./assets/cart.svg"
import "./CardWidget.css"

const CardWidget = () => {
    return (
        <div className="number-cart"> 
            <img src= {cart} alt= "cart-widget" className="cart"/>
            0
        </div>
    )
}
export default CardWidget