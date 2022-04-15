import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavbarWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center; 
`

export const NavbarLogo = styled.img`
    width:130px;
`

export const NavigationWrapper = styled.div`
    display: flex;
    justify-content: center; 
`

export const StyledNavLink = styled(NavLink)`
    padding: 10px;
    background-color: lightblue;
`