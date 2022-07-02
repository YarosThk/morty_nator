import styled from "styled-components"


export const Button = styled.button`
    width: 20rem;
    height: 4rem;
    margin-top: 3rem;
    background-color: transparent;
    border: 2.5px solid black;
    border-radius: 50px;
    cursor: pointer;

    &:hover{
        color: #FFAC1C;
        border-color: #FFAC1C;
    }
`

export const FilterControlButton = styled(Button)`
    width: 10rem;
    max-width: 15rem;
    margin-top: 0rem;
    font-size: 1.8rem;
    color: white;
    border: 2.5px solid white;


    @media screen and (max-width: 480px){
        font-size: 1.6rem;
    }
    
    @media screen and (max-width: 340px){
        font-size: 1.4rem;
    }
`
export const SearchFilter = styled(FilterControlButton)`
    @media screen and (max-width: 875px){
        background-color: white;
        color: black;
        border: 2.5px solid black;
    }
`
export const ResetFilter = styled(FilterControlButton)`
    @media screen and (max-width: 1060px){
        background-color: white;
        color: black;
        border: 2.5px solid black;
    }
`