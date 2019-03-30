import axios from 'axios'
import config from 'Root/config'
import querystring from 'querystring'


export const client = axios.create({
  baseURL: config.apiServerAddress,
  headers: {'Content-Type': 'application/json'},
  paramsSerializer: params => querystring.stringify({...params}, '&', '=', {arrayFormat: 'repeat'})
})

const request = function (options, byPassError) {
  const onSuccess = (response) => {
    const {data, headers} = response

    return {data: typeof data.data === 'undefined' ? data : data.data, headers}
  }

  const onError = function (error) {
    if (error.response) {
      // Request was made but server responded with 403
      if (!byPassError && error.response.status === 401) {
        return {}
      }
    } else {
      // eslint-disable-next-line no-console
      console.error('Error Message:', error.message)
    }

    return Promise.reject(error.response || error.message)
  }

  return client(options)
    .then(onSuccess)
    .catch(onError)
}

export default request
