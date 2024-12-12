import axios from './Interceptor'
import {loginResponseType} from '@/types/API'
const login = (data: any): Promise<loginResponseType> => {
  return axios.post('/login', data)
}

export default {
  login
}