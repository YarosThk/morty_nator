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
    padding: 1rem;

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
