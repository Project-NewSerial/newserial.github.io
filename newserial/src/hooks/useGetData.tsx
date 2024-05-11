import { useQuery } from "@tanstack/react-query";
import api from "../api";
import { useSelector } from "react-redux";

interface RootState {
  auth: {
    accessToken: null | string;
  };
}

const useGetData = (url: string) => {
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);

  const getData = async () => {
    const { data } = await api.get(`${url}`, {
      headers: {
        Authorization: `${accessToken}`,
      },
    });

    return data;
  };
  const { isLoading, data } = useQuery({
    queryKey: ["data", accessToken, url],
    queryFn: getData,
  });

  return {isLoading, data};
};

export default useGetData;
