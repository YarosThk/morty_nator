//page 42 is the limit
export async function requestAllCharacters(page){
    let base_url = `https://rickandmortyapi.com/api/character/?page=${page}`
    try{
        let request = await fetch(base_url)
        return await request.json()
    }catch(err){
        return err
    }
}
