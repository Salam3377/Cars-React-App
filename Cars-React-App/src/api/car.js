import apiUrl from '../apiConfig'
import axios from 'axios'

export const carCreate = (data, user) => {
	return axios({
		method: 'POST',
		url: apiUrl + '/cars',
		data: {
			car: data,
		},
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}