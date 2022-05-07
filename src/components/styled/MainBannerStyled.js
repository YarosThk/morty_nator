import styled from "styled-components"


export const MainBannerWrapper = styled.div`
    width: 100%;
    margin-bottom: 8rem;
    display:flex;
    justify-content: center;

    @media screen and (max-width: 850px){
        flex-direction:column;
        align-items: center;
    }
`
export const BannerIntroText = styled.div`
    padding: 1.3rem;

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
    max-width: 40rem;
    height: auto;
    box-shadow: 0px 0px 25px 6px rgba(0,0,0,0.68);
`