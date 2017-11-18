export default function DataFormReducer(state = {}, action){
    var reState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'BeforeRequest':
            reState.loading = true;
            break;
        case 'Requested':
            reState.loading = false;
            reState.dataset = action.dataset;
            break;
        case 'ClassReceived':
            reState.loading = false;
            reState.Class = action.dataset[0];
            break;
        case 'SaveData':
            reState.loading = false;
            reState.Save = action.dataset;
            break;
        case 'Upload':
            reState.loading = false;
            reState.Upload = action.dataset;
            break;
        case 'add':
        console.log(33333);
            reState.addStatus = true;
            break;
        default:
            reState.Save = '';
            reState.loading = false;
    }
    return reState ;
}