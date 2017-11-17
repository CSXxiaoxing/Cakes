export default function loginReducer(state = {}, action){
    var reState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'BeforeRequest':
            reState.loading = true;
            break;
        case 'DategridRequested':
            reState.loading = false;
            reState.dataset = action.dataset;
            break;
        case 'PersonalRequested':
            reState.loading = false;
            reState.personal = action.dataset[0];
            break;
        default:
            reState.loading = false;
    }
    return reState ;
}