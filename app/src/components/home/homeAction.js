export function Init(){
    return {
        types: ['BeforeRequest', 'T_Requested', 'RequestError'],
        method : "post",
        url: 'Datagrid.php',
        data: {
            select:  `select * from goodslist where gTag='人气' ; 
            select * from goodslist where gTag='新品' ; select * from goodslist where gTag='推荐' ; select * from goodslist where gTag='轮播'` 
        }
    }
}

export function Edit(){
    return {
        types: ['a']
    }
}