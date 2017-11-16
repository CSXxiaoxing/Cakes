export function Init(){
    return {
        types: ['BeforeRequest', 'Requested', 'RequestError'],
        url: 'http://localhost:88/home'
    }
}

export function Edit(){
    return {
        types: ['a']
    }
}