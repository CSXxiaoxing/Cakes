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
                http[method](url).then(response => {
                    middlewareAPI.dispatch({
                        type: 'Requested',
                        dataset: response
                    });
                })
            }
        }
    }
}