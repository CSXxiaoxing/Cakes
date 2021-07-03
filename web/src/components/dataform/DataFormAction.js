export function Init(sql){
    return {
        types: ['BeforeRequest', 'Requested', 'RequestError'],
        url: 'Datagrid.php',
        data:{
        	select:sql
        }
    }
}

export function Edit(editData){
    return {
        types: ['edit'],
        data:editData
    }
}
export function Add(){
    return {
        type: 'add',
    }
}

export function GetClass(sql){
    return {
        types: ['BeforeRequest', 'ClassReceived', 'RequestError'],
        url: 'Datagrid.php',
        data:{
            select:sql
        }
    }
}

export function Save(sql){

    return {
        types: ['BeforeRequest', 'SaveData', 'RequestError'],
        url: 'Datagrid.php',
        data:{
            else:sql
        }
    }
}
export function Upload(fd){

    return {
        types: ['BeforeRequest', 'Upload', 'RequestError'],
        url: 'doAction.php',
        data:fd
    }
}