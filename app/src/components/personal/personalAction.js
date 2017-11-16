export function init(api,sql){
    return {
        types: ['pe-BeforeRequest', 'pe-Requested', 'RequestError'],
        url: api,
        data:{
            select:sql
        }
    }
}
