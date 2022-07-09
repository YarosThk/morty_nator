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
                }} >Rick y Morty (Rick and Morty en Estados Unidos) es una serie de televisión animada estadounidense creada por Justin Roiland y 
                    Dan Harmon que se estrenó el 2 de diciembre de 2013 en el bloque de programación Adult Swim de Cartoon Network.
                    <br/>
                    <br/>
                    Primera Temporada del programa consta de 11 episodios de veintidós minutos. Después de emitir los primeros seis episodios, Adult Swim renovó el programa para una Segunda Temporada, 
                    que consta de 10 episodios de veintidós minutos.
                    El programa se renovó por una Tercera Temporada, que consta de 10 episodios de veintidós minutos que se emitieron en el verano de 2017. A partir del otoño de 2019, Rick y Morty 
                    regresaron con una Cuarta Temporada transmitiendo diez episodios.
                    <br/>
                    <br/>
                    El programa se basó en una serie de cortometrajes crudamente animados para Channel 101 basados en una parodia de Volver al Futuro Las Verdaderas Aventuras Animadas de Doc y Mharti de Justin Roiland.</p>
                <Button onClick = {() => navigate("/characters")}>Explore</Button>
            </BannerIntroText>
            <BannerImage src={homeImage}/>
        </MainBannerWrapper>
    )
}