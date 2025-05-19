import { ACTION_TYPES } from '../../../constants'

export const setAuthenticate = (payload) => ({
	type: ACTION_TYPES.AUTHORIZER,
	payload,
})

export const setLoggedUser = (payload) => ({
	type: ACTION_TYPES.LOGGED_USER_DATA,
	payload,
})

