import { NavbarWrapper, NavigationWrapper, NavbarLogo, StyledNavLink } from "./styled/Navbar.styled";
import logo from "../images/nav_logo.png"

export const Navbar = () => {
    return (
        <NavbarWrapper>
            <NavbarLogo src={logo}/>
            <NavigationWrapper>
                <StyledNavLink to="/">Home</StyledNavLink>
                <StyledNavLink to="characters">Characters</StyledNavLink>
                {/* <StyledNavLink to="favorites">Favorites</StyledNavLink> */}
                <StyledNavLink to="favorites">About</StyledNavLink>
            </NavigationWrapper>
        </NavbarWrapper>
    ) 
}