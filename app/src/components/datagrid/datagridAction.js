export function Init(cakeType){
    var URL = {
        'cake' : '蛋糕',
        'small' : '蛋糕  ',
        'ice' : '蛋糕',
        'flower' : '蛋糕',
        'gift' : '蛋糕',
        'recommend' : '蛋糕'
    };
    var DATAselect = URL.cakeType || '蛋糕';
    return {
        types: ['BeforeRequest', 'DategridRequested', 'RequestError'],
        method : "post",
        url : 'Datagrid.php',
        data: {
            select:  `select * from goods_list where gClass='${DATAselect}'` 
        }
    }
}

export function Edit(){
    return {
        types: ['b']
    }
}