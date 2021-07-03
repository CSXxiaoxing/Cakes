import http from '../utils/HttpClient';

export function ajaxMiddleware(middlewareAPI) {
    return function(dispatch){
        return function(action){
            const {types, method = "post", url, data} = action;
            if (!url || !method) {
                return dispatch(action)
            }
            //   if(!types)
            const [a, b, c] = types;
            middlewareAPI.dispatch({
                type: a,
                data:data
            });
            if(url){
                return new Promise((resolve, reject) => {
                    http[method](url, data).then(response => {
                        middlewareAPI.dispatch({
                            type: b,
                            dataset: response
                        });
                        resolve(response);
                        })                    
                    })

                // http[method](url, data).then(response => {
                //     middlewareAPI.dispatch({
                //         type: b,
                //         dataset: response
                //     });
                // })
            }
        }
    }
}