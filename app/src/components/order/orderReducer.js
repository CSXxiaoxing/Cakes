export default function StudentReducer(state = {}, action){
    var reState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'BeforeRequest':
            reState.loading = true;
            break;
        case 'p-Requested':
            reState.loading = false;
            reState.dataset = action.dataset[0][0];
            break;        
        default:
            reState.loading = false;
    }
    return reState ;
   
}