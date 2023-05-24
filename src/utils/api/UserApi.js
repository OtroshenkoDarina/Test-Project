import Base from "./Base";

export default class UserApi extends Base {
    getInfo() {
        return super.get("api/user").catch(() => null);
    }
}
