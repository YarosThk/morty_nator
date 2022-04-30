import {requestData} from "../scripts/api_calls"
import { Container } from "../components/styled/Container";
import { CharacterComponent } from "../components/CharacterComponent";
import { CharactersWrapper } from "../components/styled/CharacterCard.styled"
import { Loader } from "../components/Loader";
import { useState, useEffect} from "react";


export const Characters = ({ updateFavoritesList, inFavoritesCheck}) => {
    const [charactersList, setCharacterList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    
    useEffect(() => {
        let mounted = true
        setIsLoading(true)
        let request = requestData()
        request.then(res => {
            if(mounted){
                setCharacterList(res.results)
                setTimeout(()=>setIsLoading(false),1100)
            }
        }).catch(err => {
            console.log(err)
            setError(true)
        })

        return () => { mounted = false } //to avoid memory leaks when component is unmounted before we could bring api data, read on that
    }, [])
    
    if(isLoading){
        return (
            <Container>
                <Loader/>
            </Container>
        )
    }else if(error){
        return(
            <Container>
                <h1>Something went wrong, try again later.</h1>
            </Container>
        )
    }
    
    return (
        <Container>
            <CharactersWrapper>
                {charactersList.map(character => <CharacterComponent key={character.id} character={character} inFavoritesCheck={inFavoritesCheck} updateFavoritesList={updateFavoritesList} />)}
            </CharactersWrapper>
        </Container>
        )
        
}