import { Satellite } from '@satellite/index'

import {
  clearConnection,
  errorConnection,
  errorMessage,
  loadingAction,
  loadingFullAction
} from '@actions/Connection'
import { store } from '@storage/index'
const { dispatch } = store

export default {
  async getDataNowPlaying() {
    // dispatch(loadingFullAction(true))
    dispatch(loadingAction(true))
    let response = {}
    await Satellite.get('now_playing?language=en-US&page=1')
      .then(res => {
        console.log('success cek ====', res.data)
        response = { status: 'success', data: res.data }
      })
      .catch(error => {
        console.log('error cek ====', error)
        response = { status: 'error', data: error }
        dispatch(errorConnection(true))
      })
      .finally(() => {
        dispatch(clearConnection())
      })

    return response
  },
  async getDataPopular() {
    // dispatch(loadingFullAction(true))
    dispatch(loadingAction(true))
    let response = {}
    await Satellite.get('popular?language=en-US&page=1')
      .then(res => {
        console.log('success cek ====', res.data)
        response = { status: 'success', data: res.data }
      })
      .catch(error => {
        console.log('error cek ====', error)
        response = { status: 'error', data: error }
        dispatch(errorConnection(true))
      })
      .finally(() => {
        dispatch(clearConnection())
      })

    return response
  },
  async getDataUpComing() {
    // dispatch(loadingFullAction(true))
    dispatch(loadingAction(true))
    let response = {}
    await Satellite.get('upcoming?language=en-US&page=1')
      .then(res => {
        console.log('success cek ====', res.data)
        response = { status: 'success', data: res.data }
      })
      .catch(error => {
        console.log('error cek ====', error)
        response = { status: 'error', data: error }
        dispatch(errorConnection(true))
      })
      .finally(() => {
        dispatch(clearConnection())
      })

    return response
  }
}
