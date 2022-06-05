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
    border: none;
    font-size: 5rem;
    background: transparent(100)

    &:hover{
        cursor: pointer;
    }
`