export default function personalReducer(state = {}, action){
    var reState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'pe-BeforeRequest':
            reState.loading = true;
            break;
        case 'pe-Requested':
            reState.loading = false;
            reState.dataset = action.Dataset
            break;
        default:
            reState.loading = false;
    }
    return reState ;
}