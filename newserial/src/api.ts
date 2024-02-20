import axios from "axios";
import { setToken } from "./redux/modules/auth";
import store from "./redux/store";

const { dispatch } = store;

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API}`,
});

/**
 *  /reissue api 호출 후 accessToken 저장
 * @author 신정은
 */
const refreshLogin = async () => {
  const { data } = await api.get(`/reissue`, {
    withCredentials: true,
  });
  if (!data) {
    window.location.replace("/login");
  } else {
    dispatch(setToken(data.accessToken));
  }
};

/**
 * 토큰이 없거나 만료됐다는 오류가 발생할 경우 처리
 * @author 신정은
 */
api.interceptors.response.use(
  (res) => {
    return res;
  },
  async (error: any) => {
    const {
      config,
      response: { status },
    } = error;

    if (status === 401) {
      await refreshLogin();
    }
  }
);

export default api;
