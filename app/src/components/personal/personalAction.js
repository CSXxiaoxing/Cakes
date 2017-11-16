export function init(api,sql){
    return {
        types: ['pe-BeforeRequest', 'pe-Requested', 'RequestError'],
        url: api,
        data:{
            select:sql
        }
    }
}
export function Get(api,sql){
    return {
        types: ['ge-BeforeRequest', 'ge-Requested', 'RequestError'],
        url: api,
        data:{
            select:sql
        }
    }
}