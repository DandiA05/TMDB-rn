import axios from 'axios'
import { API_URL } from 'react-native-dotenv'
import moment from 'moment'

// import Toast from 'react-native-toast-message'

let request_start_at = performance.now()

const instance = axios.create({
  baseURL: `${API_URL}`,
  timeout: 10000,
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGViNDk3OTY4YzhiNjcwYWEyMmMyY2U2OGIxMzY0NyIsInN1YiI6IjY0ODk4NzhmZDJiMjA5MDBhZDNlYjdkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p5sSEx-XWYtUhVKIxgixAc9GIPTIzXA8DoVl3TwDtCo',
    accept: 'application/json'
  }
})

instance.interceptors.response.use(
  response => {
    const request_end_at = performance.now()
    const request_duration = request_end_at - request_start_at

    console.log('')
    console.log('')
    console.log('===========================')
    console.log('RESPONSEE SATTELITE')
    console.log(
      'success url ' + response?.config?.url,
      `${Math.round(request_duration * 100) / 100} ms`
    )

    return response
  },
  error => {
    const request_end_at = performance.now()
    const request_duration = request_end_at - request_start_at
    console.log('')
    console.log('')
    console.log('ERROR SATTELITE')
    console.log(
      'error url ',
      error.config.url,
      `${Math.round(request_duration * 100) / 100} ms`
    )
    console.log('===========================')
    console.log(JSON.stringify(error.response, null, 2))
    console.log('===========================')

    console.log('TIMEEOUTT', error?.response?.status)
    if (
      error.message.includes('timeout') ||
      error?.response?.status >= 500 ||
      error?.response?.status === 0
    ) {
      // Toast.show({
      //   type: 'error',
      //   text1: `ERROR ${error?.response?.status || ''}`,
      //   text2: 'Terjadi Kesalahan Silahkan Coba Lagi',
      //   visibilityTime: 3000
      // })
    } else {
      throw error
    }
  }
)

export default instance
