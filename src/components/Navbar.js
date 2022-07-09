import { NavbarWrapper, NavigationWrapper, NavbarLogo, StyledNavLink } from "./styled/Navbar.styled";
import { NavLink } from "react-router-dom";
import logo from "../images/nav_logo.png"

export const Navbar = () => {

    return (
        <NavbarWrapper>
            <NavbarLogo src={logo}/>
            <NavigationWrapper>
                <StyledNavLink to="/">Home</StyledNavLink>
                <StyledNavLink to="characters" >Characters</StyledNavLink>
                {/* <StyledNavLink to="favorites">Favorites</StyledNavLink> */}
                <StyledNavLink to="about">About</StyledNavLink>
            </NavigationWrapper>
        </NavbarWrapper>
    ) 
}