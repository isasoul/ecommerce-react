import CardWidget from "../CardWiget/CardWidget"
import Recurso1 from "./assets/Recurso1.svg"
import "./NavBar.css"
import { NavLink, Link } from "react-router-dom"

const NavBar = () =>{
    return (
        <nav className="navbar fixed-top navbar-light bg-light">
            <Link to='/'>
            <img src={Recurso1} alt= "logo-1" className=" navbar-brand logo-kibah"/>
            </Link>
            <div className="Categories">
                <NavLink to={`/category/Skincare`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' }>Skincare</NavLink>
                <NavLink to={`/category/Bullets`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' }>Bullets</NavLink>
                <NavLink to={`/category/Punto G`} className={({isActive}) =>isActive ? 'ActiveOption' : 'Option' }>Punto G</NavLink>
                <NavLink to={`/category/Doble Estimulacion`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' }>Doble Estimulación</NavLink>
                
            </div>
            <CardWidget />
        </nav>
    )
}

export default NavBar