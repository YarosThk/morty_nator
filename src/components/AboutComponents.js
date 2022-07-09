import { AboutBannerWrapper, BannerImage, BannerHeaderText, Paragraph, ParagraphTitle, ParagraphContent } from "./styled/AboutComponent.styled.js"
import { } from "./styled/Navbar.styled";
import aboutBanner from "../images/about_banner.png"


export const AboutHeader = () => {
    return (
        <AboutBannerWrapper>
            <BannerImage src={aboutBanner} />
            <BannerHeaderText>
                <h1 style={{
                    fontSize: "5rem",
                    marginBottom: "3rem",
                }} > The Rick and Morty API</h1>
            </BannerHeaderText>
        </AboutBannerWrapper>
    )
}

export const AboutTextComponent = ({title, content, link}) => {
    return (
        <Paragraph>
            <ParagraphTitle>{title}</ParagraphTitle>
            <ParagraphContent>
                {content}
            </ParagraphContent>
        </Paragraph>
    )
}