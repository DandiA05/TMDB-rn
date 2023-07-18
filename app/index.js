import React, { Fragment } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'

import { PersistGate } from '@middleware/index'
import IndexLayout from '@router/index'
import { store, persistor } from '@storage/index'

const AppLayout = IndexLayout

const App = () => {
  return (
    <Fragment>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <SafeAreaProvider>
            <AppLayout />
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    </Fragment>
  )
}

export default App
