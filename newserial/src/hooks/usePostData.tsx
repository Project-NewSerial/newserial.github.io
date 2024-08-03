import { useMutation } from "@tanstack/react-query";
import api from "../api";
import { useSelector } from "react-redux";

interface RootState {
  auth: {
    accessToken: null | string;
  };
}

const usePostData = (url: string) => {
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);

  const postData = async () => {
    const { data } = await api.post(`${url}`, {
      headers: {
        Authorization: `${accessToken}`,
      },
    });

    return data;
  };

  const { mutate } = useMutation({
    mutationFn: postData,
  });

  return [mutate];
};

export default usePostData;