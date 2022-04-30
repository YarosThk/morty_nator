import styled, {keyframes} from "styled-components";

const spinAnimation = keyframes`
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
`


export const LoaderWrapper = styled.div`
    width: 100px;
    display: flex;
    align-items: center;
    border: 1px black;
    animation-name: ${spinAnimation};
    animation-duration: 800ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear; 
`

export const LoaderLogo = styled.img`
    width:100%;
`

