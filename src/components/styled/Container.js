import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 300px) {
        padding: 0.5rem;
    } 
`