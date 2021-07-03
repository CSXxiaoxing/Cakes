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
            if(url) {
                return new Promise((resolve, reject) => {
                    http[method](url,action.data).then(response => {
                        middlewareAPI.dispatch({
                            type: b,
                            dataset: JSON.parse(response),
                            Dataset:response

                        });
                        resolve(JSON.parse(response));
                    })                    
                })
            }

        }
    }
}