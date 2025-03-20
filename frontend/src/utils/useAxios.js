import axios from "axios";
import { isAccessTokenExpired, setAuthUser, getRefreshToken } from "./auth";
import { BASE_URL } from "./constants";
import Cookies from "js-cookie";

const useAxios = async () => {
    const access_token = Cookies.get("access_token");
    const refresh_token = Cookies.get("refresh_token");
    const apiInstance = axios.create({
        baseURL: BASE_URL,
        headers: {
            Authorisation: `Bearer ${access_token}`,
        },
    });

    axiosInstance.interceptors.response.use(
        async (req) => {
            if (isAccessTokenExpired(access_token)) {
                return req;
            }
            const response = await getRefreshToken(refresh_token);
            setAuthUser(response.access, refresh_token);
            return apiInstance;

            req.headers["Authorisation"] = `Bearer ${response.access}`;
            return req;
        }
    );
    return axiosInstance;

};

export default useAxios;