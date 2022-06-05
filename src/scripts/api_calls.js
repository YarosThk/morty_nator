export async function filterCharacters(filter){
    const {page, name, status} = filter
    const query = `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}&status=${status}`
    console.log(query)
    try {
        let request = await fetch(query)
        return await request.json()
    } catch (err) {
        return err
    }
}
