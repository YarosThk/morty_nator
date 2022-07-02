import styled from "styled-components"



export const FilterWrapper = styled.div`
    width: 100%;
    height: 30rem;
    display: flex;
    justify-content: center;
    background-color: rgb(39, 45, 58);
`

export const InnerWrapper = styled.div`
    min-width: 30rem;
    width: 100%;
    display:flex;
    justify-content:center;
    align-items: center;

    @media screen and (max-width: 600px){
        flex-direction: column;
        align-items:center;
    }
`

export const TextInputField = styled.input`
    max-width: 34rem;
    width: 80%;
    height: 5rem;
    font-size: 2.2rem;
    margin-right: 1.5rem;
    padding-left: 0.5rem;

    @media screen and (max-width: 600px){
        margin-right: 0rem;
    }

    @media screen and (max-width: 480px){
        font-size: 1.6rem;
    }
    
    @media screen and (max-width: 340px){
        font-size: 1.4rem;
    }

`
export const ControlsWrapper = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;

    @media screen and (max-width: 600px){
        margin-top: 0.5rem;
    }
`