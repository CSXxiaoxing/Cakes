export default function StudentReducer(state = {}, action){
    var reState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'BeforeRequest':
            reState.loading = true;
            break;
        case 'TC_Requested':
            reState.loading = false;
            reState.dataset = action.dataset;
            break;
        case 'TR_Requested':
            reState.loading = false;
            reState.dataset = action.dataset;
            break;
        case 'TK_Requested':
            reState.loading = false;
            if(!action.dataset){
                break;
            }
            reState.dataset = action.dataset;
            break;
        case 'TD_Requested':
            reState.loading = false;
            reState.dataset = action.dataset;
            break;
        default:
            reState.loading = false;
    }
    return reState ;
}