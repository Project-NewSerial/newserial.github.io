import { useQuery } from "@tanstack/react-query";
import api from "../../api/api";
import { useSelector } from "react-redux";

interface RootState {
  auth: {
    accessToken: null | string;
  };
}

/**
 * 대부분의 get요청을 처리하는 hook
 * @author 신정은
 */
const useCommon = (url: string, enabled?: boolean) => {
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);

  const getDataLogin = async () => {
    const { data } = await api.get(`${url}`, {
      headers: {
        Authorization: `${accessToken}`,
      },
    });

    return data;
  };

  const getDataNonLogin = async () => {
    const { data } = await api.get(`${url}`, {
      withCredentials: true,
    });

    return data;
  };

  const { isLoading, data } = useQuery({
    queryKey: ["data", accessToken, url],
    queryFn: accessToken ? getDataLogin : getDataNonLogin,
    enabled: enabled === null ? true : enabled,
  });

  return { isLoading, data };
};

export default useCommon;
