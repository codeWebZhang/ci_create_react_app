import axios from "axios";
/**
 * 登陆
 *
 * @export
 * @param {*}
 * @returns
 */
export function login(body
) {
    return axios.post("/api/login", body, {
        headers: { "Content-Type": "application/json" },
    });
}

/**
 * 获取用户信息
 *
 * @export
 * @param {*}
 * @returns
 */
export function getInfo(
) {
    return axios.get("/api/getUser");
}