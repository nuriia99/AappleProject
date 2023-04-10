import '../styles/globals.css'
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Toaster/>
      <Component {...pageProps} />
    </Provider>
  )
}