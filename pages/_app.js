import '../styles/global.scss'
// import SSRProvider from 'react-bootstrap/SSRProvider';
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }) {
  return ( 
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
