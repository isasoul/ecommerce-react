import CardWidget from "../CardWiget/CardWidget"
import Recurso1 from "./assets/Recurso1.svg"

const NavBar = () =>{
    return (
        <nav>
            <img src={Recurso1} alt= "logo-1" className="logo-kibah"/>
            <div>
                <button className="btn btn-outline-primary"> Skin Care</button>
                <button className="btn btn-outline-primary"> Bullets </button>
                <button  className="btn btn-outline-primary"> Punto G </button>
                <button className="btn btn-outline-primary"> Doble Estimulacion </button>
            </div>
            <CardWidget />
        </nav>
    )
}

export default NavBar