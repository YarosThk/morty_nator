import { CharacterContainer, ImageWrapper, Image, InfoWrapper, InfoSection, InfoSectionTitle, InfoSectionText, LikeButton } from "./styled/CharacterCard.styled.js"
import { FaRegHeart } from "react-icons/fa";



export const CharacterComponent = ({character, updateFavoritesList, inFavorites}) => {
    const handleClick = ()=>{
        updateFavoritesList(character)
    }
    return(
        <CharacterContainer>
            <ImageWrapper><Image src={character.image} alt="" srcset="" /></ImageWrapper>
            <InfoWrapper>
                <InfoSection>
                    <InfoSectionText size="25px">{character.name}</InfoSectionText>
                    <InfoSectionText>{character.status}</InfoSectionText>
                </InfoSection>
                <InfoSection>
                    <InfoSectionTitle>Location:</InfoSectionTitle>
                    <InfoSectionText >{character.location.name}</InfoSectionText>
                </InfoSection>
                {/* <button onClick={handleClick}><FaRegHeart/></button> */}
                <LikeButton inFavorites={inFavorites} onClick={handleClick}><FaRegHeart /></LikeButton>
            </InfoWrapper>
        </CharacterContainer>
    )
}


