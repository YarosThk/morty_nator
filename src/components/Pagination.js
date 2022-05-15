import styled from "styled-components"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export const Pagination = ({currentPage, nextPage, previousPage}) => {

    const handlePreviousClick = () => {
        previousPage()
    }
    const handleNextClick = () => {
        nextPage()
    }

    return(
        <PaginationWrapper>
            <PaginationButton onClick={handlePreviousClick}><FaAngleLeft/></PaginationButton>
            <CurrentPage>{currentPage}</CurrentPage>
            <PaginationButton onClick={handleNextClick}><FaAngleRight/></PaginationButton>
        </PaginationWrapper>
    )
}

const PaginationWrapper = styled.div`
    width: 200px;
    margin: 5rem 0rem 10rem 0rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
const CurrentPage = styled.p`
    font-size: 3rem;

`
const PaginationButton = styled.button`
    border: none;
    font-size: 5rem;
    background: transparent(100)

    &:hover{
        cursor: pointer;
    }
`