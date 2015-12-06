/* eslint require-jsdoc: 0 */
export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

export function requestUser(userName) {
    return {
        type: FETCH_USER,
        userName
    };
}

export function receiveUser(userName, data) {
    return {
        type: FETCH_USER_SUCCESS,
        userName,
        data
    };
}

export function failUser(userName, data) {
    return {
        type: FETCH_USER_FAILURE,
        userName,
        data
    };
}

export function calculateUserScore(userName) {
    return function (dispatch, getState) {
        console.log('wtf');
        getState();

        dispatch(requestUser(userName));
        fetch(`https://api.github.com/users/${userName}`)
            .then(response => response.json().then(json => ({ json, response })))
            .then(({ json, response }) => {
                if (response.ok) {
                    dispatch(receiveUser(userName, json));
                } else {
                    dispatch(failUser(userName, json));
                }
            }).catch(() => dispatch(failUser(userName, {
                message: `Something is wrong with connection`
            })));
    };
}
