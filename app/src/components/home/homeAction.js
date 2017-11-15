export function Init(){
    return {
        types: ['BeforeRequest', 'T_Requested', 'RequestError'],
        method : "post",
        url: 'Datagrid.php',
        data: {
            select:  `select * from goods_list where gTag='人气' ; 
            select * from goods_list where gTag='新品' ; select * from goods_list where gTag='推荐'` 
        }
    }
}

export function Edit(){
    return {
        types: ['a']
    }
}