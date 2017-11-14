export function Init(){
    return {
        types: ['BeforeRequest', 'Requested', 'RequestError'],
        url: 'http://localhost:666/select',
        method : "post"
    }
}

export function Edit(){
    return {
        types: ['a']
    }
}