import { Container } from "../components/styled/Container";

export const Favorites = ({favorites}) => {
    return (
        <Container>
            {favorites.map(character => <h3 key={character.id}>{character.name}</h3>)}
        </Container>
    )
}