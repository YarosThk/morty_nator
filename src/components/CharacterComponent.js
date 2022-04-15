import { CharacterContainer, ImageWrapper, Image, InfoWrapper, InfoSection, InfoSectionTitle, InfoSectionText } from "./styled/CharacterCard.styled.js"



export const CharacterComponent = ({character}) => {

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
            </InfoWrapper>
        </CharacterContainer>
    )
}


