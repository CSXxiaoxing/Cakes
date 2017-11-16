export function Init(){
    return {
        types: ['BeforeRequest', 'TC_Requested', 'RequestError'],
        url: 'Datagrid.php',
        method : "post",
        data: {
            select:  `select * from cake_car` 
        }
    }
}

export function T_add(api,sql){
    return {
        types: ['BeforeRequest', 'TC-Requested', 'RequestError'],
        url: api,
        data:{
            select:sql
        }
    }
}

export function Edit(){
    return {
        types: ['a']
    }
}