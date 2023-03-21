import type { AppProps } from 'next/app'

import { Provider } from 'react-redux'


// store
import { store } from "../redux/store"

// type
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'

//layout

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  if (Component.getLayout) {
    return (
      <Provider store={store}>
        <div className='blind'>겟레이아웃</div>
            {Component.getLayout(<Component {...pageProps} />)}
      </Provider>
    )
  } else {
    return (
      <Provider store={store}>
        <div className='blind'>겟아닌레이아웃</div>
              <Component {...pageProps} />
      </Provider>
    );
  }
}
