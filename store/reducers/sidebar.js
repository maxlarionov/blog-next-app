import { SET_SIDEBAR_FAILURE, SET_SIDEBAR_REQUEST, SET_SIDEBAR_SUCCESS } from "../types/sidebar"


const initialState = {
	sidebar: {},
	loading: false
}

export const sidebarReduser = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_SIDEBAR_REQUEST:
			return { ...state, loading: true }
		case SET_SIDEBAR_SUCCESS:
			return { ...state, sidebar: payload, loading: false }
		case SET_SIDEBAR_FAILURE:
			return { ...state, loading: false }
		default:
			return state
	}
}