export default function loginReducer(state = {}, action){
    var reState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'lo-BeforeRequest':
            reState.loading = true;
            break;
        case 'lo-Requested':
            reState.loading = false;
            reState.dataset = action.Dataset
            break;
        case 'to-BeforeRequest':
            reState.loading = true;
            break;
        case 'to-Requested':
            reState.loading = false;
            reState.dataset = action.Dataset
            break;
        case 'Clear':
            reState.loading = false;
            reState.dataset = {};
            break;
        default:
            reState.loading = false;
    }
    return reState ;
}