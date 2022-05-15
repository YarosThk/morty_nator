//page 42 is the limit
export async function requestAllCharacters(page){
    const query = `https://rickandmortyapi.com/api/character/?page=${page}`
    try{
        console.log(query)
        let request = await fetch(query)
        return await request.json()
    }catch(err){
        return err
    }
}

export async function filterCharacters(page, filter){
    const {name, status} = filter
    const query = `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}&status=${status}`
    console.log(query)
    try {
        let request = await fetch(query)
        return await request.json()
    } catch (err) {
        return err
    }
}
