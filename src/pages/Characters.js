import { filterCharacters } from "../scripts/api_calls"
import { Container } from "../components/styled/Container";
import { CharacterComponent } from "../components/CharacterComponent";
import { FilterComponent } from "../components/FilterComponent";
import { CharactersWrapper } from "../components/styled/CharacterCard.styled"
import { PaginationWrapper, CurrentPage, PaginationButton } from "../components/styled/PaginationStyled"
import { Loader } from "../components/Loader";
import { useState, useEffect} from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";


export const Characters = ({ updateFavoritesList, inFavoritesCheck}) => {
    const [charactersList, setCharacterList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const [lastPage, setLastPage] = useState(null)
    const [searchField, setSearchField] = useState("")
    const [filter, setFilter] = useState(
        {name: "",
            status: "",
            gender: "",
            species: "",
            type:"",
            page: 1
        })

    const nextPage = () => {
        if(filter.page !== lastPage){
            let newPage = filter.page + 1
            setFilter({ ...filter, page: newPage })
        }

    }
    
    const previousPage = () => {
        if(filter.page !== 1){
            let newPage = filter.page - 1
            setFilter({ ...filter, page: newPage })
        }
    }

    const handleInput = (e) => {
        setSearchField(e.target.value)
    }

    const applyFilter = () => {
        setFilter({ ...filter, name: searchField, page: 1 })
    }

    const resetFilter = () => {
        setFilter({
            name: "",
            status: "",
            gender: "",
            species: "",
            type: "",
            page: 1
        })
        setSearchField("")
    }
    
    useEffect(() => {
        let mounted = true
        setError(false)
        setIsLoading(true)
        let request = filterCharacters(filter)
        request.then(res => {
            if (mounted) {
                setLastPage(res.info.pages)
                setCharacterList(res.results)
                setTimeout(() => setIsLoading(false), 500)
            }
        }).catch(err => {
            setError(true)
            setIsLoading(false)
        })

        return () => { mounted = false } //to avoid memory leaks when component is unmounted before we could bring api data, read on that
    }, [filter])


    if(isLoading){
        return (
            <Container>
                <Loader/>
            </Container>
        )
    }else if(error){
        return(
            <Container>
                <button onClick={resetFilter}>Reset filter</button>
                <h1>Something went wrong, try again later.</h1>
            </Container>
        )
    }
    if(!charactersList){
        return(
            <Container>
                <button onClick={resetFilter}>Reset filter</button>
                <h1>Result returned no data.</h1>
            </Container>
        )
    }else{
        return (
            <Container>
                <FilterComponent searchField={searchField} handleInput={handleInput} applyFilter={applyFilter} resetFilter={resetFilter}/>
                <CharactersWrapper>
                    {charactersList.map(character => <CharacterComponent key={character.id} character={character} inFavoritesCheck={inFavoritesCheck} updateFavoritesList={updateFavoritesList} />)}
                </CharactersWrapper>
                <PaginationWrapper>
                    <PaginationButton onClick={previousPage}><FaAngleLeft /></PaginationButton>
                    <CurrentPage>{filter.page}</CurrentPage>
                    <PaginationButton onClick={nextPage}><FaAngleRight /></PaginationButton>
                </PaginationWrapper>
            </Container>
            )
        }
    }