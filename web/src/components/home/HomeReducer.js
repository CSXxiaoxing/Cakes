export default function HomeReducer(state = {}, action){
    var reState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'BeforeRequest':
            reState.loading = true;
            break;
        case 'Requested':
            reState.loading = false;
            if(action.dataset !== true && action.dataset !==false){
                reState.dataset = action.dataset[1];
                reState.pagination = action.dataset[0][0];
            }
            break;
        case 'edit':
        console.log(121212);
            reState.editData = action.data;
            break;
        default:
            reState.loading = false;
    }
    return reState ;
}