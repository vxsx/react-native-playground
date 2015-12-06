import {
    FETCH_USER,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE
} from './actions';
// import { compact, pluck, pick, uniq, sortBy } from 'lodash';
import { combineReducers } from 'redux';

export function user(state = {}, action) {
    switch (action.type) {
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }
}

export function isLoading(state = false, action) {
    switch (action.type) {
        case FETCH_USER:
            return true;
        case FETCH_USER_SUCCESS:
            return false;
        default:
            return state;
    }
}

// export function version(state = '', action) {
//     switch (action.type) {
//         case SET_VERSION:
//             return action.version;
//         default:
//             return state;
//     }
// }
//
// export function members(state = [], action) {
//     switch (action.type) {
//         case FETCH_MEMBERS_SUCCESS:
//             return uniq([...state, ...action.data], 'login')
//                 .map(item => pick(item, 'login'));
//         case SET_VERSION:
//             return [];
//         default:
//             return state;
//     }
// }
//
// export function lastFetched(state = 0, action) {
//     switch (action.type) {
//         case FETCH_REPOS_SUCCESS:
//         case FETCH_MEMBERS_SUCCESS:
//             return Date.now();
//         default:
//             return state;
//     }
// }
//
// export function errorMessage(state = '', action) {
//     switch (action.type) {
//         case FETCH_MEMBERS_FAILURE:
//         case FETCH_REPOS_FAILURE:
//             return action.data.message;
//         case FETCH_REPOS_SUCCESS:
//         case FETCH_MEMBERS_SUCCESS:
//             return '';
//         default:
//             return state;
//     }
// }
//
// export function languages(state = [], action) {
//     switch (action.type) {
//         case FETCH_REPOS_SUCCESS:
//             return compact(uniq([...state, ...pluck(action.data, 'language')]));
//         case SET_VERSION:
//             return [];
//         default:
//             return state;
//     }
// }

export default combineReducers({
    user,
    isLoading
});
