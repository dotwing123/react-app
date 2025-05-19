import secureLocalStorage from 'react-secure-storage'
import {ACTION_TYPES} from '../../../constants'

let temp = {
	appToken: secureLocalStorage.getItem('appTkn') || null,
	userId: secureLocalStorage.getItem('userId') || null,
	currentPassword: secureLocalStorage.getItem('dataXvar') || null,
}

const initialState = {
	data: temp,
	loggedUser: secureLocalStorage.getItem('userData') || null,
}

const AuthorizeReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTION_TYPES.AUTHORIZER: {
			return {
				...state,
				data: action.payload,
			}
		}
		case ACTION_TYPES.LOGGED_USER_DATA: {
			return {
				...state,
				loggedUser: action.payload,
			}
		}
		default:
			return state
	}
}
export default AuthorizeReducer
