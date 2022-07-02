import styled from "styled-components"

export const PaginationWrapper = styled.div`
    width: 200px;
    margin: 5rem 0rem 10rem 0rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
export const CurrentPage = styled.p`
    font-size: 3rem;

`
export const PaginationButton = styled.button`
    width:5rem;
    height:5rem;
    border: 1px solid black;
    border-radius: 50%;
    font-size: 3rem;

    &:hover{
        cursor: pointer;
    }
`