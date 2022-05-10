import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin-top: 4rem;
    padding: 0 3rem 0 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 300px) {
        padding: 0.5rem;
    } 
`