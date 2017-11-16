export function Init(api,sql){
    return {
        types: ['BeforeRequest', 'Requested', 'RequestError'],
        url: api,
        data:{
            else:sql
        }
    }
}

export function Select(api,sql){
    return {
        types: ['BeforeRequest', 'Requested', 'RequestError'],
        url: api,
        data:{
            select:sql
        }
    }
}