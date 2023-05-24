import {SET_INIT_STATE} from "../constants";

export function setInitState() {
    return function (dispatch) {
        return dispatch({
            type: SET_INIT_STATE,
        });
    }
}
