import { useQuery } from "@tanstack/react-query";
import api from "../../api";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/modules/auth";

/**
 * reissue api 요청 처리하는 hook
 * @author 신정은
 */
const useReissue = (enabled: boolean, message?: string) => {
  const dispatch = useDispatch();

  const getReissue = async () => {
    const { data } = await api.get(`/reissue`, {
      withCredentials: true,
    });

    if (data) {
      dispatch(setToken(data.accessToken));
      return true;
    } else {
      if (message) alert(message);
      return false;
    }
  };

  const { isLoading, data } = useQuery({
    queryKey: ["data"],
    queryFn: getReissue,
    enabled: enabled,
  });

  return { isLoading, data };
};

export default useReissue;
