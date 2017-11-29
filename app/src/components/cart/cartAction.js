export function Init(sql){
    return {
        types: ['BeforeRequest', 'TC_Requested', 'RequestError'],
        url: 'Datagrid.php',
        method : "post",
        data: {
            select: sql
        }
    }
}

export function select(sql){
    return {
        types: ['BeforeRequest', 'TS_Requested', 'RequestError'],
        url: 'Datagrid.php',
        data:{
            select:sql
        }
    }
}
export function t_delete(sql){
    return {
        types: ['BeforeRequest', 'TE_Requested', 'RequestError'],
        url: 'Datagrid.php',
        data:{
            select:sql
        }
    }
}

export function T_select(api,sql){
    return {
        types: ['BeforeRequest', 'TR_Requested', 'RequestError'],
        url: api,
        data:{
            select:sql
        }
    }
}

export function T_Tadd(api,sql){
    return {
        types: ['BeforeRequest', 'TK_Requested', 'RequestError'],
        url: api,
        data:{
            else:sql
        }
    }
}
export function T_updata(api,sql){
    return {
        types: ['BeforeRequest', 'TD_Requested', 'RequestError'],
        url: api,
        data:{
            else:sql
        }
    }
}

export function Edit(){
    return {
        types: ['a']
    }
}


