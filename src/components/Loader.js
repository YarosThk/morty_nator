import { LoaderWrapper, LoaderLogo } from "./styled/LoaderStyled"
import loadingImage from "../images/rick_and_morty_loader.png"

export const Loader = () => {

    return(
        <LoaderWrapper>
            <LoaderLogo src={loadingImage}/>
        </LoaderWrapper>

    )
}