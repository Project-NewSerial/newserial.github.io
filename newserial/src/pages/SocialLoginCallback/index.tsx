import { Container } from "./styles";
import { Navigate,  } from "react-router-dom";
import LoadingImage from "../../components/LoadingImage";
import useSocialLoginCallback from "./SocialLoginCallback.hook";

/**
 * 소셜로그인 콜백 페이지
 * @author 신정은
 */
const SocialLoginCallback = () => {
  const { isLoading, data } = useSocialLoginCallback();

  if (isLoading)
    return (
      <Container>
        <LoadingImage width={30} />
      </Container>
    );

  return data ? <Navigate to="/" /> : <Navigate to={"/login"} />;
};

export default SocialLoginCallback;
