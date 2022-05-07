import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavbarWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center; 
`

export const NavbarLogo = styled.img`
    width:13rem;
`

export const NavigationWrapper = styled.div`
    display: flex;
    justify-content: center; 
`

export const StyledNavLink = styled(NavLink)`
    font-size: 2rem;
    padding: 1rem;
    background-color: lightblue;
`