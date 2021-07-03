export function Find(api,sql){
    return {
        types: ['lo-BeforeRequest', 'lo-Requested', 'RequestError'],
        url: api,
        data:{
            select:sql
        }
    }
}

export function clear(){
    return {
        type:'Clear'
    }
}

export function Token(api,obj){
    return {
        types: ['to-BeforeRequest', 'to-Requested', 'RequestError'],
        url: api,
        data:obj
    }
}