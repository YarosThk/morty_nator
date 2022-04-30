import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from "./pages/Home"
import { Characters } from "./pages/Characters"
import { Favorites } from "./pages/Favorites"
import { useState } from 'react';


function App() {
  const [favoritesList, setFavoritesList] = useState([])

  const addToFavorites = (newCharacter) => {
    setFavoritesList([...favoritesList, newCharacter])
  }

  const removeFromFavorites = (newCharacter) => {
    setFavoritesList(
      favoritesList.filter(obj => obj.id !== newCharacter.id)
    )
  }

  const updateFavoritesList = (newCharacter) =>{
    if (favoritesList.some(char => char.id === newCharacter.id)){
      removeFromFavorites(newCharacter)
    }else{
      addToFavorites(newCharacter)
    }
  }

  const inFavoritesCheck = (charToCheck) => {
    if (favoritesList.some(char => char.id === charToCheck.id)) {
      return true
    } else {
      return false
    }
  }

  return (
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="characters" element={<Characters updateFavoritesList={updateFavoritesList} inFavoritesCheck={inFavoritesCheck}/>} />
            <Route path="favorites" element={<Favorites favorites = {favoritesList}/>} />
          </Routes>
        </BrowserRouter>
  );
}

export default App;
