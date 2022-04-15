const base_url = "https://rickandmortyapi.com/api/character/?page=1"


export async function requestData(){
    try{
        let request = await fetch(base_url)
        return await request.json()
    }catch(err){
        return err
    }
}

// let data = requestData()

// data.then(res =>console.log("then clause: ", res))
//     .catch(err => console.log("catch clause: ", err))
//     .finally(() => console.log("runs regardless"))
