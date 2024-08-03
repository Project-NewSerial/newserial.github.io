/**
 * 데이터 로딩 관리 reducer
 * @author 김민지
 */


//액션 타입
const SET_LOADING = "loading/SET_LOADING" as const;
const SET_DONE_LOADING = "loading/SET_DONE_LOADING" as const;

//액션 생성 함수
export const setLoading = () => ({
    type: SET_LOADING,
});

export const setDoneLoading = () => ({
    type: SET_DONE_LOADING,
})



// 액션 객체 타입
type LoadingAction =
    | ReturnType<typeof setLoading>
    | ReturnType<typeof setDoneLoading>

// loading 리덕스 모듈에서 관리할 상태의 타입 선언
type LoadingState = {
    loading: boolean;
}

// 초기 상태 선언
const initialState: LoadingState = {
    loading: true
}


//리듀서
export default function loading(
    state: LoadingState = initialState,
    action: LoadingAction
) {
    switch (action.type) {
        case SET_LOADING:
            return {
                loading: true
            };
        case SET_DONE_LOADING:
            return {
                loading: false

            }

        default:
            return state;
    }
}