import { MainBannerWrapper, BannerImage, BannerIntroText } from "./styled/MainBannerStyled"
import { Button } from "./Buttons"
import { useNavigate } from "react-router-dom"
import { } from "./styled/Navbar.styled";
import homeImage from "../images/banner_image.jpeg"

export const MainBanner = () => {
    const navigate = useNavigate()

    return(
        <MainBannerWrapper>
            <BannerIntroText>
                <h1 style={{
                    fontSize: "5rem",
                    marginBottom: "3rem",
                }} >All Rick and Morty trivia</h1>
                <p style={{
                    fontSize: "2rem",
                    lineHeight: "3rem",
                }} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum</p>
                <Button onClick = {() => navigate("/characters")}>Explore</Button>
            </BannerIntroText>
            <BannerImage src={homeImage}/>
        </MainBannerWrapper>
    )
}