export function Init(){
    return {
        types: ['BeforeRequest', 'Requested', 'RequestError'],
        url: 'http://localhost:88/home'
    }
}



export function Find(api,sql){
    return {
        types: ['BeforeRequest', 'order-Requested', 'RequestError'],
        url: api,
        data:{
        	select:sql
        }
    }
}
export function init(api,sql){
    return {
        types: ['BeforeRequest', 'order-login', 'RequestError'],
        url: api,
        data:{
        	select:sql
        }
    }
}