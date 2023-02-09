import '@/styles/globals.css'
import { RouteRounded, RouterRounded } from '@mui/icons-material';
import 'tailwindcss/tailwind.css';
import Layout from '../components/layouts/main'





export default function App({ Component, pageProps,router}) {
  

  return (
  <Layout router={router}>
    <Component {...pageProps} key={router.route} />
  </Layout>
  )
}
