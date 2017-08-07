import axios from 'axios'

const io = axios.create()

io.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('token')

  if (token) {
    config.headers.Authorization = 'Bearer ' + token
  }

  return config
}, (error) => {
  return Promise.reject(error)
})

io.interceptors.response.use((response) => {
  // 根据后端返回的新的token更新客户端token

  return response
}, (error) => {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        window.localStorage.removeItem('token')
    }
  }

  return Promise.reject(error)
})

export default io
