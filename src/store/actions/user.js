import {
    SET_USER_INFO,
} from "../constants/user";

export function setInfo(value) {
    return function (dispatch) {
        return dispatch({
            type: SET_USER_INFO,
            info: value,
        });
    }
}
