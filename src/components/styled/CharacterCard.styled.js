import styled from "styled-components"

export const CharactersWrapper = styled.div`
    margin-top: 100px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;

`
export const CharacterContainer = styled.div`
    ${'' /* max-width: 1000px; */}
    min-width: 500px;
    ${'' /* width: 100%; */}
    display: flex;
    border-radius: 15px;
    margin-bottom: 40px;
    background-color: silver;
    border-radius: 15px;

    @media screen and (max-width: 600px) {
        width: 80%;
        min-width: 300px;
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

    @media screen and (max-width: 600px) {
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

    @media screen and (max-width: 600px) {
        border-radius: 15px 15px 0 0;
        width: 100%;
        height: 300px;
    } 
`

export const Image = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 15px 0 0 15px;
    
    @media screen and (max-width: 600px) {
        border-radius: 15px 15px 0 0;
        object-fit: cover;
    } 
`

export const LikeButton = styled.button`
    background-color: ${({inFavorites}) => inFavorites ? "red" : "green"};
    color: white;

`


