import { SET_SIDEBAR_FAILURE, SET_SIDEBAR_REQUEST, SET_SIDEBAR_SUCCESS } from "../types/sidebar"


export const setSidebarLang = (data) => {
	return (dispatch) => {
		dispatch(setSidebarLangRequest())
		dispatch(setSidebarLangSuccess(data))
		dispatch(setSidebarLangFailer())
	}
}

export const setSidebarLangRequest = () => ({
	type: SET_SIDEBAR_REQUEST
})

export const setSidebarLangSuccess = (payload) => ({
	type: SET_SIDEBAR_SUCCESS,
	payload
})

export const setSidebarLangFailer = () => ({
	type: SET_SIDEBAR_FAILURE
})