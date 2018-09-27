// 原始默认state
const defaultState = {
    loginStatu:""
}

const SET_LOGIN_STATU = 'SET_LOGIN_STATU';

export function setLoginStatu(index) {
	return {
		type: SET_LOGIN_STATU,
		payload: index
	}
}

export default function Login(state = defaultState, action) {
  switch (action.type) {
    case SET_LOGIN_STATU:
      return { loginStatu:action.payload };
    default:
      return state;
  }
}