import http from '../utils/HttpClient';

export function ajaxMiddleware(middlewareAPI) {
    return function(dispatch){
        return function(action){
            const {types, method = "get", url, data} = action;

            if (!url || !method) {
                return dispatch(action)
            }
        //    if(!types)
            const [a, b, c] = types;

            middlewareAPI.dispatch({
                type: a,
            });
            // if(url) {
            //     return new Promise((resolve, reject) => {
            //         http[method](url).then(response => {
            //             middlewareAPI.dispatch({
            //                 type: 'REQUESTED',
            //                 dataset: JSON.parse(response)
            //             });
            //             resolve(response);
            //         })                    
            //     })
            // }
            if(url){
                http[method](url,action.data).then(response => {
                    middlewareAPI.dispatch({
                        type: b,
                        dataset: response

                    });
                })
            }
        }
    }
}