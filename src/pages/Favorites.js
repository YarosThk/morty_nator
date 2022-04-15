import { Container } from "../components/styled/Container";
import { useState } from "react";

export const Favorites = () => {
    const [favoritesList, setFavoritesList] = useState([])

    const addFavorites = (character) => {

    }
    return (
        <Container>
            <h1>Your favorite characters </h1>
            <p>Kind of like a basket of your favorite characters.</p>
        </Container>
    )
}