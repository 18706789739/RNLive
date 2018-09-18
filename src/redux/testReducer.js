// 原始默认state
const defaultState = {
    music: {
      a:2,
      b:3
    },
}

const SET_MUSIC_ONINDEX = 'SET_MUSIC_ONINDEX';

export function setMusicOnIndex(index) {
	return {
		type: SET_MUSIC_ONINDEX,
		payload: index
	}
}

export default function musicPlayer(state = defaultState, action) {
  switch (action.type) {
    case SET_MUSIC_ONINDEX:
      return { ...state };
    default:
      return state;
  }
}