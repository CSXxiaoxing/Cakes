export function Find(name){
    return {
        types: ['BeforeRequest', 'DategridRequested', 'RequestError'],
        method : "post",
        url : 'Datagrid.php',
        data: {
            select:  `select * from admin_list where username='${name}'` 
        }
    }
}

export function Token(api,obj){
    return {
        types: ['BeforeRequest', 'DategridRequested', 'RequestError'],
        url: api,
        data:obj
    }
}

export function PersonalInformation(sql){
    return {
        types: ['BeforeRequest', 'PersonalRequested', 'RequestError'],
        url: 'datagrid.php',
        data:{
            select:sql
        }
    }
}

