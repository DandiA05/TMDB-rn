import { applyMiddleware, createStore } from 'redux'
import EncryptedStorage from 'react-native-encrypted-storage'
import { persistStore, persistReducer } from 'redux-persist'
import { AuthMiddleware } from '@middleware/index'

import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from '@store/reducers/index'

const persistConfig = {
  key: 'redux',
  storage: EncryptedStorage,
  blacklist: [],
  whitelist: []
}

const middlewares = [thunk, __DEV__ && logger, AuthMiddleware].filter(Boolean)
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares)
)
export const persistor = persistStore(store)

export const LocalStorage = {
  _retrieveData: async key => {
    try {
      const value = await EncryptedStorage.getItem(`@RMy:${key}`)
      if (value !== null && typeof value !== 'undefined') {
        return value
      }
      return null
    } catch (error) {
      console.log('Error retrive data', error)
    }
  },

  _storeData: async (key, value) => {
    try {
      await EncryptedStorage.setItem(`@RMy:${key}`, JSON.stringify(value))
    } catch (error) {
      console.log('Error saving data', error)
    }
  }
}
