import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavbarWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between; 

    @media screen and (max-width: 600px){
        flex-direction: column;
        align-items:center;
    }
`

export const NavbarLogo = styled.img`
    max-width:15rem;
    margin-left: 4rem;

    @media screen and (max-width: 600px){
        margin-left: 0rem;
    }
`

export const NavigationWrapper = styled.div`
    min-width: 40rem;
    margin-right: 4rem;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 600px){
        width: 100%;
        align-items:center;
        margin-right: 0rem;
        margin-top: 1rem;
        min-width: 20rem;
    }
`

export const StyledNavLink = styled(NavLink)`
    padding: 1rem;
    font-size: 2.2rem;
    text-decoration: none;
    color: black;

    @media screen and (max-width: 480px){
        font-size: 1.6rem;
        padding: 0.7rem;
    }
    
    @media screen and (max-width: 340px){
        font-size: 1.4rem;
        padding: 0.7;
    }
`