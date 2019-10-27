import fetch from 'cross-fetch';

export function apiRequest(){
    return dispatch => fetch(`https://jsonplaceholder.typicode.com/albums`).then(
        response => response.json(),
        error => console.log(error)
    ).then(json => dispatch(handleSuccess(json)))
}

export function handleSuccess(response){
    return {
        type: 'handle_success',
        payload: response
    }
}