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
        case 'p_car':
            reState.loading = false;
            reState.p_car = action.dataset[0];
            break;
        case 'p_addcar':
            reState.loading = false;
            reState.p_addcar = action.dataset[0];
            break;    
        case 'p-cakeCookies':
            reState.loading = false;
            reState.cake_cookies = action.dataset[0];
            break;
        default:
            reState.loading = false;
    }
    return reState ;
   
}