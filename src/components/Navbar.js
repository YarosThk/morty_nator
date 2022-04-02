import { NavLink } from "react-router-dom";
import { NavbarWrapper, NavigationWrapper, NavbarLogo } from "./styled/Navbar.styled";
import logo from "../images/nav_logo.png"

export const Navbar = () => {
    return (
        <NavbarWrapper>
            <NavbarLogo src={logo}/>
            <NavigationWrapper>
                <NavLink to="/">Home</NavLink>
                <NavLink to="characters">Characters</NavLink>
                <NavLink to="favorites">Favorites</NavLink>
            </NavigationWrapper>
        </NavbarWrapper>

    ) 

}