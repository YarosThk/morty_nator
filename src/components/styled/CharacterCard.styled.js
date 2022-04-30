import styled, {keyframes, css} from "styled-components"

export const CharactersWrapper = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
    } 

`
export const CharacterContainer = styled.div`
    min-width: 400px;
    display: flex;
    border-radius: 15px;
    margin-bottom: 10px;

    @media screen and (max-width: 500px) {
        min-width: 100%;
        flex-direction: column;
    } 
`
export const InfoWrapper = styled.div`
    width: 100%;
    padding-left: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: cadetblue;
    border-radius: 0 15px 15px 0;

    @media screen and (max-width: 500px) {
        border-radius: 0 0 15px 15px;
        object-fit: cover;
    } 
`

export const InfoSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
`

export const InfoSectionTitle = styled.span`
    color: gainsboro;
    font-size: 16px;
`

export const InfoSectionText = styled.span.attrs(props => ({
    size: props.size || "18px",
}))`
    color: snow;
    font-size: ${props => props.size};;
`


export const ImageWrapper = styled.div`
    width: 40%;
    border-radius: 15px 0 0 15px;

    @media screen and (max-width: 500px) {
        border-radius: 15px 15px 0 0;
        width: 100%;
        height: 300px;
    } 
`

export const Image = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 15px 0 0 15px;
    
    @media screen and (max-width: 500px) {
        border-radius: 15px 15px 0 0;
        object-fit: cover;
    } 
`
const GrowShrink = keyframes`
    0%{
        transform: scale(1)
    }
    50%{
        transform: scale(1.18)
    }
    100%{
        transform: scale(1)
    }
`

export const LikeButton = styled.button`
    width:30px;
    height: 30px;
    background-color: ${({inFavorites}) => inFavorites ? "red" : "ghostwhite"};
    transition: all 0.4s;
    animation: ${({ clicked }) => clicked &&
                    css`${GrowShrink} 0.12s linear 1`};
    color: ${({ inFavorites }) => inFavorites ? "white" : "black"};
`