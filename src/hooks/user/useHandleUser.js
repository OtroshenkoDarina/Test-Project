// import UsersApi from "../../utils/api/UserApi";
import {useDispatch} from "react-redux";
import * as userAction from "../../store/actions/user";
import {USER_DATA} from "../../constants/user";

export default function useHandleUser() {
    const dispatch = useDispatch();

    const fetchInfo = async () => {

        // FOR FUTURE API
        // return new UsersApi().getInfo().then(res => {
        //     if (res?.status) {
        //         dispatch(userAction.setInfo(res?.data));
        //         dispatch(userAction.setInfo(USER_DATA));
        //         return USER_DATA;
        //     } else return null;
        // })

        //FOR MOCK OBJECT
        dispatch(userAction.setInfo(USER_DATA));
        return USER_DATA;
    }

    return {
        fetchInfo,
    }
}
