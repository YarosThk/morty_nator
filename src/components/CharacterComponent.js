import { CharacterContainer, ImageWrapper, Image, InfoWrapper, InfoSection, InfoSectionTitle, InfoSectionText, LikeButton } from "./styled/CharacterCard.styled.js"
import { FaRegHeart } from "react-icons/fa";
import { useState, useEffect } from "react";


export const CharacterComponent = ({character, updateFavoritesList, inFavoritesCheck}) => {
    const [inFavorites, setInFavorites] = useState(false)
    const [clicked, setClicked] = useState(false)

    const handleClick = ()=>{
        clicked ? setClicked(false) : setClicked(true)
        updateFavoritesList(character)
    }

    useEffect(() => {
        setInFavorites(inFavoritesCheck(character))
    }, [character, inFavoritesCheck])
    
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
                <LikeButton inFavorites={inFavorites} clicked={clicked} ><FaRegHeart /></LikeButton>
            </InfoWrapper>
        </CharacterContainer>
    )
}


 