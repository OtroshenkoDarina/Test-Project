import {
    SET_USER_INFO,
} from "../constants/user";
import {SET_INIT_STATE} from "../constants";
import userPhoto from '../../assets/images/user.svg'

const initState = {
    info: {},
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case SET_INIT_STATE:
            return initState

        case SET_USER_INFO:
            return {
                ...state, ...{
                    info: action?.info,
                }
            }

        default:
            return state
    }
}
