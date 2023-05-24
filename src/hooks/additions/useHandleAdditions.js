import {ADDITIONS_DATA} from "../../constants/additions";
// import AdditionsApi from "../../utils/api/AdditionsApi";

export default function useHandleAdditions() {

    const getNewAdditions = async () => {

        // FOR FUTURE API
        // return new AdditionsApi().getNewAdditions().then(res => {
        //     if (res?.status) {
        //         return res?.data;
        //     } else return null;
        // })

        //FOR MOCK OBJECT
        return ADDITIONS_DATA;
    }

    return {
        getNewAdditions,
    }
}
