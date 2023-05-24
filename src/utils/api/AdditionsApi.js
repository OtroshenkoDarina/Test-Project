import Base from "./Base";

export default class AdditionsApi extends Base {
    getNewAdditions() {
        return super.get("api/newAdditions").catch(() => null);
    }
}
