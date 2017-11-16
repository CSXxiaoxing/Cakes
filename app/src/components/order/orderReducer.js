export default function StudentReducer(state = {}, action){
    var reState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'BeforeRequest':
            reState.loading = true;
            break;
        case 'order-Requested':
            reState.loading = false;
            reState.dataset = action.dataset[0];
            break;  
        case 'order-login':
            reState.loading = false;
            reState.data = action.dataset; 
            break;
        default:
            reState.loading = false;
    }
    return reState ;
   
}