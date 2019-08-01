import { requestURL } from './config'

function getType( data, method) {
	let type = {}
	if(!method) {
		method = 'post'
		type = {
			method,
			data,
			header: {
				'content-type': 'application/x-www-form-urlencoded'
			}
		}
	} else {
		method = 'get'
		type = {
			method,
			params: {
				...data
			}
		}
	}
	return type
}

function Request(data, url, method) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: requestURL + url,
			...getType(data, method),
			success: res => {
				resolve(res)
			},
			fail: err => {
				console.log('err')
				reject(err)
			}
		})
	}).catch(err => {
		console.log(err)
	})
}