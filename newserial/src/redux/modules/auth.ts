/**
 * accessToken 관리
 * @author 신정은
 */

interface authStateType {
  accessToken: null | string;
}

interface authActionType {
  type: string;
  token: null | string;
}

//액션 타입
const SET_TOKEN = "auth/SET_TOKEN";

//액션 생성 함수
export const setToken = (token: string) => ({
  type: SET_TOKEN,
  token,
});

//초기 상태
const initialState = {
  accessToken: null,
};

//리듀서
export default function auth(
  state: authStateType = initialState,
  action: authActionType
) {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        accessToken: action.token,
      };

    default:
      return state;
  }
}
