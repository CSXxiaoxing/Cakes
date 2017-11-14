import http from '../utils/HttpClient';

export function ajaxMiddleware(middlewareAPI) {
    return function(dispatch){
        return function(action){
            const {types, method = "post", url, data} = action;

            if (!url || !method) {
                return dispatch(action)
            }
        //    if(!types)
            const [a, b, c] = types;

            middlewareAPI.dispatch({
                type: a,
            });
            if(url){
                console.log(data)
                http[method](url,action.data).then(response => {
                    console.log(response)
                    middlewareAPI.dispatch({
                        type: 'Requested',
                        dataset: response

                    });
                })
            }
        }
    }
}