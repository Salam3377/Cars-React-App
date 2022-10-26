import apiUrl from '../apiConfig'
import axios from 'axios'

// create
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
// index all
export const carIndex = (user) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/cars',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

// show car
export const carShow = (user, id) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/cars/' + id,
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}
// update
export const carUpdate = (data, user, id) => {
	return axios({
		method: 'PATCH',
		url: apiUrl + '/cars/' + id,
		data: {
			car: data,
		},
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

// delete
export const CarDelete = (user, id) => {
	return axios({
		method: 'DELETE',
		url: apiUrl + '/cars/' + id,
		// data: {
		// 	car: data,
		// },
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}