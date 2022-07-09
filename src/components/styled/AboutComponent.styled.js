import styled from "styled-components"


export const AboutBannerWrapper = styled.div`
    width: 100%;
    margin-bottom: 8rem;
    display:flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 850px){
        align-items: center;
    }
`
export const BannerHeaderText = styled.div`
    padding: 0.5rem;
    text-align: center;

    @media screen and (max-width: 600px){
        flex-direction:column;
        align-items: center;
        margin-bottom: 1.5rem;
    }
    p{
        color: ${({ theme }) => theme.colors.fontColor.lightText};
    }
`

export const BannerImage = styled.img`
    width: 50%;
    min-width: 35rem;

    @media screen and (max-width: 850px){
        margin-top: 3rem;
    }
`

export const ParagraphWrapper = styled.div`
    ${'' /* width: 100%;
    margin-top: 4rem;*/}
    padding: 0 8rem 0 8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;

    @media screen and (max-width: 800px) {
        padding: 0.5rem;
    } 
`

export const Paragraph = styled.div`
    margin-bottom: 5rem; 

`

export const ParagraphTitle = styled.h2`
    margin-bottom: 1rem;
    font-size: 2.5rem;
`

export const ParagraphContent = styled.p`
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.fontColor.lightText}

`   