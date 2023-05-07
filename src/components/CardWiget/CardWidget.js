import cart from "./assets/cart.svg"
import "./CardWidget.css"

const CardWidget = () => {
    return (
        <div>
            <img src= {cart} alt= "cart-widget" className="cart"/>
            0
        </div>
    )
}
export default CardWidget