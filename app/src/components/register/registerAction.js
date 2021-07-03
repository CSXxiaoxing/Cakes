export function Init(api,sql){
    return {
        types: ['re-BeforeRequest', 're-Requested', 'RequestError'],
        url: api,
        data:{
            else:sql
        }
    }
}

export function Select(api,sql){
    return {
        types: ['Re-BeforeRequest', 'Re-Requested', 'RequestError'],
        url: api,
        data:{
            select:sql
        }
    }
}
export function Clear(){
    return {
        type:'clear'
    }
}