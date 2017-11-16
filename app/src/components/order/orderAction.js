export function Init(){
    return {
        types: ['BeforeRequest', 'Requested', 'RequestError'],
        url: 'http://localhost:88/home'
    }
}



export function Find(api,sql){
    return {
        types: ['BeforeRequest', 'p-Requested', 'RequestError'],
        url: api,
        data:{
        	select:sql
        }
    }
}