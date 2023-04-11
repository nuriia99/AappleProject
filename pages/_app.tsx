import '../styles/globals.css'
import { Provider } from 'react-redux'
import { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import { SessionProvider } from "next-auth/react"
import { persistor, store } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';

export default function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Toaster/>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </SessionProvider>
  )
}