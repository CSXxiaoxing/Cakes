export default function registerReducer(state = {}, action){
    var reState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 're-BeforeRequest':
            reState.loading = true;
            break;
        case 're-Requested':
            reState.loading = false;
            reState.dataset = action.Dataset;
            break;
        case 'Re-BeforeRequest':
            reState.loading = true;
            break;
        case 'Re-Requested':
            reState.loading = false;
            reState.dataset = action.Dataset
            break;
        case 'clear':
            reState.loading = false;
            reState.dataset = {};
            break;
        default:
            reState.loading = false;
    }
    return reState ;
}