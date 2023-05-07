import CardWidget from "../CardWiget/CardWidget"
import Recurso1 from "./assets/Recurso1.svg"
import "./NavBar.css"

const NavBar = () =>{
    return (
        <nav className="navbar fixed-top navbar-light bg-light">
            <img src={Recurso1} alt= "logo-1" className=" navbar-brand logo-kibah"/>
            <div>
                <button className="btn  button-nav"> Skin Care</button>
                <button className="btn  button-nav"> Bullets </button>
                <button className="btn  button-nav"> Punto G </button>
                <button className="btn  button-nav"> Doble Estimulacion </button>
            </div>
            <CardWidget />
        </nav>
    )
}

export default NavBar