import { requestAllCharacters } from "../scripts/api_calls"
import { Container } from "../components/styled/Container";
import { CharacterComponent } from "../components/CharacterComponent";
import { CharactersWrapper } from "../components/styled/CharacterCard.styled"
import { Loader } from "../components/Loader";
import { useState, useEffect} from "react";


export const Characters = ({ updateFavoritesList, inFavoritesCheck}) => {
    const [charactersList, setCharacterList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const [page, setPage] = useState(1)

    const nextPage = () => {
        if(page === 42){
            return null    
        }else{
            setPage(page+1)
        }
    }

    const previousPage = () => {
        if (page === 0){
            return null
        }else{
            setPage(page-1)
        }
    }

    
    useEffect(() => {
        let mounted = true
        setIsLoading(true)
        let request = requestAllCharacters(page)
        request.then(res => {
            if(mounted){
                setCharacterList(res.results)
                setTimeout(()=>setIsLoading(false),500)
            }
        }).catch(err => {
            console.log(err)
            setError(true)
        })

        return () => { mounted = false } //to avoid memory leaks when component is unmounted before we could bring api data, read on that
    }, [page])
    
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

            <div style={{
                display: "flex",
                justifyContent: "space-between",
                width: "200px"
            }}>
                <button onClick={previousPage}>Previous</button>
                {page}
                <button onClick={nextPage}>Next</button>
            </div>
        </Container>
        )
}