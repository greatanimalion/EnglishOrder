import axios from './Interceptor'

const login = (data: any) => {
  return axios.post('/login', data)
}

export default {
  login
}