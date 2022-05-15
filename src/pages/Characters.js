import { requestAllCharacters, filterCharacters } from "../scripts/api_calls"
import { Container } from "../components/styled/Container";
import { CharacterComponent } from "../components/CharacterComponent";
import { Pagination } from "../components/Pagination";
import { CharactersWrapper } from "../components/styled/CharacterCard.styled"
import { Loader } from "../components/Loader";
import { useState, useEffect} from "react";

const WAIT_INTERVAL = 1000

export const Characters = ({ updateFavoritesList, inFavoritesCheck}) => {
    const [charactersList, setCharacterList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const [page, setPage] = useState(1)
    const [filter, setFilter] = useState(
        {name: "",
            status: "",
            gender: "",
            species: "",
            type:""
        })
    let timer = null


    const nextPage = () => {
        if(!page === 42){
            setPage(page + 1)
        }
    }
    
    const previousPage = () => {
        if(!page === 1){
            setPage(page - 1)
        }
    }

    const handleInput = (e) => {
        console.log(e.target.value)
    }

    const triggerChange = (newValue) => {
        // clearTimeout(timer);
        // timer = setTimeout(() => setFilter({ ...filter, name: newValue }), WAIT_INTERVAL);
    }

    
    useEffect(() => {
        let mounted = true
        setIsLoading(true)
        let request = filterCharacters(page, filter)
        request.then(res => {
            if (mounted) {
                setCharacterList(res.results)
                setTimeout(() => setIsLoading(false), 500)
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
            <input type="text" value={filter.name} onChange={handleInput}/>
            <CharactersWrapper>
                {charactersList.map(character => <CharacterComponent key={character.id} character={character} inFavoritesCheck={inFavoritesCheck} updateFavoritesList={updateFavoritesList} />)}
            </CharactersWrapper>
            <Pagination currentPage={page} nextPage={nextPage} previousPage={previousPage}/>
        </Container>
        )
}