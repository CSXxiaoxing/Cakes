export function Edit(editData){
    console.log(editData)
    return {
        types: ['edit'],
        data:editData
    }
}