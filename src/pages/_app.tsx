import type { AppProps } from 'next/app'

import { Provider } from 'react-redux'


// store
import { store } from "../redux/store"

// style
import 'primereact/resources/primereact.css';
import 'antd/dist/antd'
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import '../styles/layout/layout.scss';

// type
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'

//layout
import { LayoutProvider } from '../layout/context/layoutcontext';
import Layout from '../layout/layout';

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
        {/* <div className='blind'>겟레이아웃</div> */}
        <LayoutProvider>
          {Component.getLayout(<Component {...pageProps} />)}
        </LayoutProvider>
      </Provider>
    )
  } else {
    return (
      <Provider store={store}>
        {/* <div className='blind'>겟아닌레이아웃</div> */}
        <LayoutProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </LayoutProvider>
      </Provider>
    );
  }
}
